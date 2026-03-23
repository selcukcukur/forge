import type {
  Argument,
  ParsedArguments
} from "../../type/console"

export function parseArguments<T extends Argument[]>(
  defs: T = [] as unknown as T,
  tokens: string[] = []
): ParsedArguments<T> {
  const args: Partial<ParsedArguments<T>> = {}

  defs.forEach((argDef, i) => {
    const val = tokens[i]
    if (!val && argDef.required) {
      throw new Error(`Missing required argument: ${argDef.name}`)
    }
    if (val) {
      args[argDef.name as keyof ParsedArguments<T>] = val
    }
  })

  return args as ParsedArguments<T>
}
