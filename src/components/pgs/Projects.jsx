import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">🚧 Projects Coming Soon</h1>
        <p className="text-gray-400 text-lg max-w-xl">I'm currently working on exciting projects. Stay tuned for amazing web applications, UI designs, and modern Frontend builds!</p>
        <Link to={'/'}><button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white font-semibold hover:scale-105 transition">Go Back Home</button></Link>
      </div>
    </div>
  )
}
