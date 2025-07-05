// src/components/Header.js
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme }  from '@/components/ThemeProvider'  // use your alias

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-heading text-primary">
          🛠️ MyDocs
        </a>
        <div className="flex items-center gap-6">
          <a href="/docs"  className="hover:text-secondary">Projects</a>
          <a href="/about" className="hover:text-secondary">About</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun  size={20} />
              : <Moon size={20} />
            }
          </button>
        </div>
      </nav>
    </header>
  )
}
