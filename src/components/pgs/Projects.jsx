import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">🚧 Projects Coming Soon</h1>
        <p className="text-gray-400 text-lg max-w-xl">I'm currently working on exciting projects. Stay tuned for amazing web applications, UI designs, and modern Frontend builds!</p>
        <Link to={'/'}><button className="mt-6 px-6 py-2.5 flex gap-2 items-center text-[#4770ff] font-semibold rounded-lg border-2 border-[#4770ff] group hover:bg-[#4770ff] hover:text-white transition-all duration-300 shadow-[0_0_20px_#4770ff66] "><svg className="w-7 fill-[#4770ff] transition-all duration-300 group-hover:fill-white rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" /></svg>Go Back Home</button></Link>
      </div>
    </div>
  )
}
