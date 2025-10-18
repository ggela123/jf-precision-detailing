"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage or system preference
  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? "dark" : "light")
    setTheme(initial)
    if (initial === "dark") {
      root.classList.add("dark")
      document.body.classList.add('dark')
    }
    setMounted(true)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    setTheme(prev => {
      const next = prev === "light" ? "dark" : "light"
      root.classList.toggle("dark", next === "dark")
      document.body.classList.toggle('dark', next === 'dark')
      localStorage.setItem("theme", next)
      // Force repaint in rare cases where variables seem cached
      void root.offsetWidth
      return next
    })
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-4 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

