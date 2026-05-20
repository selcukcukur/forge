"use client"

import type { ComponentProps } from "react"

import { Collapsible as Primitive } from "radix-ui"

export function Collapsible({
  ...props
}: ComponentProps<typeof Primitive.Root>) {
  return <Primitive.Root data-slot="collapsible" {...props} />
}

export function CollapsibleTrigger({
  ...props
}: ComponentProps<typeof Primitive.CollapsibleTrigger>) {
  return (
    <Primitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

export function CollapsibleContent({
  ...props
}: ComponentProps<typeof Primitive.CollapsibleContent>) {
  return (
    <Primitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}
