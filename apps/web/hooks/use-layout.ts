"use client"

import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"

type Layout = "fixed" | "full"

// Atom with localStorage persistence
const layoutAtom = atomWithStorage<Layout>("layout", "fixed")

export function useLayout() {
  const [ layout, setLayout ] = useAtom(layoutAtom)

  return {
    layout,
    setLayout
  }
}
