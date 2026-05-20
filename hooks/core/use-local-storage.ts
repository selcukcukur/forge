"use client"

import { useEffect, useState } from "react"

function getItemFromLocalStorage(key: string) {
  // If running on the server (no window object), return null immediately
  if (typeof window === "undefined") return null

  // Attempt to retrieve the item from local storage by key
  const item = window.localStorage.getItem(key)

  // If an item exists, parse it from JSON and return the value
  if (item) return JSON.parse(item)

  // If no item is found, return null
  return null
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // Initialize state with value from local storage if available, otherwise use initial value
  const [storedValue, setStoredValue] = useState(
    getItemFromLocalStorage(key) ?? initialValue
  )

  useEffect(() => {
    // On mount or when key changes, retrieve the latest value from local storage
    const item = getItemFromLocalStorage(key)
    if (item) setStoredValue(item)
  }, [key])

  // Function to update both state and local storage
  const setValue = (value: T) => {
    // Update react state
    setStoredValue(value)

    // Persist new value to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // Return the current value and setter function as a tuple
  return [storedValue, setValue]
}
