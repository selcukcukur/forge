import useSWR from "swr"
import { fetcher } from "@obvia/utilities/next"

import type { CommandOutput } from "../../library/type/console"

/**
 * Execute terminal commands via fetchers
 *
 * **Parameter**
 * - `command` – The command string to execute (e.g., "about", "help")
 *
 * **Usage**
 * ```tsx
 * const { output, isLoading, isError, refresh } = useCommand("about")
 *
 * if (isLoading) return <p>thinking...</p>
 * if (isError) return <p>Error loading command</p>
 *
 * return <p>{output?.content}</p>
 * ```
 */
export function useCommand(command?: string | null) {
  const { data, error, isLoading, mutate } = useSWR<CommandOutput>(
    command ? ["/api/terminal", command] : null,
    () => fetcher<CommandOutput>(`/api/terminal?cmd=${encodeURIComponent(command!)}`),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: true,
    }
  )

  return {
    output: data,
    isLoading,
    isError: !!error,
    error,
    refresh: mutate,
  }
}
