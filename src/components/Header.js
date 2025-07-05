'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import useHasMounted from '@/lib/useHasMounted'

export default function Header() {
  const hasMounted = useHasMounted()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
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

      
        </div>
      </nav>
    </header>
  )
}
