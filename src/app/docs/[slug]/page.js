import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkRemoveDataview from '@/lib/remark-remove-dataview'

const contentDir = path.join(process.cwd(), 'content')

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }))
}

export async function generateMetadata({ params }) {
  const filePath = path.join(contentDir, `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)
  return { title: data.title || params.slug }
}

export default async function DocPage({ params }) {
  const filePath = path.join(contentDir, `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const processedContent = await remark()
   .use(remarkRemoveDataview) // ✅ Your custom plugin here
   .use(html)
   .process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="prose max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.title || params.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title || params.slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )

}

