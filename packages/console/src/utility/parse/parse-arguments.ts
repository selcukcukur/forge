import type {
  Argument,
  Arguments
} from "../../type"

/**
 * Parse console tokens into structured arguments
 *
 * **Purpose**
 * - Converts raw command-line tokens into a strongly typed `Arguments<A>` object
 * - Matches tokens against the provided argument definitions
 * - Ensures required arguments are present and in the correct order
 *
 * **Parameters**
 * - `definitions` - The argument definitions to validate against
 * - `tokens` - Raw console tokens to parse
 *
 * **Usage**
 * ```ts
 * const args = parseArguments([
 *   { name: "game", description: "Game name", required: true },
 *   { name: "action", description: "Action (run, end, reset)" }
 * ], ["snake", "run"])
 * ```
 *
 * @template A - Array of argument definitions
 */
export function parseArguments<T extends Argument[]>(
  definitions: T,
  tokens: string[]
): Arguments<T> {
  // Create a temporary object to store parsed arguments
  const args: Partial<Arguments<T>> = {}

  // Iterate over each argument definition
  definitions.forEach((argument, index) => {
    // Get the token at the same index as the argument definition
    const value = tokens[index]

    // If the argument is required but no value is provided, throw an error
    if (!value && argument.required) {
      throw new Error(`Missing required argument: ${argument.name}`)
    }

    // If a value exists, assign it to the argument name
    if (value) {
      args[argument.name as keyof Arguments<T>] = value
    }
  })

  // Return the parsed arguments object, cast to the correct type
  return args as Arguments<T>
}
