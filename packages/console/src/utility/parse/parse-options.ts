import type {
  Option,
  ParsedOptions
} from "../../type/console"

export function parseOptions<T extends Option[]>(
  defs: T = [] as unknown as T,
  tokens: string[] = []
): ParsedOptions<T> {
  const opts: ParsedOptions<T> = {}

  tokens.forEach((token, i, arr) => {
    if (token.startsWith("--")) {
      const [key, val] = token.replace(/^--/, "").split("=")
      const def = defs.find(o => o.name === key)
      if (!def) {
        throw new Error(`Unknown option: --${key}`)
      }
      opts[def.name as keyof ParsedOptions<T>] = val ?? arr[i + 1] ?? true
    } else if (token.startsWith("-")) {
      const alias = token.replace(/^-/, "")
      const def = defs.find(o => o.alias === alias)
      if (!def) {
        throw new Error(`Unknown option alias: -${alias}`)
      }
      opts[def.name as keyof ParsedOptions<T>] = arr[i + 1] ?? true
    }
  })

  // Default değerleri doldur
  defs.forEach(def => {
    if (!(def.name in opts) && def.defaultValue) {
      opts[def.name as keyof ParsedOptions<T>] = def.defaultValue
    }
  })

  return opts
}
