import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxEyeOpen } from "react-icons/rx";
import { VscEyeClosed } from "react-icons/vsc";
const Navbar = () => {
      // scrolled menu
      const [isScrolled, setIsSrolled] = useState(false)
      useEffect(() => {
            const handleScroll = () => {
                  setIsSrolled(window.scrollY > 50)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                  window.removeEventListener("scroll", handleScroll)
            }
      })

      // activeLink
      const [isMenu, setIsMenu] = useState("home")

      // handleClick
      const [isOpenMenuClick, setIsOpenMenuClick] = useState(false)
      return (
            <section className={`${isScrolled ? "" : "bg-transparent"} w-full top-0 left-0 fixed z-50 border-1 backdrop-blur-3xl shadow-md border-slate-700`}>
                  <nav className='h-14 container flex items-center justify-between'  data-aos='zoom-in' data-aos-delay='100'>
                        {/* logo */}
                        <Link to={"/"}>
                              <h3 className='font-title'>travel</h3>
                        </Link>

                        {/* menu */}
                        <div className='py-14 hidden md:block'>
                              <div className='flex justify-between items-center gap-9'>
                                    <Link to={'/'} className='font-text' onClick={() => setIsMenu("home")}>{isMenu === "home" ? <hr /> : <></>}home</Link>
                                    <Link to={'/about'} className='font-text' onClick={() => setIsMenu("about")}>{isMenu === "about" ? <hr /> : <></>}about</Link>
                                    <Link to={'/services'} className='font-text' onClick={() => setIsMenu("services")}>{isMenu === "services" ? <hr /> : <></>}services</Link>
                                    <Link to={'/packages'} className='font-text' onClick={() => setIsMenu("pockagos")}>{isMenu === "pockagos" ? <hr /> : <></>}packages</Link>
                                    <Link to={'/whyus'} className='font-text' onClick={() => setIsMenu("why us")}>{isMenu === "why us" ? <hr /> : <></>}why us</Link>
                                    <Link to={'/contact'} className='font-text' onClick={() => setIsMenu("contact")}>{isMenu === "contact" ? <hr /> : <></>}contact</Link>
                              </div>
                        </div>


                        {/* btn */}
                        <div>
                              <button className='sm:block md:hidden'>
                                    {
                                          isOpenMenuClick ?
                                                <VscEyeClosed className='w-9 h-9 text-purple-500' onClick={() => setIsOpenMenuClick(!isOpenMenuClick)} />
                                                :
                                                <RxEyeOpen className='w-9 h-9 text-purple-500' onClick={() => setIsOpenMenuClick(!isOpenMenuClick)} />
                                    }
                              </button>
                        </div>
                  </nav>

                  {/* menu- mobile */}
                  <div className={`${isOpenMenuClick ? "block":"hidden"} py-14`} onClick={()=> setIsOpenMenuClick(!isOpenMenuClick)}>
                        <div className='flex flex-col justify-between items-center gap-9'>
                              <Link to={'/'} className='font-text' onClick={() => setIsMenu("home")}>{isMenu === "home" ? <hr /> : <></>}home</Link>
                              <Link to={'/about'} className='font-text' onClick={() => setIsMenu("about")}>{isMenu === "about" ? <hr /> : <></>}about</Link>
                              <Link to={'/services'} className='font-text' onClick={() => setIsMenu("services")}>{isMenu === "services" ? <hr /> : <></>}services</Link>
                              <Link to={'/packages'} className='font-text' onClick={() => setIsMenu("pockagos")}>{isMenu === "pockagos" ? <hr /> : <></>}packages</Link>
                              <Link to={'/whyus'} className='font-text' onClick={() => setIsMenu("why us")}>{isMenu === "why us" ? <hr /> : <></>}why us</Link>
                              <Link to={'/contact'} className='font-text' onClick={() => setIsMenu("contact")}>{isMenu === "contact" ? <hr /> : <></>}contact</Link>
                        </div>
                  </div>
            </section>
      )
}

export default Navbar