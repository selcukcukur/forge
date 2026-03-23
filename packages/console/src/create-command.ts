import type {
  Argument,
  Option,
  Input,
  Command,
  CommandOptions
} from "./type"

/**
 * Create a console command definition
 *
 * **Capsule**
 * - Metadata (name, description)
 * - Arguments (expected positional inputs)
 * - Options (flags or key-value inputs)
 * - Action (function executed when the command runs)
 *
 * **Usage**
 * ```ts
 * const ListCommand = createCommand({
 *   name: "list",
 *   description: "Display all available commands",
 *   action: (input) => {
 *     return {
 *       type: "list",
 *       message: "Here are the available commands..."
 *     }
 *   }
 * })
 * ```
 */
export function createCommand<A extends Argument[] = Argument[], O extends Option[] = Option[]>(
  options: CommandOptions
): Command {
  return {
    /** Get the command name **/
    name: () => options.name,
    /** Get the command description **/
    description: () => options.description || "",
    /** Get the command arguments **/
    arguments: () => options.arguments,
    /** Get the command options **/
    options: () => options.options,
    /** Execute the command action **/
    action: (input: Input<A, O>) => options.action(input)
  }
}
