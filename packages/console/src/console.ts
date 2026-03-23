import type { Command } from "./type/console"

import {
  parseArguments,
  parseOptions
} from "./utility"

export class Console {
  private commands: Command[] = []

  register(command: Command) {
    this.commands.push(command)
  }

  list() {
    return this.commands
  }

  run(input: string) {
    const tokens = input.trim().split(/\s+/)
    const [name, ...rest] = tokens
    const cmd = this.commands.find(c => c.name === name)

    if (!cmd) {
      return { type: "error", message: `Command not found: ${name}` }
    }

    try {
      const args = parseArguments(cmd.arguments, rest)
      const opts = parseOptions(cmd.options, rest.slice(cmd.arguments?.length || 0))
      return cmd.action(args, opts)
    } catch (err: any) {
      return { type: "error", message: err.message }
    }
  }
}
