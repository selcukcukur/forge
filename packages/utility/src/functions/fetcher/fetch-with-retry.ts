/**
 * Performs a fetch request with retry and timeout support
 *
 * **Parameters**
 * - `input` – The URL or RequestInfo to fetch
 * - `init` – Optional fetch configuration (method, headers, etc.)
 * - `options` – Retry configuration
 *    - `timeout` – Maximum time in milliseconds before the request is aborted (default: 5000)
 *    - `maxRetries` – Total number of retry attempts (default: 10)
 *    - `retryDelay` – Base delay in milliseconds between retries (default: 1000)
 *
 * **Usage**
 * ```ts
 * // Basic usage with retry and timeout
 * try {
 *   // Fetch with a 3‑second timeout and up to 5 retries
 *   const response = await fetchWithRetry("/api/user", { method: "GET" }, { timeout: 3000, maxRetries: 5 })
 *
 *   // Parse response
 *   const data = await response.json()
 *
 *   // Handle response data
 *   console.log(data)
 * } catch (error) {
 *   // Handle error
 *   console.error(error.message)
 * }
 *
 * // Example with slow endpoint and exponential backoff
 * try {
 *   // Fetch with a 2‑second timeout, up to 3 retries, and exponential backoff
 *   const response = await fetchWithRetry("/api/slow-endpoint", {}, { timeout: 2000, maxRetries: 3, retryDelay: 500 })
 *
 *   // Parse response
 *   const json = await response.json()
 *
 *   // Handle response data
 *   console.log(json)
 * } catch (error) {
 *   // Handle error
 *   console.error("Final error:", error.message)
 * }
 * ```
 */
export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  options: {
    // Max time (ms) before request is aborted
    timeout?: number
    // Total number of retry attempts
    maxRetries?: number
    // Base delay (ms) between retries
    retryDelay?: number
  } = {}
): Promise<Response> {
  // Destructure and apply default values for retry configuration
  const { timeout = 5000, maxRetries = 10, retryDelay = 1000 } = options

  // Track the last error to report if all retries fail
  let lastError: Error | null = null

  // Attempt the request up to `maxRetries` times
  for (let i = 0; i < maxRetries; i++) {
    // Create a new AbortController for each attempt
    const controller = new AbortController()

    // Schedule a timeout to abort the request if it takes too long
    const timeoutId = setTimeout(() => {
      controller.abort()
    }, timeout)

    try {
      // Perform the fetch with the abort signal attached
      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
      })

      // Clear the timeout once the response is received
      clearTimeout(timeoutId)

      // If the response is successful (status 2xx), return it immediately
      if (response.ok) {
        return response
      }

      // Retry on rate limiting (429) or server errors (5xx)
      if (response.status === 429 || response.status >= 500) {
        const delay = retryDelay + Math.pow(i, 2) * 50 // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue // Retry the request
      }

      // Immediately fail on unauthorized access
      if (response.status === 403) {
        throw new Error("Unauthorized")
      }

      // For other non-OK responses, attempt to extract an error message
      if (!response.ok) {
        let errorMessage: string
        try {
          const error = await response.json()
          errorMessage = error.error || `HTTP error ${response.status}`
        } catch {
          errorMessage = `HTTP error ${response.status}`
        }

        console.error(`fetchWithRetry error: ${errorMessage}`)
        throw new Error(errorMessage)
      }
    } catch (error) {
      // Clear the timeout in case of fetch failure or abort
      clearTimeout(timeoutId)

      // Normalize the error object
      lastError = error instanceof Error ? error : new Error(String(error))

      // If this was the final attempt, throw the last error
      if (i === maxRetries - 1) {
        const errMsg = `Failed after ${maxRetries} retries. Last error: ${lastError.message}`
        console.error(`fetchWithRetry error: ${errMsg}`)
        throw new Error(errMsg)
      }

      // Wait before retrying (network error, timeout, etc.)
      const delay = retryDelay + Math.pow(i, 2) * 50
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }

  // This line should never be reached due to the throw above,
  // but is required for TypeScript type safety
  throw new Error(`Failed after ${maxRetries} retries`)
}
