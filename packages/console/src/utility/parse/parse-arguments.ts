import type {
  Argument,
  ParsedArguments
} from "../../type/console"

export function parseArguments<T extends Argument[]>(
  defs: T,
  tokens: string[]
): ParsedArguments<T> {
  // Create a temporary object to store parsed arguments
  const args: Partial<ParsedArguments<T>> = {}

  // Iterate over each argument definition
  defs.forEach((argDef, i) => {
    // Get the token at the same index as the argument definition
    const val = tokens[i]

    // If the argument is required but no value is provided, throw an error
    if (!val && argDef.required) {
      throw new Error(`Missing required argument: ${argDef.name}`)
    }

    // If a value exists, assign it to the argument name
    if (val) {
      args[argDef.name as keyof ParsedArguments<T>] = val
    }
  })

  // Return the parsed arguments object, cast to the correct type
  return args as ParsedArguments<T>
}
