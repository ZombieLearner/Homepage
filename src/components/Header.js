'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    document.documentElement.classList.toggle('dark', saved === 'dark')
    setTheme(saved || 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-heading text-primary">🛠️ MyDocs</a>
        <div className="flex items-center gap-6">
          <a href="/docs" className="hover:text-secondary">Projects</a>
          <a href="/about" className="hover:text-secondary">About</a>

          {/* 🌙 Toggle Button */}
          <button onClick={toggleTheme} className="hover:text-secondary" title="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

