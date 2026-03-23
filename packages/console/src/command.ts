import type {
  Argument,
  Option,
  ParsedInput,
  IConsole
} from "./type"

/**
 * Represents a console command definition
 *
 * **Capsule**
 * - Metadata (name, description)
 * - Arguments (expected positional inputs)
 * - Options (flags or key-value inputs)
 * - Action (function executed when the command runs)
 *
 * **Usage**
 * ```ts
 * const ListCommand = new Command()
 *   .name("list")
 *   .description("Display all available commands")
 *   .action((_input, app) => {
 *     return {
 *       type: "list",
 *       banner: {
 *         name: app.name(),
 *         version: app.version(),
 *         description: app.description()
 *       },
 *       commands: app.list().map(c => ({
 *         name: c.getName,
 *         description: c.getDescription
 *       }))
 *     }
 *   })
 * ```
 *
 * @template A - Array of Argument definitions
 * @template O - Array of Option definitions
 */
export class Command<A extends Argument[] = Argument[], O extends Option[] = Option[]> {
  private _name!: string
  private _description!: string
  private _arguments?: A
  private _options?: O
  private _action!: (input: ParsedInput<A, O>, app: IConsole) => any

  /** Set the command name */
  name(name: string): this {
    this._name = name
    return this
  }

  /** Set the command description */
  description(desc: string): this {
    this._description = desc
    return this
  }

  /** Define expected arguments */
  arguments(args: A): this {
    this._arguments = args
    return this
  }

  /** Define available options */
  options(opts: O): this {
    this._options = opts
    return this
  }

  /** Define the action executed when the command runs */
  action(fn: (input: ParsedInput<A, O>, app: IConsole) => any): this {
    this._action = fn
    return this
  }

  /** Get command name */
  get getName() { return this._name }

  /** Get command description */
  get getDescription() { return this._description }

  /** Get command arguments */
  get getArguments() { return this._arguments }

  /** Get command options */
  get getOptions() { return this._options }

  /** Get command action */
  get getAction() { return this._action }
}
