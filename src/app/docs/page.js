import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import DocsFilter from './DocsFilter'

export default function DocsPage() {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)

  const notes = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fileContent = fs.readFileSync(path.join(contentDir, file), 'utf-8')
      const { data } = matter(fileContent)
      return {
        title: data.title || slug,
        slug,
        status: data.status?.toLowerCase() || 'unknown',
        published: data.published ?? false,
      }
    })
    .filter((note) => note.published === true)

  return <DocsFilter notes={notes} />
}

