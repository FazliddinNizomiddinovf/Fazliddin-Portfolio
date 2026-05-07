import React from 'react'

export default function About() {

    return (
        <div className="grid grid-cols-3 gap-10 max-md:block">
            <div className="col-span-1 sticky top-10 self-start h-fit z-30 bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#020617]/80 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-xl p-5 max-md:static max-md:mb-10">
                <img className='w-full h-auto rounded-lg' src="/fazliddin.jpg" alt="" />
                <div>
                    <h1 className='font-bold text-xl py-3'>Fazliddin Nizomiddinov  👋</h1>
                    <p className='font-medium  mb-3'>I am currently a summer programmer, working on small projects, and have 2 months of experience 💻.</p>
                    <div className='flex gap-2 items-center max-lg:block mt-6 max-md:flex max-xxss:block'>
                        <a href="https://t.me/Fazliddin_iq" className='cursor-pointer block w-full'><button className='w-full max-md:mb-0 max-lg:justify-center cursor-pointer text-sm px-4 py-3 flex gap-2 items-center bg-[#4770ff] text-white rounded-lg font-semibold hover:bg-[#476fffe9] transition-all duration-300 max-xxs:px-2 max-xxss:mb-3'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1_6_6"></path></svg>Contact me</button></a>
                        <a href="/CV.pdf" download className='cursor-pointer block w-full'><button className='w-full max-lg:justify-center px-3 py-2.5 flex gap-2 cursor-pointer items-center text-[#4770ff] border-2 text-sm border-[#4770ff] hover:bg-[#4770ff] hover:text-white font-semibold rounded-lg transition-all duration-300 max-xxs:px-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download  w-5 h-5" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Download CV</button></a>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#020617]/80 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-xl p-5">
                        <span className='flex gap-1 mb-5'>
                            <h1 className=' text-2xl font-bold max-lg:text-xl max-xxs:text-base max-xxss:text-sm'>Hi This is</h1>
                            <h1 className='text-[#4770ff] text-2xl font-bold max-lg:text-xl max-xxs:text-base max-xxss:text-sm'>Fazliddin Nizomiddinov 👋</h1>
                        </span>
                <div className='flex items-center mb-10 max-xxc:mb-5'>
                    <div className='flex-1'>
                        <div>
                            <p className='text-xl font-semibold max-xl:text-lg max-lg:text-base max-xxs:text-xs'>
                                I am currently a summer programmer, working on small projects, and have 2 months of experience 💻.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-white/10 rounded-lg flex-shrink-0 max-xmx:p-2'>
                        <p className='w-2.5 h-2.5 rounded-full bg-[#4770ff]'></p>
                        <h1 className='font-medium text-sm max-lg:text-xs'>Work with me.</h1>
                    </div>
                </div>
                <div className='flex gap-10 mb-10 items-center max-xxc:mb-5'>
                    <span>
                        <h1 className='font-bold text-4xl mb-2 max-xxc:text-2xl'>2+</h1>
                        <h1 className='max-xxc:text-base'>Months of Experience</h1>
                    </span>
                    <span>
                        <h1 className='font-bold text-4xl mb-2 max-xxc:text-2xl'>0+</h1>
                        <h1 className='max-xxc:text-base'>Project Completed</h1>
                    </span>
                </div>
                <div>
                    <h1 className='font-bold mb-10 text-2xl max-xxc:mb-5 max-xxs:text-base max-xxss:text-sm'>My areas of expertise ✨</h1>
                </div>
                <div className='flex gap-7 mb-10 max-xl:flex-wrap max-xxc:gap-4'>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/HTML.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/CSS.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/Sass.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/Bootstrap.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/JavaScript.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/React.svg" alt="" /></div>
                    <div className='p-3 border border-white/30 rounded-xl'><img className='w-14 max-xxc:w-8' src="/vite.svg" alt="" /></div>
                </div>
                <h1 className='font-bold mb-5 text-2xl'>What I'm WOrking On 🚀</h1>
                <div className='flex justify-between gap-5 max-xmx:flex-wrap'>
                    <div className=' cursor-pointer relative z-10 overflow-hidden border border-white/30 rounded-lg'>
                        <img className=' rounded-y-lg w-72' src="/Uic.png" alt="" />
                        <div className='p-2'>
                            <h1 className='font-semibold max-xxc:text-sm max-xxc:font-normal'>UIC Group</h1>
                            <p>I am currently working on this project.</p>
                        </div>
                    </div>
                    <div className=' cursor-pointer relative z-10 overflow-hidden border border-white/30 rounded-lg'>
                        <img className=' rounded-y-lg w-72' src="/DX.png" alt="" />
                        <div className='p-2'>
                            <h1 className='font-semibold max-xxc:text-sm max-xxc:font-normal'>DX</h1>
                            <p>I am currently working on this project.</p>
                        </div>
                    </div>
                    <div className=' cursor-pointer relative z-10 overflow-hidden border border-white/30 rounded-lg'>
                        <img className=' rounded-y-lg w-72' src="/market.png" alt="" />
                        <div className='p-2'>
                            <h1 className='font-semibold max-xxc:text-sm max-xxc:font-normal'>ULTRA Market</h1>
                            <p className='max-xxc:text-xs'>I am currently working on this project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
