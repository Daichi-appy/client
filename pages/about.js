import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
      <button
        className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2"
      >
          Index Page
      </button>
      </Link>
    </div>
    ) 
}