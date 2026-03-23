import type { Application, Command } from "./type/console"

import {
  parseArguments,
  parseOptions
} from "./utility"

export class Console {
  /**
   * Console application metadata
   *
   * @private
   */
  private app: Application

  /**
   * Registered console commands
   *
   * @private
   */
  private commands: Command[] = []

  /**
   * Create a new console application instance
   *
   * **Parameters**
   * - `app` - Application metadata (name, version, description)
   * - `commands` - Optional initial set of commands
   *
   * @constructor
   */
  constructor(app: Application, commands?: Command[]) {
    this.app = app
    this.commands = commands || []
  }

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



  name() {
    return this.app.name
  }
  version() {
    return this.app.version
  }
  description() {
    return this.app.description
  }
}
