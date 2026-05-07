import React from 'react'

export default function Home() {
  return (
    <div className='flex z-10 justify-between !items-center py-10 gap-10 max-ccm:block max-ccm:text-center max-ccm:justify-center'>
      <div className='flex justify-center items-center mb-14'>
        <div className="relative w-[350px] h-[350px] flex items-center justify-center max-lg:w-[300px] max-lg:h-[300px] max-xxc:w-[250px] max-xxc:h-[250px] max-ccm:w-[400px] max-ccm:h-[400px] max-ccm:justify-center max-xmx:w-[300px] max-xmx:h-[300px] max-xxss:w-[250px] max-xxss:h-[250px]">
          <div className="absolute inset-0 rounded-full border-4 border-[#4770ff] shadow-[0_0_40px_#4770ff] animate-pulse max-ccm:justify-center">
          </div>
          <img src="/Fazliddin.png" alt="Fazliddin" className="relative z-10 w-[280px] h-[280px] rounded-full object-cover max-lg:w-[250px] max-lg:h-[250px] max-xxc:w-[200px] max-xxc:h-[200px] max-ccm:flex max-ccm:justify-center max-ccm:w-[350px] max-ccm:h-[350px] max-xmx:w-[250px] max-xmx:h-[250px] max-xxss:w-[200px] max-xxss:h-[200px]" />
        </div>
      </div>
      <div className='z-10 px-10 max-xxc:px-5'>
        <h1 className='font-bold text-3xl mb-5 max-lg:mb-3 max-lg:text-2xl max-xxc:mb-2 max-xxc:text-xl max-ccm:mb-5 max-ccm:text-3xl max-xmx:text-xl'>Fazliddin Nizomiddinov  👋</h1>
        <h1 className='font-bold text-5xl flex gap-2 mb-5 max-lg:mb-3 max-lg:text-3xl max-xxc:mb-2 max-xxc:text-1xl max-ccm:justify-center max-ccm:text-5xl max-ccm:mb-5 max-xmx:text-2xl'>Frontend <h1 className='text-[#4770ff]'>Developer</h1></h1>
        <h1 className='font-semibold mb-2 text-xl max-lg:text-base max-ccm:text-2xl max-xmx:text-lg'>Html • Css • JavaScript • React • Tailwind</h1>
        <p className='font-medium mb-3 text-xl max-lg:text-base max-lg:mb-3 max-ccm:text-2xl max-xmx:text-lg'>I am currently a summer programmer, working on small projects, and have 2 months of experience 💻.</p>
        <div className='flex gap-5 items-center max-lg:gap-3 max-ccm:justify-center max-ccm:gap-7 max-xmx:gap-3 max-xxs:block max-xxs:justify-center max-xxs:items-center'>
          <a href="https://t.me/Fazliddin_iq" className='flex items-center justify-center'><button className='mt-6 px-6 py-3 max-lg:px-4 flex gap-2 items-center bg-[#4770ff] text-white rounded-lg font-semibold hover:bg-[#476fffe9] transition-all duration-300 max-ccm:text-1xl'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg>Contact me</button></a>
          <a href="/CV.pdf" download className='flex items-center justify-center'><button className="mt-6 px-6 py-2.5 max-lg:px-4 flex gap-2 items-center text-[#4770ff] font-semibold rounded-lg border-2 border-[#4770ff] hover:bg-[#4770ff] hover:text-white transition-all duration-300 shadow-[0_0_20px_#4770ff66] max-ccm:text-1xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download  w-5 h-5" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Download CV</button></a>
        </div>
      </div>

    </div>
  )
}
