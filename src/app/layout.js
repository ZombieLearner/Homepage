// src/app/layout.js
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Header        from '@/components/Header'
import Footer        from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zombiebg text-gray-100 font-body scanlines overflow-x-hidden">
        <ThemeProvider>
          <Header />
          <main className="relative z-10 max-w-5xl mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
