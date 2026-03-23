export interface Application {
  name: string
  version: string
  description?: string
}


export interface Argument {
  name: string
  description: string
  required?: boolean
}

export interface Option {
  name: string
  description: string
  alias?: string
  defaultValue?: string
}

export interface Command<A extends Argument[] = Argument[], O extends Option[] = Option[]> {
  name: string
  description: string
  arguments?: A
  options?: O
  action: (input: ParsedInput<A, O>) => any
}

export type ParsedArguments<T extends Argument[]> = {
  [K in T[number]["name"]]: string
}

export type ParsedOptions<T extends Option[]> = {
  [K in T[number]["name"]]?: string | boolean
}

export interface ParsedInput<A extends Argument[] = Argument[], O extends Option[] = Option[]> {
  args: ParsedArguments<A>
  opts: ParsedOptions<O>
}
