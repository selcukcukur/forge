"use client"

import * as Primitive from "react-resizable-panels"

import { cn } from "@obvia/utilities"

export function ResizablePanelGroup({
  className,
  ...props
}: Primitive.GroupProps) {
  return (
    <Primitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

export function ResizablePanel({
  ...props
}: Primitive.PanelProps) {
  return <Primitive.Panel data-slot="resizable-panel" {...props} />
}

export function ResizableHandle({
  withHandle,
  className,
  ...props
}: Primitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <Primitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring ring-offset-background relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border h-6 w-1 rounded-lg z-10 flex shrink-0" />
      )}
    </Primitive.Separator>
  )
}
