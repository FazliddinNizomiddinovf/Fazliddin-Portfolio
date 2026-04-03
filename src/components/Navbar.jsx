import { Link, NavLink, Outlet } from 'react-router-dom'
import Scroltop from '../Scroltop/Scroltop'
import { useEffect, useState } from 'react'
import Particles from './Particles'
import ClickSpark from './ClickSpark'

export default function Navbar() {
    const [isScrolled, setScrolled] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
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
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }
    const activeClass = "text-white bg-white/10 fill-white"
    const activeClasss = "text-white bg-gray-400 fill-white rounded-lg"
    return (
        <>
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <Particles particleColors={['#ffffff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} className="w-full h-full" />
            </div>
            <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                <Scroltop />
                <div className={`py-10 px-5`}>
                    <div className="sticky top-0 z-40 mb-10 flex justify-between items-center p-4 rounded-2xl bg-gradient-to-r from-[#0f172a]/80 via-[#1e293b]/80 to-[#020617]/80 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                        <Link to={'/'}>
                            <div className='flex !cursor-pointer items-center gap-2'>
                                <svg className='w-10 max-lg:w-7 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M184 48C170.7 48 160 58.7 160 72C160 110.9 183.4 131.4 199.1 145.1L200.2 146.1C216.5 160.4 224 167.9 224 184C224 197.3 234.7 208 248 208C261.3 208 272 197.3 272 184C272 145.1 248.6 124.6 232.9 110.9L231.8 109.9C215.5 95.7 208 88.1 208 72C208 58.7 197.3 48 184 48zM128 256C110.3 256 96 270.3 96 288L96 480C96 533 139 576 192 576L384 576C425.8 576 461.4 549.3 474.5 512L480 512C550.7 512 608 454.7 608 384C608 313.3 550.7 256 480 256L128 256zM480 448L480 320C515.3 320 544 348.7 544 384C544 419.3 515.3 448 480 448zM320 72C320 58.7 309.3 48 296 48C282.7 48 272 58.7 272 72C272 110.9 295.4 131.4 311.1 145.1L312.2 146.1C328.5 160.4 336 167.9 336 184C336 197.3 346.7 208 360 208C373.3 208 384 197.3 384 184C384 145.1 360.6 124.6 344.9 110.9L343.8 109.9C327.5 95.7 320 88.1 320 72z" /></svg>
                                <span className='flex items-center'>
                                    <h1 className='text-[22px] text-white font-bold max-lg:text-[19px]'>Fazliddin</h1>
                                    <h1 className='text-[22px] font-bold text-[#4770ff] max-lg:text-[19px]'>Portfolio</h1>
                                </span>
                            </div>
                        </Link>
                        <div className=''>
                            <ul className='flex gap-10 items-center max-xxc:hidden max-lg:gap-3 clear-start'>
                                <li className=' cursor-pointer'><NavLink to={'/'} className={({ isActive }) => `flex gap-1 !cursor-pointer items-center px-3 py-2 rounded-lg transition-all duration-300 text-gray-300 fill-gray-300 hover:text-white hover:fill-white hover:bg-white/10 ${isActive ? activeClass : ""}`}><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" /></svg>Home</NavLink></li>
                                <li className=' cursor-pointer'><NavLink to={'/about'} className={({ isActive }) => `flex gap-1 !cursor-pointer font-normal items-center hover:text-white hover:fill-white hover:bg-white/10 rounded-lg transition-all px-3 py-2 duration-300 text-gray-300 fill-gray-300${isActive ? activeClass : ""}`}><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M470.5 463.6C451.4 416.9 405.5 384 352 384L288 384C234.5 384 188.6 416.9 169.5 463.6C133.9 426.3 112 375.7 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 375.7 506.1 426.2 470.5 463.6zM430.4 496.3C398.4 516.4 360.6 528 320 528C279.4 528 241.6 516.4 209.5 496.3C216.8 459.6 249.2 432 288 432L352 432C390.8 432 423.2 459.6 430.5 496.3zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 304C297.9 304 280 286.1 280 264C280 241.9 297.9 224 320 224C342.1 224 360 241.9 360 264C360 286.1 342.1 304 320 304zM232 264C232 312.6 271.4 352 320 352C368.6 352 408 312.6 408 264C408 215.4 368.6 176 320 176C271.4 176 232 215.4 232 264z" /></svg>About</NavLink></li>
                                <li className=' cursor-pointer'><NavLink className={({ isActive }) => `flex gap-1 !cursor-pointer items-center hover:text-white hover:fill-white hover:bg-white/10 px-3 py-2 transition-all duration-300 text-gray-300 fill-gray-300 rounded-lg ${isActive ? activeClass : ""}`} to={'/projects'}><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M139.3 158C140.3 150 147.1 144 155.2 144L484.9 144C492.9 144 499.7 150 500.8 158L525.8 352L440.6 352C427.2 352 414.7 358.7 407.3 369.8L387.2 400L252.9 400L232.8 369.8C225.4 358.7 212.9 352 199.5 352L114.3 352L139.3 158zM112 400L195.2 400L215.3 430.2C222.7 441.3 235.2 448 248.6 448L391.5 448C404.9 448 417.4 441.3 424.8 430.2L444.9 400L528.1 400L528.1 480C528.1 488.8 520.9 496 512.1 496L128 496C119.2 496 112 488.8 112 480L112 400zM155.2 96C123 96 95.8 119.9 91.7 151.8L64.2 364.9L64 366.5L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 366.5L575.8 365L548.3 151.9C544.2 119.9 517 96 484.8 96L155.2 96z" /></svg>Projects</NavLink></li>
                                <li className=' cursor-pointer'><NavLink className={({ isActive }) => `flex gap-1 !cursor-pointer items-center hover:text-white hover:fill-white hover:bg-white/10 px-3 py-2 transition-all duration-300 text-gray-300 fill-gray-300 rounded-lg ${isActive ? activeClass : ""}`} to={'/contact'}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-vertical-end" aria-hidden="true"><path d="M7 2h10"></path><path d="M5 6h14"></path><rect width="18" height="12" x="3" y="10" rx="2"></rect></svg>Contact</NavLink></li>
                            </ul>
                        </div>
                        <Link to={'/contact'}><button className='px-4 max-xxc:hidden py-2 max-lg:px-3 !cursor-pointer text-white font-medium bg-gradient-to-r from-[#4770ff] to-[#5f7cff] rounded-lg  hover:scale-105 transition-all duration-300'>Let's Go</button></Link>
                        <svg onClick={toggleMenu} className='w-6 cursor-pointer hidden max-xxc:block fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
                    </div>
                    <div>
                    </div>
                    <main>
                        <Outlet />
                    </main>
                    <div className="text-lg text-center mt-10 text-gray-500">© 2026 Fazliddin Portfolio. All rights reserved.</div>
                </div>
                <div onClick={closeMenu} className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>
                <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 px-5 py-4 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className='flex justify-between mb-3'>
                        <h1 className=' font-bold text-xl text-black'>Menu</h1>
                        <svg onClick={closeMenu} className='w-7 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" /></svg>
                    </div>
                    <hr className="border-black mb-3" />
                    <ul>
                        <li onClick={closeMenu} className=' cursor-pointer text-black mb-2'><NavLink to={'/'} className={({ isActive }) => `flex gap-1 hover:bg-gray-400 hover:text-white hover:fill-white transition-all duration-300 !cursor-pointer items-center px-3 py-2 rounded-lg ${isActive ? activeClasss : ""}`} activeClassName="active"><svg className='w-5 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" /></svg>Home</NavLink></li>
                        <li onClick={closeMenu} className=' cursor-pointer text-black mb-2'><NavLink to={'/about'} className={({ isActive }) => `flex gap-1 hover:bg-gray-400 hover:text-white hover:fill-white transition-all duration-300 !cursor-pointer items-center rounded-lg px-3 py-2 ${isActive ? activeClasss : ""}`} activeClassName="active"><svg className='w-5 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M470.5 463.6C451.4 416.9 405.5 384 352 384L288 384C234.5 384 188.6 416.9 169.5 463.6C133.9 426.3 112 375.7 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 375.7 506.1 426.2 470.5 463.6zM430.4 496.3C398.4 516.4 360.6 528 320 528C279.4 528 241.6 516.4 209.5 496.3C216.8 459.6 249.2 432 288 432L352 432C390.8 432 423.2 459.6 430.5 496.3zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 304C297.9 304 280 286.1 280 264C280 241.9 297.9 224 320 224C342.1 224 360 241.9 360 264C360 286.1 342.1 304 320 304zM232 264C232 312.6 271.4 352 320 352C368.6 352 408 312.6 408 264C408 215.4 368.6 176 320 176C271.4 176 232 215.4 232 264z" /></svg>About</NavLink></li>
                        <li onClick={closeMenu} className=' cursor-pointer text-black mb-2'><NavLink className={({ isActive }) => `flex gap-1 hover:bg-gray-400 hover:text-white hover:fill-white transition-all duration-300 !cursor-pointer items-center px-3 py-2 rounded-lg ${isActive ? activeClasss : ""}`} to={'/projects'}><svg className='w-5 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M139.3 158C140.3 150 147.1 144 155.2 144L484.9 144C492.9 144 499.7 150 500.8 158L525.8 352L440.6 352C427.2 352 414.7 358.7 407.3 369.8L387.2 400L252.9 400L232.8 369.8C225.4 358.7 212.9 352 199.5 352L114.3 352L139.3 158zM112 400L195.2 400L215.3 430.2C222.7 441.3 235.2 448 248.6 448L391.5 448C404.9 448 417.4 441.3 424.8 430.2L444.9 400L528.1 400L528.1 480C528.1 488.8 520.9 496 512.1 496L128 496C119.2 496 112 488.8 112 480L112 400zM155.2 96C123 96 95.8 119.9 91.7 151.8L64.2 364.9L64 366.5L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 366.5L575.8 365L548.3 151.9C544.2 119.9 517 96 484.8 96L155.2 96z" /></svg>Projects</NavLink></li>
                        <li onClick={closeMenu} className=' cursor-pointer text-black mb-5'><NavLink className={({ isActive }) => `flex gap-1 hover:bg-gray-400 hover:text-white hover:fill-white transition-all duration-300 !cursor-pointer items-center px-3 py-2 rounded-lg ${isActive ? activeClasss : ""}`} to={'/contact'}><svg className='transition-all duration-300' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-vertical-end" aria-hidden="true"><path d="M7 2h10"></path><path d="M5 6h14"></path><rect width="18" height="12" x="3" y="10" rx="2"></rect></svg>Contact</NavLink></li>
                    </ul>
                    <Link to={'/contact'}><button onClick={closeMenu} className='w-full py-2 text-xl !cursor-pointer text-white font-medium bg-gradient-to-r from-[#4770ff] to-[#5f7cff] rounded-lg hover:scale-105 transition-all duration-300'>Let's Go</button></Link>
                </div>
            </ClickSpark>
        </>
    )
}