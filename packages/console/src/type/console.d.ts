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

export type ParsedArguments<T extends Argument[]> = {
  [K in T[number]["name"]]: string
}

export type ParsedOptions<T extends Option[]> = {
  [K in T[number]["name"]]?: string | boolean
}

export interface Command {
  name: string
  description: string
  arguments?: Argument[]
  options?: Option[]
  action: (args?: Record<string, string>, opts?: Record<string, string>) => any
}
