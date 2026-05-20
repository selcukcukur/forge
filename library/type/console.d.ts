/**
 * Output type for `about` command
 */
export interface AboutOutput {
  type: "about"
  content: string
}

/**
 * Output type for `experiences` command
 */
export interface ExperiencesOutput {
  type: "experiences"
  content: string
}

/**
 * Output type for `education` command
 */
export interface EducationOutput {
  type: "education"
  content: string
}

/**
 * Output type for `help` command
 */
export interface HelpOutput {
  type: "help"
  info: { name: string; description: string }[]
  system: { name: string; description: string }[]
}

/**
 * Output type for error states
 */
export interface ErrorOutput {
  type: "error"
  message: string
}

export interface ListOutput {
  type      : "list"
  commands  : {
    name: string
    category: CommandCategory
    description: string
  }[]
}

/**
 * Union type representing all possible console command outputs
 */
export type CommandOutput =
  | AboutOutput
  | ExperiencesOutput
  | EducationOutput
  | HelpOutput
  | ErrorOutput
  | ListOutput

export type CommandCategory =
  | "info"
  | "system"

export type CommandHistory = {
  command: string
  output: CommandOutput | null
}
