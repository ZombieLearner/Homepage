// src/components/ThemeProvider.js
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// 1) Create the context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

// 2) Export a hook for consuming it
export function useTheme() {
  return useContext(ThemeContext)
}

// 3) The provider component
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // On mount, read from localStorage and apply to <html>
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    setTheme(saved)
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])

  // Flip between light/dark
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
