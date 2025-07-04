export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t mt-12">
      <div className="max-w-5xl mx-auto px-6 py-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} Me •{' '}
        <a href="https://github.com/ZombieLearner/Homepage" target="_blank" className="hover:text-secondary underline">
          Source on GitHub
        </a>
      </div>
    </footer>
  )
}

