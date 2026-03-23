import type {
  ConsoleOptions,
  Console,
  Input,
  Command
} from "./type"

import {
  parseArguments,
  parseOptions
} from "./utility"

import { ListCommand } from "./command/list"

/**
 * Factory function to create a new console instance
 *
 * @param options - Console options (name, version, description, commands)
 *
 * @returns Console
 */
function createConsole(options: ConsoleOptions): Console {
  const commands: Command[] = [
    ListCommand,
    ...(options.commands || [])
  ]

  return {
    /**
     * Get console application name
     */
    name: () => options.name || "Forge",

    /**
     * Get console application version
     */
    version: () => options.version || "0.0.1",

    /**
     * Get console application description
     */
    description: () => options.description || "",

    /**
     * Get all registered commands
     */
    commands: () => commands,

    register: (command: Command) => {
      commands.push(command)
    },

    /**
     * Run a command by parsing input string
     *
     * **Parameters**
     * - `input` - Raw command input string (e.g. "make:command User --force")
     *
     * @returns Result of the command action or an error object
     */
    run: (input: string) => {
      // Split raw input string into tokens by whitespace
      const tokens = input.trim().split(/\s+/)

      // First token is the command name, the rest are arguments/options
      const [name, ...rest] = tokens

      // Find the matching command by its name
      const command = commands.find(
        command => command.name() === name
      )

      // If no command is found, return a structured error
      if (! command) {
        return { type: "error", message: `Command not found: ${name}` }
      }

      try {
        // Parse positional arguments based on the command definition
        const args = parseArguments(command.arguments() ?? [], rest)

        // Parse options (flags/key-values) after arguments
        const opts = parseOptions(
          command.options() ?? [],
          rest.slice(command.arguments()?.length || 0)
        )

        // Build parsed input object
        const parsed: Input = { args, opts }

        return command.action(parsed)
      } catch (error: any) {
        // Return structured error if parsing or execution fails
        return { type: "error", message: error.message }
      }
    }
  }
}

export default createConsole
