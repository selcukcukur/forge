import type {
  Option,
  Options
} from "../../type"

export function parseOptions<T extends Option[]>(
  defs: T,
  tokens: string[]
): Options<T> {
  // Initialize an empty object to store parsed options
  const opts: Options<T> = {}

  // Iterate over each token from the input
  tokens.forEach((token, i, arr) => {
    if (token.startsWith("--")) {
      // Case 1: Long option format, e.g. --name or --name=value
      const [key, val] = token.replace(/^--/, "").split("=")

      // Find the option definition that matches the key
      const def = defs.find(o => o.name === key)
      if (!def) throw new Error(`Unknown option: --${key}`)

      // Assign the value:
      // - If inline value exists (--name=value), use it
      // - Else use the next token (--name value)
      // - If neither exists, default to boolean true (--flag)
      opts[def.name as keyof Options<T>] = val ?? arr[i + 1] ?? true
    } else if (token.startsWith("-")) {
      // Case 2: Short alias format, e.g. -n
      const alias = token.replace(/^-/, "")

      // Find the option definition that matches the alias
      const def = defs.find(o => o.alias === alias)
      if (!def) throw new Error(`Unknown option alias: -${alias}`)

      // Assign the value:
      // - Use the next token (-n value)
      // - If no next token, default to boolean true (-f)
      opts[def.name as keyof Options<T>] = arr[i + 1] ?? true
    }
  })

  // After processing tokens, fill in default values
  defs.forEach(def => {
    // If option was not provided and has a defaultValue, assign it
    if (!(def.name in opts) && def.default) {
      opts[def.name as keyof Options<T>] = def.default
    }
  })

  // Return the parsed options object
  return opts
}
