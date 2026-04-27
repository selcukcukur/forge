"use client"

import { useState, KeyboardEvent, ComponentProps } from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@workspace/interface"
import { cn, cv, type VariantOf } from "@workspace/utility"

import { useTerminal } from "@hooks/console/use-terminal"

export const actionVariants = cv(
  "rounded-full transition-colors cursor-pointer",
  {
    variants        : {
      variant : {
        default     : "bg-gray-500/60  hover:bg-gray-500",
        minimize    : "bg-destructive/60 hover:bg-destructive",
        maximize    : "bg-yellow-500/60 hover:bg-yellow-500",
        close       : "bg-primary/60 hover:bg-primary"
      },
      size    : {
        default     : "size-3 [&_svg:not([class*='size-'])]:size-3",
        xs          : "size-1 [&_svg:not([class*='size-'])]:size-1",
        sm          : "size-2 [&_svg:not([class*='size-'])]:size-2",
        base        : "size-3 [&_svg:not([class*='size-'])]:size-3",
        lg          : "size-4 [&_svg:not([class*='size-'])]:size-4",
        xl          : "size-5 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants : {
      variant : "default",
      size    : "default"
    }
  }
)

export function Terminal() {
  const { history, isLoading, runCommand, terminalRef } = useTerminal()
  const [input, setInput] = useState("")

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      runCommand(input.trim())
      setInput("")
    }
  }

  return (
    <section
      data-slot="terminal"
      className={cn("px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30")}
    >
      <TerminalPortal>
        <TerminalRoot>
          <TerminalHeader>
            <TerminalActions>
              <TerminalAction variant="minimize" />
              <TerminalAction variant="maximize" />
              <TerminalAction variant="close" />
            </TerminalActions>
            <TerminalTitle>
              ~/selcukcukur/terminal
            </TerminalTitle>
            <TerminalStatus>
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">live</span>
            </TerminalStatus>
          </TerminalHeader>

          {/* Body */}
          <TerminalContent ref={terminalRef}>
            {history.map((entry, i) => (
              <div key={i}>
                <p className="text-primary">selcukcukur:~$ {entry.command}</p>

                {/* Çalışırken shimmer */}
                {isLoading && !entry.output && (
                  <p className="text-muted-foreground animate-pulse">thinking...</p>
                )}

                {/* Çıktı varsa render et */}
                {entry.output && (() => {
                  switch (entry.output.type) {
                    case "about":
                    case "experiences":
                    case "education":
                      return <p>{entry.output.content}</p>
                    case "help":
                      return (
                        <>
                          <p className="font-bold">Info Commands</p>
                          {entry.output.info.map(cmd => (
                            <p key={cmd.name}>{cmd.name} — {cmd.description}</p>
                          ))}
                          <p className="font-bold mt-2">System Commands</p>
                          {entry.output.system.map(cmd => (
                            <p key={cmd.name}>{cmd.name} — {cmd.description}</p>
                          ))}
                        </>
                      )
                    case "list":
                      return (
                        <div className="mt-2 font-mono text-sm">
                          {["info", "system"].map(group => {
                            const groupCommands = entry.output.commands.filter(cmd => cmd.category === group)
                            if (groupCommands.length === 0) return null

                            return (
                              <div key={group} className="mb-3">
                                <p className="font-bold capitalize">{group}</p>
                                <div className="pl-2">
                                  {groupCommands.map(cmd => (
                                    <div key={cmd.name} className="grid grid-cols-[120px_auto] gap-2">
                                      <span>{cmd.name}</span>
                                      <span>{cmd.description}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )

                    case "error":
                      return <p className="text-red-500">{entry.output.message}</p>
                  }
                })()}
              </div>
            ))}
          </TerminalContent>

          {/* Footer */}
          <TerminalFooter className="py-2">
            <InputGroup className="[--radius:9999px] border-0 dark:bg-transparent">
              <InputGroupAddon className="p-0 text-primary text-xs">
                selcukcukur:~$
              </InputGroupAddon>
              <input
                data-slot="input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                className={cn(
                  "border-input flex-1 text-xs text-muted-foreground bg-transparent",
                  "rounded-lg transition-colors border-none outline-none focus:ring-0 caret-primary"
                )}
                autoFocus
              />
              <InputGroupAddon align="inline-end">
                <span className="ml-auto text-primary/50 hidden sm:block text-xs animate-pulse">
                  press enter to run command
                </span>
              </InputGroupAddon>
            </InputGroup>
          </TerminalFooter>
        </TerminalRoot>
      </TerminalPortal>
    </section>
  )
}

export function TerminalPortal({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-portal"
      className={cn("mx-auto max-w-7xl", className)}
      {...props}
    />
  )
}

export function TerminalRoot({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-root"
      className={cn("rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden", className)}
      {...props}
    />
  )
}

export function TerminalHeader({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-header"
      className={cn("flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 py-3.5", className)}
      {...props}
    />
  )
}

export function TerminalContent({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-content"
      className={cn("p-5 font-mono text-sm text-muted-foreground space-y-2 h-64 overflow-y-auto", className)}
      {...props}
    />
  )
}

export function TerminalFooter({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-footer"
      className={cn("border-t border-border/50 bg-secondary/30 px-4 py-4 font-mono", className)}
      {...props}
    />
  )
}

export function TerminalTitle({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="terminal-title"
      className={cn("ml-4 font-mono text-xs text-muted-foreground truncate", className)}
      {...props}
    />
  )
}

export function TerminalStatus({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-status"
      className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground"
      {...props}
    />
  )
}

export function TerminalActions({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

export function TerminalAction({
  variant,
  size,
  className,
  ...props
}: ComponentProps<"div"> & VariantOf<typeof actionVariants>) {
  return (
    <div
      data-slot="terminal-action"
      className={cn(actionVariants({ variant, size, className }))}
      {...props}
    />
  )
}
