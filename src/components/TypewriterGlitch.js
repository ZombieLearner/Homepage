'use client'
import { useState, useEffect } from 'react'

export default function TypewriterGlitch({ text, speed = 75 }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <p className="text-glitch font-mono text-sm sm:text-base animate-flicker">
      {displayed}
      <span className="animate-pulse">▍</span>
    </p>
  )
}

