'use client'
import { useState } from 'react'

export default function DocsFilter({ notes }) {
  const [filter, setFilter] = useState('all')
  const statuses = Array.from(new Set(notes.map(note => note.status)))
  const filteredNotes = filter === 'all' ? notes : notes.filter(note => note.status === filter)

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">📚 Project Notes</h1>

      <div className="mb-6 space-x-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 rounded ${filter === s ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {filteredNotes.map((note) => (
          <li key={note.slug}>
            <a href={`/docs/${note.slug}`} className="text-blue-600 hover:underline">
              📄 {note.title} <span className="text-sm text-gray-500">[{note.status}]</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

