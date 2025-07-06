'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import TypewriterGlitch from '@/components/TypewriterGlitch'
import dynamic from 'next/dynamic'



export default function HomePage() {
  const [theme, setTheme] = useState('light')

 const KeyboardScene = dynamic(() => import('@/components/KeyboardScene'), { ssr: false })


  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = saved === 'dark'
    document.documentElement.classList.toggle('dark', prefersDark)
    setTheme(saved || 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
    {/* ✅ Not inside <main> */}
    <div className="absolute inset-x-0 bottom-0 z-40 pointer-events-none">
      <KeyboardScene />
    </div>
    
    <main className="relative min-h-screen bg-zombiebg text-white dark:text-gray-100 px-6 py-10 font-body overflow-hidden">

     {/* 🔮 Background reflection image */}
<div className="absolute inset-x-0 top-[-40px] z-0 pointer-events-none flex justify-center items-center">
  <img
    src="/zombie-reflection.png"
    alt="Zombie Reflection"
    className="w-[60%] opacity-10 blur-sm animate-zombieType"
  />
</div>

      {/* 🔥 Foreground content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-heading glitch text-undead shadow-glow">🧟 Zombie Learner</h1>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm px-3 py-1 bg-brain rounded-xl shadow-glow hover:scale-105 transition-transform"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>

        <section className="mb-10">
          <p className="crt-glow flicker delay-[500ms]">[ OK ] Booting Zombie Learner Terminal</p>
      <p className="crt-glow flicker delay-[1000ms]">[ INFO ] Loading Project Notes...</p>
          <h2 className="text-3xl font-bold text-glitch crt-glow flicker mb-2">Zombie Terminal</h2>
          <TypewriterGlitch text="🧠 Picking apart undead code since 199X..." speed={60} />
        </section>

        <p className="text-lg mt-10 max-w-xl">
          Welcome to the lab. This site documents reverse-engineering, security research, CNC chaos, and the art of staying alive (in code).

        
        </p>
        
        <KeyboardScene />
      </div>
    </main>
    </>
  )
}
