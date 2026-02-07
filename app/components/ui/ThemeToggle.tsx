// components/ui/ThemeToggle.tsx
'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-transform duration-300 ${
        theme === 'dark' ? 'left-7' : 'left-1'
      }`}>
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-gray-800 absolute top-0.5 left-0.5" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500 absolute top-0.5 left-0.5" />
        )}
      </div>
    </button>
  )
}