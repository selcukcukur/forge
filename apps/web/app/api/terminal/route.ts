import { NextResponse } from "next/server"

import type { CommandOutput } from "@library/type/console"

export async function GET(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url)
  const cmd = searchParams.get("cmd") || ""

  let output: CommandOutput

  switch (cmd) {
    case "about":
      output = { type: "about", content: "I am Selçuk, founder and lead developer of Sirketio, based in Istanbul." }
      break
    case "experiences":
      output = { type: "experiences", content: "Previously worked freelance and at several software companies before focusing on Sirketio." }
      break
    case "education":
      output = { type: "education", content: "Studied architecture in Istanbul, later transitioned into software development." }
      break
    case "help":
      output = {
        type: "help",
        info: [
          { name: "about", description: "Show detailed information about me" },
          { name: "experiences", description: "List my past work experiences" },
          { name: "education", description: "Display my education background" },
        ],
        system: [
          { name: "clear", description: "Clear the terminal screen" },
          { name: "help", description: "Show available commands" },
        ],
      }
      break
    case "list":
      output = {
        type: "list",
        commands: [
          { name: "about", category: "info", description: "Detailed information about me" },
          { name: "experiences", category: "info", description: "Past work experiences" },
          { name: "education", category: "info", description: "Education background" },
          { name: "clear", category: "system", description: "Clear the terminal screen" },
          { name: "help", category: "system", description: "Show available commands" },
        ],
      } as any
      break
    default:
      output = { type: "error", message: `Command not found: ${cmd}` }
  }

  return NextResponse.json(output)
}
