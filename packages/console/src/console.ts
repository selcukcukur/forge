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

  /**
   * Register a new console command
   *
   * **Parameters**
   * - `command` - Command definition to add
   *    - `name` -> Unique identifier for the command
   *    - `description` -> Short explanation of what the command does
   *    - `arguments` -> List of expected arguments (name, description, required)
   *    - `options` -> List of available options (name, description, alias, defaults)
   *    - `action` -> Function executed when the command is run
   */
  register(command: Command) {
    this.commands.push(command)
  }

  /** Get application name */
  name() {
    return this.app.name
  }

  /** Get application version */
  version() {
    return this.app.version
  }

  /** Get application description */
  description() {
    return this.app.description
  }

  /** List all registered commands */
  list() {
    return this.commands
  }

  /**
   * Run a command by parsing input string
   *
   * **Parameters**
   * - `input` - Raw command input string (e.g. "make:command User --force")
   *
   * @returns Result of the command action or an error object
   */
  run(input: string) {
    // Tokenize input by whitespace
    const tokens = input.trim().split(/\s+/)

    // First token is the command name, rest are arguments/options
    const [name, ...rest] = tokens

    // Find the command definition by name
    const command = this.commands.find(c => c.name === name)

    // If command not found, return structured error
    if (! command) {
      return { type: "error", message: `Command not found: ${name}` }
    }

    try {
      // Parse arguments according to command definition
      const parsedArguments = parseArguments(command.arguments ?? [], rest)

      // Parse options after arguments
      const parsedOptions = parseOptions(
        command.options ?? [],
        rest.slice(command.arguments?.length || 0)
      )

      // Execute the command's action with parsed arguments and options
      return command.action({
        args: parsedArguments,
        opts: parsedOptions
      })
    } catch (err: any) {
      // Catch parsing or execution errors and return structured error
      return { type: "error", message: err.message }
    }
  }
}
