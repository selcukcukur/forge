/**
 * Performs a fetch request with a timeout limit
 *
 * **Parameters**
 * - `input` – The URL or RequestInfo to fetch
 * - `init` – Optional fetch configuration (method, headers, etc.)
 * - `timeout` – Maximum time in milliseconds before the request is aborted
 *
 * **Usage**
 * ```ts
 * // Fetch with a 3‑second timeout
 * const response = await fetchWithTimeout("/api/user", { method: "GET" }, 3000)
 *
 * // Parse response
 * const data = await response.json()
 *
 * // Handle timeout error
 * try {
 *   // Fetch with a 2‑second timeout
 *   const response = await fetchWithTimeout("/api/slow-endpoint", {}, 2000)
 *
 *   // Handle timeout error
 *   const json = await response.json()
 * } catch (error) {
 *   // "Request timed out"
 *   console.error(error.message)
 * }
 * ```
 */
export function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  timeout: number = 5000
): Promise<Response> {
  // Wrap the fetch request in a promise with a timeout
  return new Promise<Response>((resolve, reject) => {
    // Create an AbortController to cancel the request if it exceeds the timeout
    const controller = new AbortController()

    // Schedule a timeout to trigger the abort after the specified duration
    const timeoutId = setTimeout(() => {
      // Cancel the fetch request
      controller.abort()

      // Reject with a timeout error
      reject(new Error("Request timed out"))
    }, timeout)

    // Perform the fetch request with the abort signal attached
    fetch(input, { ...init, signal: controller.signal })
      .then((response) => {
        // Clear the timeout once response is received
        clearTimeout(timeoutId)

        // Resolve the promise with the response
        resolve(response)
      })
      .catch((error) => {
        // Clear the timeout on error
        clearTimeout(timeoutId)

        // Reject with the encountered error
        reject(error)
      })
  })
}
