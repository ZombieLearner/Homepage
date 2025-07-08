'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TypewriterGlitch from '@/components/TypewriterGlitch'

export default function DocsFilter({ notes }) {
  const [filter, setFilter] = useState('all')
  const statuses = Array.from(new Set(notes.map(note => note.status)))
  const filteredNotes = filter === 'all' ? notes : notes.filter(note => note.status === filter)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative scanlines bg-[#0a0a0a] text-foreground max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading text-undead mb-6 shadow-glow"> 🧠 Project Notes</h1>

      {/* Filter Buttons */}
      <div className="mt-6 mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            filter === 'all' ? 'bg-undead text-black shadow-glow' : 'bg-zinc-800 text-gray-300'
          }`}
        >
          All
        </button>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
              filter === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* 🧠 Zombie Brain Core */}
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-2 border-undead bg-brain rounded-xl p-6 shadow-[0_0_20px_#00ff95aa] animate-pulse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {filteredNotes.map((note) => (
          <motion.li
            key={note.slug}
            variants={cardVariants}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <a
              href={`/docs/${note.slug}`}
              className="block border border-undead bg-[#1a1a1a]/50 backdrop-blur-sm shadow-glow rounded-lg p-4 hover:border-glitch transition-all duration-300"
            >
              <h2 className="font-heading text-undead text-lg mb-1">{note.title}</h2>
              <p className="text-sm text-gray-400">Status: {note.status}</p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
