/**
 * Represents a positional argument definition for a console command
 *
 * **Purpose**
 * - Defines the expected inputs that a command should receive in order
 * - Each argument has a name, a description and an optional required flag
 *
 * **Usage**
 * ```ts
 * const PlayCommand = createCommand({
 *   name: "play",
 *   description: "Play available games",
 *   arguments: [
 *     { name: "game", description: "Game name", required: true },
 *     { name: "action", description: "Action (run, end, reset)" }
 *   ],
 *   action: (input) => {
 *     // input.args[0] -> game
 *     // input.args[1] -> action
 *   }
 * })
 * ```
 */
export interface Argument {
  /** Unique identifier for the argument */
  name: string
  /** Short explanation of what the argument represents */
  description: string
  /** Whether the argument is required */
  required?: boolean
}

/**
 * Represents the parsed arguments object for a command
 *
 * **Purpose**
 * - Converts an array of Argument definitions into a strongly typed object
 * - Each argument's name becomes a key in the resulting type
 * - Each key maps to a string value (the user-provided input)
 *
 * **Usage**
 * ```ts
 * type PlayArgs = Arguments<[
 *   { name: "game", description: "Game name", required: true },
 *   { name: "action", description: "Action (run, end, reset)" }
 * ]>
 * ```
 *
 * @template T - Array of argument definitions
 */
export type Arguments<T extends Argument[]> = {
  /** Key-value mapping of argument names to user-provided string values */
  [K in T[number]["name"]]: string
}

/**
 * Represents a flag or key-value option for a console command
 *
 * **Purpose**
 * - Defines optional modifiers or parameters that can be passed to a command
 * - Options typically start with `--` or `-` in the console
 * - Each option can have a name, description, alias, and default value
 *
 * **Usage**
 * ```ts
 * const BuildCommand = createCommand({
 *   name: "build",
 *   description: "Compile the project",
 *   options: [
 *     { name: "force", description: "Force rebuild", alias: "f" },
 *     { name: "output", description: "Output directory", default: "dist" }
 *   ],
 *   action: (input) => {
 *     // input.opts.force -> "true" if provided
 *     // input.opts.output -> "dist" or user-provided value
 *   }
 * })
 * ```
 */
export interface Option {
  /** Unique identifier for the option */
  name: string
  /** Short explanation of what the option does */
  description: string
  /** Optional shorthand alias for the option */
  alias?: string
  /** Default value if the option is not provided by the user */
  default?: string
}

/**
 * Represents the parsed options object for a command
 *
 * **Purpose**
 * - Converts an array of `Option` definitions into a strongly typed object
 * - Each option's `name` becomes a key in the resulting type
 * - Each key maps to either
 *   - `string` → if the option expects a value (e.g. `--output dist`)
 *   - `boolean` → if the option is a flag (e.g. `--force`)
 *
 * **Usage**
 * ```ts
 * type BuildOpts = Options<[
 *   { name: "force", description: "Force rebuild", alias: "f" },
 *   { name: "output", description: "Output directory", default: "dist" }
 * ]>
 * ```
 *
 * @template T - Array of option definitions
 */
export type Options<T extends Option[]> = {
  /** Key-value mapping of option names to user-provided values or flags */
  [K in T[number]["name"]]?: string | boolean
}

/**
 * Represents the parsed input for a console command
 *
 * **Purpose**
 * - Combines parsed positional arguments (`arguments`) and parsed options (`options`)
 *   into a single object passed to the command's action
 * - Ensures type safety by mapping `Argument[]` → `Arguments<A>`
 *   and `Option[]` → `Options<O>`
 *
 * **Usage**
 * ```ts
 * const PlayCommand = createCommand({
 *   name: "play",
 *   description: "Play available games",
 *   arguments: [
 *     { name: "game", description: "Game name", required: true },
 *     { name: "action", description: "Action (run, end, reset)" }
 *   ],
 *   options: [
 *     { name: "force", description: "Force restart", alias: "f" }
 *   ],
 *   action: (input) => {
 *     // input.arguments.game -> string
 *     // input.arguments.action -> string | undefined
 *     // input.options.force -> boolean | undefined
 *   }
 * })
 * ```
 *
 * @template A - Array of argument definitions
 * @template O - Array of option definitions
 */
export interface Input<A extends Argument[] = Argument[], O extends Option[] = Option[]> {
  /** Parsed positional arguments based on the command's definition */
  arguments: Arguments<A>
  /** Parsed options (flags or key-value pairs) based on the command's definition */
  options: Options<O>
}










export interface Console {
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
  register(command: Command): void

  /** Get application name */
  name(): string

  /** Get application version */
  version(): string

  /** Get application description */
  description(): string | undefined

  /** List all registered commands */
  commands(): Command[]

  /**
   * Run a command by parsing input string
   *
   * **Parameters**
   * - `input` - Raw command input string (e.g. "make:command User --force")
   *
   * @returns Result of the command action or an error object
   */
  run(input: string): any
}

export interface ConsoleOptions {
  name?: string
  version?: string
  description?: string
  commands?: Command[]
}

export interface Command {
  /** Get the command name **/
  name: () => string
  /** Get the command description **/
  description: () => string
  /** Get the command arguments **/
  arguments: () => Argument[] | undefined
  /** Get the command options **/
  options: () => Option[] | undefined
  /** Execute the command action **/
  action: (input: ParsedInput) => any
}

export interface CommandOptions<A extends Argument[] = [], O extends Option[] = []> {
  name: string
  description?: string
  arguments?: A
  options?: O
  action: (input: Input<A, O>) => any
}
