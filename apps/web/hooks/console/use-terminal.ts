"use client"

import { useState, useEffect, useRef } from "react"
import { useCommand } from "./use-command"
import type { HistoryEntry } from "@library/type/console";

export function useTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [currentCommand, setCurrentCommand] = useState<string | null>(null)
  const terminalRef = useRef<HTMLDivElement | null>(null)

  const { output, isLoading, isError } = useCommand(currentCommand)

  // Komut girildiğinde yeni entry ekle
  useEffect(() => {
    if (currentCommand) {
      setHistory(prev => [...prev, { command: currentCommand, output: null }])
    }
  }, [currentCommand])

  // Çıktı geldiğinde son entry’yi güncelle
  useEffect(() => {
    if (output && currentCommand) {
      setHistory(prev => {
        const newHistory = [...prev]
        newHistory[newHistory.length - 1] = { command: currentCommand, output }
        return newHistory
      })
    }
  }, [output, currentCommand])

  // Scroll’u en alta sabitle
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, isLoading])

  const runCommand = (cmd: string) => {
    if (!cmd) return
    if (cmd === "clear") {
      setHistory([])
      setCurrentCommand(null)
      return
    }
    setCurrentCommand(cmd)
  }

  return { history, isLoading, isError, runCommand, terminalRef }
}
