import { Link, Outlet } from 'react-router-dom'
import Scroltop from '../Scroltop/Scroltop'
import { useEffect, useState } from 'react'
import Particles from './Particles'
import ClickSpark from './ClickSpark'

export default function Navbar() {
    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScrollTop() {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScrollTop)
        return () => window.removeEventListener("scroll", handleScrollTop)
    }, [])
    return (
        <>
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <Particles particleColors={['#ffffff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} className="w-full h-full" />
            </div>
            <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                <Scroltop />
                <div className={`py-10`}>
                    <div className="sticky top-0 z-50 mb-10 flex justify-between items-center p-4 rounded-2xl bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#020617]/80 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                        <Link to={'/'}>
                            <div className='flex !cursor-pointer items-center gap-2'>
                                <svg className='w-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M184 48C170.7 48 160 58.7 160 72C160 110.9 183.4 131.4 199.1 145.1L200.2 146.1C216.5 160.4 224 167.9 224 184C224 197.3 234.7 208 248 208C261.3 208 272 197.3 272 184C272 145.1 248.6 124.6 232.9 110.9L231.8 109.9C215.5 95.7 208 88.1 208 72C208 58.7 197.3 48 184 48zM128 256C110.3 256 96 270.3 96 288L96 480C96 533 139 576 192 576L384 576C425.8 576 461.4 549.3 474.5 512L480 512C550.7 512 608 454.7 608 384C608 313.3 550.7 256 480 256L128 256zM480 448L480 320C515.3 320 544 348.7 544 384C544 419.3 515.3 448 480 448zM320 72C320 58.7 309.3 48 296 48C282.7 48 272 58.7 272 72C272 110.9 295.4 131.4 311.1 145.1L312.2 146.1C328.5 160.4 336 167.9 336 184C336 197.3 346.7 208 360 208C373.3 208 384 197.3 384 184C384 145.1 360.6 124.6 344.9 110.9L343.8 109.9C327.5 95.7 320 88.1 320 72z" /></svg>
                                <span className='flex items-center'>
                                    <h1 className='text-[22px] text-white font-bold'>Fazliddin</h1>
                                    <h1 className='text-[22px] font-bold text-[#4770ff]'>Portfolio</h1>
                                </span>
                            </div>
                        </Link>
                        <div>
                            <ul className='flex gap-10 items-center'>
                                <li className=' cursor-pointer'><Link to={'/'} className='flex gap-1 !cursor-pointer items-center hover:text-white hover:fill-white hover:bg-white/10 px-3 py-2 transition-all duration-300 text-gray-300 fill-gray-300 rounded-lg' activeClassName="active"><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" /></svg>Home</Link></li>
                                <li className=' cursor-pointer'><Link to={'/about'} className='flex gap-1 !cursor-pointer font-normal items-center hover:text-white hover:fill-white hover:bg-white/10 rounded-lg transition-all px-3 py-2 duration-300 text-gray-300 fill-gray-300' activeClassName="active"><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M470.5 463.6C451.4 416.9 405.5 384 352 384L288 384C234.5 384 188.6 416.9 169.5 463.6C133.9 426.3 112 375.7 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 375.7 506.1 426.2 470.5 463.6zM430.4 496.3C398.4 516.4 360.6 528 320 528C279.4 528 241.6 516.4 209.5 496.3C216.8 459.6 249.2 432 288 432L352 432C390.8 432 423.2 459.6 430.5 496.3zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 304C297.9 304 280 286.1 280 264C280 241.9 297.9 224 320 224C342.1 224 360 241.9 360 264C360 286.1 342.1 304 320 304zM232 264C232 312.6 271.4 352 320 352C368.6 352 408 312.6 408 264C408 215.4 368.6 176 320 176C271.4 176 232 215.4 232 264z" /></svg>About</Link></li>
                                <li className=' cursor-pointer'><Link className='flex gap-1 !cursor-pointer items-center hover:text-white hover:fill-white hover:bg-white/10 px-3 py-2 transition-all duration-300 text-gray-300 fill-gray-300 rounded-lg' to={'/projects'}><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M139.3 158C140.3 150 147.1 144 155.2 144L484.9 144C492.9 144 499.7 150 500.8 158L525.8 352L440.6 352C427.2 352 414.7 358.7 407.3 369.8L387.2 400L252.9 400L232.8 369.8C225.4 358.7 212.9 352 199.5 352L114.3 352L139.3 158zM112 400L195.2 400L215.3 430.2C222.7 441.3 235.2 448 248.6 448L391.5 448C404.9 448 417.4 441.3 424.8 430.2L444.9 400L528.1 400L528.1 480C528.1 488.8 520.9 496 512.1 496L128 496C119.2 496 112 488.8 112 480L112 400zM155.2 96C123 96 95.8 119.9 91.7 151.8L64.2 364.9L64 366.5L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 366.5L575.8 365L548.3 151.9C544.2 119.9 517 96 484.8 96L155.2 96z" /></svg>Projects</Link></li>
                                <li className=' cursor-pointer'><Link className='flex gap-1 !cursor-pointer items-center hover:text-white hover:fill-white hover:bg-white/10 px-3 py-2 transition-all duration-300 text-gray-300 fill-gray-300 rounded-lg' to={'/contact'}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-vertical-end" aria-hidden="true"><path d="M7 2h10"></path><path d="M5 6h14"></path><rect width="18" height="12" x="3" y="10" rx="2"></rect></svg>Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Link to={'/contact'}><button className='px-4 py-2 !cursor-pointer text-white font-medium bg-gradient-to-r from-[#4770ff] to-[#5f7cff] rounded-lg  hover:scale-105 transition-all duration-300'>Let's Go</button></Link>
                        </div>
                    </div>
                    <div>
                    </div>
                    <main className='mt-28 container'>
                        <Outlet />
                    </main>
                </div>
            </ClickSpark>
        </>
    )
}
