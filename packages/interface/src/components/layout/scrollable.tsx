"use client"

import type { ComponentProps } from "react"
import { ScrollArea as Primitive } from "radix-ui"

import { cn } from "@obvia/utilities"

export function Scrollable({
  className,
  children,
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return (
    <Primitive.Root
      data-slot="scrollable"
      className={cn("relative", className)}
      {...props}
    >
      <Primitive.Viewport
        data-slot="scrollable-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </Primitive.Viewport>
      <ScrollableBar />
      <Primitive.Corner />
    </Primitive.Root>
  )
}

export function ScrollableBar({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<typeof Primitive.ScrollAreaScrollbar>) {
  return (
    <Primitive.ScrollAreaScrollbar
      data-slot="scrollable-bar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className
      )}
      {...props}
    >
      <Primitive.ScrollAreaThumb
        data-slot="scrollable-thumb"
        className="rounded-full bg-border relative flex-1"
      />
    </Primitive.ScrollAreaScrollbar>
  )
}
