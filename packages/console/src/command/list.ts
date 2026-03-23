import { Command } from "../command"

export type ListCommandOutput = {
  type: "list"
  banner: {
    name: string
    version: string
    description?: string
  }
  commands: {
    name: string
    description: string
    arguments: {
      name: string
      description: string
      required?: boolean
    }[]
    options: {
      name: string
      description: string
      alias?: string
      defaultValue?: string
    }[]
  }[]
}

export const ListCommand = new Command()
  .name("list")
  .description("Display all available commands")
  .action((input, app) => {
    return {
      type: "list",
      banner: {
        name: app.name(),
        version: app.version(),
        description: app.description()
      },
      commands: app.list().map(command => ({
        name: command.name,
        description: command.description,
        arguments: command.arguments ?? [],
        options: command.options ?? []
      }))
    }
  })
