import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section className='w-full bg-black relative' data-aos='zoom-in' data-aos-delay='100'>
      <main className='container flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='fex items-center flex-col mt-24'>
            <Link to={"/"}>
              <h3 className='font-title'>travel</h3>
            </Link>
            <p className='font-desc mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero animi assumenda perferendis iusto quisquam explicabo molestias temporibus esse odit, odio ratione cupiditate praesentium ipsum doloremque incidunt dolore possimus aspernatur voluptatem voluptatibus. Deserunt odio ipsam beatae?</p>

            <div className='flex items-center gap-2 mt-4 text-center'>
              <MdEmail className='w-4 h-4 text-orange-600' />
              <p className='text-sm text-white'>travel16022026@gamil.com</p>
            </div>

            <div className='flex items-center gap-2 text-center'>
              <IoIosCall className='w-4 h-4 text-orange-600 mt-4 mb-7' />
              <p className='text-sm text-white'>travel16022026@gamil.com</p>
            </div>
          </div>

          <div className='fex items-center flex-col mt-24'>
            <h3 className='text-3xl font-bold capitalize text-white'>Quick Link</h3>
            <div className='flex flex-col justify-between items-center gap-4 mt-4'>
              <Link to={'/'} className='font-text'>home</Link>
              <Link to={'/about'} className='font-text'>about</Link>
              <Link to={'/services'} className='font-text'>services</Link>
              <Link to={'/packages'} className='font-text'>packages</Link>
              <Link to={'/why us'} className='font-text'>why us</Link>
              <Link to={'/contact'} className='font-text'>contact</Link>
            </div>
          </div>

          <div className='fex items-center flex-col mt-24'>
            <h3 className='text-3xl font-bold capitalize text-white'>travel services</h3>
            <div className='flex flex-col justify-between items-center gap-4 mt-4'>
              <p className='font-desc'>tour oackages</p>
              <p className='font-desc'>flight & hotel deals</p>
              <p className='font-desc'>travel insurance</p>
              <p className='font-desc'>visg assistance</p>
              <p className='font-desc'>online booking</p>
            </div>
          </div>

          <div className='fex items-center flex-col mt-24'>
            <h3 className='text-3xl font-bold capitalize text-white'>follow us</h3>
            <div className='flex flex-col items-center gap-2 mt-4 justify-between'>
              <div className='flex items-center'>
                <FaFacebook  className='w-7 h-7 py-2 px-2 text-2xl rounded-full bg-orange-500 text-black'/>
                <p className='font-desc'>facebook</p>
              </div>

               <div className='flex items-center'>
                <FaInstagram className='w-7 h-7 py-2 px-2 text-2xl rounded-full bg-orange-500 text-black'/>
                <p className='font-desc'>instagram</p>
              </div>

               <div className='flex items-center'>
                <FaLinkedinIn  className='w-7 h-7 py-2 px-2 text-2xl rounded-full bg-orange-500 text-black'/>
                <p className='font-desc'>linkedin</p>
              </div>

               <div className='flex items-center'>
                <FaTwitter   className='w-7 h-7 py-2 px-2 text-2xl rounded-full bg-orange-500 text-black'/>
                <p className='font-desc'>twitter</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full text-center justify-center items-center mt-7 mb-12 flex'>
          <p className='font-desc flex items-center'>copyright <RiCopyrightLine className='ml-4'/>2026 flobesprint all rights reserved. </p>
        </div>
      </main>
    </section>
  )
}

export default Footer