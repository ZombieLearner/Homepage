'use client'
import { useState } from 'react'

export default function DocsFilter({ notes }) {
  const [filter, setFilter] = useState('all')
  const statuses = Array.from(new Set(notes.map(note => note.status)))
  const filteredNotes = filter === 'all' ? notes : notes.filter(note => note.status === filter)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">📚 Project Notes</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
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

      <ul className="space-y-4">
        {filteredNotes.map((note) => (
          <li key={note.slug} className="border-b pb-4">
            <a href={`/docs/${note.slug}`} className="text-xl text-blue-600 hover:underline font-semibold">
              {note.title}
            </a>
            <span className="ml-3 inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
              {note.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
