'use client'
import { useState, useEffect } from 'react'

const glitchChars = ['#', '@', '%', '&', '$', '!', '?', 'X', '*', '+', 'ø']

export default function TypewriterGlitch({ text, speed = 75 }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [glitched, setGlitched] = useState('')

  // Typing one char at a time
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  // Glitch a character every ~500ms
  useEffect(() => {
    if (index === 0) return
    const glitchInterval = setInterval(() => {
      const i = Math.floor(Math.random() * displayed.length)
      if (!displayed[i]) return
      const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      const before = displayed.slice(0, i)
      const after = displayed.slice(i + 1)
      const flicker = before + glitchChar + after

      setGlitched(flicker)

      setTimeout(() => {
        setGlitched(displayed)
      }, 100)
    }, 500)

    return () => clearInterval(glitchInterval)
  }, [displayed])

  return (
    <p className="text-glitch font-mono text-sm sm:text-base animate-flicker">
      {glitched || displayed}
      <span className="ml-1 inline-block text-undead animate-cursor-glitch">▍</span>
    </p>
  )
}


