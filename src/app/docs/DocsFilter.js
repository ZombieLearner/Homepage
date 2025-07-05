'use client'
import { useState } from 'react'
import TypewriterGlitch from '@/components/TypewriterGlitch'

export default function DocsFilter({ notes }) {
  const [filter, setFilter] = useState('all')
  const statuses = Array.from(new Set(notes.map(note => note.status)))
  const filteredNotes = filter === 'all' ? notes : notes.filter(note => note.status === filter)

  return (
    <div className="relative scanlines bg-[#0a0a0a] text-foreground max-w-3xl mx-auto px-4 py-8">

      <h1 className="text-4xl font-heading text-undead mb-6 shadow-glow">📚 Project Notes</h1>
      <p className="crt-glow flicker delay-[500ms]">[ OK ] Booting Zombie Learner Terminal</p>
      <p className="crt-glow flicker delay-[1000ms]">[ INFO ] Loading Project Notes...</p>

      <TypewriterGlitch text="Notes from the lab of Zombie Learner 🧠" speed={60} />
        
        
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {filteredNotes.map((note) => (
    <li key={note.slug}>
      <a
        href={`/docs/${note.slug}`}
        className="block border border-undead bg-brain shadow-glow rounded-lg p-4 hover:border-glitch transition-all duration-200"
      >
        <h2 className="font-heading text-undead text-lg mb-1">{note.title}</h2>
        <p className="text-sm text-gray-400">Status: {note.status}</p>
      </a>
    </li>
  ))}
</ul>

    </div>
  )
}
