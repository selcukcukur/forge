/**
 * Extended error interface for swr compatibility
 */
interface SWRError extends Error {
  // Parsed error payload can be string or object
  info: string | Record<string, unknown>

  // Status code
  status: number
}

/**
 * Custom fetcher function compatible with SWR and other data-fetching libraries
 *
 * **Parameters**
 * - `input` – The URL or request info to fetch
 * - `init` – Optional fetch configuration (method, headers, etc.)
 *
 * **Usage**
 * ```ts
 * // Direct usage without SWR
 * try {
 *   // Parse JSON response body
 *   const user = await fetcher<User>("/api/user")
 *
 *   // Access parsed response data
 *   console.log(user.name)
 * } catch (error) {
 *   // Access enriched error info and status
 *   const error = error as SWRError
 *
 *   // Handle error
 *   console.error(error.info, error.status)
 * }
 * ```
 */
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit & { headers?: Record<string, string> },
): Promise<JSON> {
  // Perform the fetch request with optional headers
  const response = await fetch(input, {
    ...init,
    ...(init?.headers && { headers: init.headers }), // Only include headers if defined
  })

  // If the response is not successful (status not in 2xx range)
  if (!response.ok) {
    // Attempt to extract a meaningful error message from the response body
    const message = (await response.json())?.error?.message || "An error occurred while fetching the data."

    // Construct a typed error object compatible with SWR
    const error = new Error(message) as SWRError

    // Attach the parsed error message
    error.info = message

    // Attach the HTTP status code
    error.status = response.status

    // Throw the enriched error to be handled by SWR or caller
    throw error
  }

  // If the response is successful, parse and return the JSON body
  return response.json()
}
