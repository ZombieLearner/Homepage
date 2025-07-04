'use client'
import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const root = document.documentElement

    if (saved === 'dark') {
      root.classList.add('dark')
      setTheme('dark')
    } else {
      root.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    root.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      {children}
    </>
  )
}

