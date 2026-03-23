import type {
  Option,
  Options
} from "../../type"

/**
 * Parse console tokens into structured options
 *
 * **Purpose**
 * - Converts raw command-line tokens into a strongly typed `Options<T>` object
 * - Matches tokens against the provided option definitions
 * - Supports long (`--name`), short (`-n`), inline (`--name=value`) and default values
 *
 * **Parameters**
 * - `definitions` - The option definitions to validate against
 * - `tokens` - Raw console tokens to parse
 *
 * **Usage**
 * ```ts
 * const options = parseOptions([
 *   { name: "force", description: "Force rebuild", alias: "f" },
 *   { name: "output", description: "Output directory", default: "dist" }
 * ], ["--force", "--output=build"])
 * ```
 *
 * @template T - Array of option definitions
 */
export function parseOptions<T extends Option[]>(
  definitions: T,
  tokens: string[]
): Options<T> {
  // Initialize an empty object to store parsed options
  const options: Options<T> = {}

  // Iterate over each token from the input
  tokens.forEach((token, index, list) => {
    if (token.startsWith("--")) {
      // Case 1: Long option format, e.g. --name or --name=value
      const [key, val] = token.replace(/^--/, "").split("=")

      // Find the option definition that matches the key
      const definition = definitions.find(o => o.name === key)
      if (!definition) throw new Error(`Unknown option: --${key}`)

      // Assign the value:
      // - If inline value exists (--name=value), use it
      // - Else use the next token (--name value)
      // - If neither exists, default to boolean true (--flag)
      options[definition.name as keyof Options<T>] = val ?? list[index + 1] ?? true
    } else if (token.startsWith("-")) {
      // Case 2: Short alias format, e.g. -n
      const alias = token.replace(/^-/, "")

      // Find the option definition that matches the alias
      const definition = definitions.find(o => o.alias === alias)
      if (!definition) throw new Error(`Unknown option alias: -${alias}`)

      // Assign the value:
      // - Use the next token (-n value)
      // - If no next token, default to boolean true (-f)
      options[definition.name as keyof Options<T>] = list[index + 1] ?? true
    }
  })

  // After processing tokens, fill in default values
  definitions.forEach(definition => {
    // If option was not provided and has a defaultValue, assign it
    if (!(definition.name in options) && definition.default) {
      options[definition.name as keyof Options<T>] = definition.default
    }
  })

  // Return the parsed options object
  return options
}
