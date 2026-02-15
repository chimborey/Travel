import React from 'react'
import { BiSupport } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaProcedures } from "react-icons/fa";
const Whyus = () => {
  return (
    <section className='w-full overflow-hidden bg-slate-950'>
      <main className='container flex flex-col items-center mt-24 mb-12'>
            {/* Whyus-left */}
            <div className='flex flex-col justify-between gap-4 items-center'>
                  <h3 className='md:text-5xl font-medium text-center capitalize text-red-500 sm:text-3xl' data-aos='zoom-in' data-aos-delay='100'>why should you travel with us</h3>
                  <p className='font-desc text-center' data-aos='zoom-in' data-aos-delay='200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, totam quaerat! Magni nihil cupiditate cumque placeat dolorem labore, quia neque veniam tempora. Temporibus itaque repellat, hic non deserunt, rem voluptatibus sit similique aperiam quod cupiditate!</p>
            </div>


            {/* Whyus-right */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-7 mb-12 cursor-pointer'>
                  <div data-aos='fade-right' data-aos-delay='100' className='md:w-[320px] overflow-hidden bg-orange-200 rounded-lg flex items-center flex-col px-7 justify-center hover:scale-95 duration-300 ease-linear'>
                        <FaProcedures  className='w-12 h-12 text-white bg-red-500 mt-4 px-3 py-3 rounded-lg'/>
                        <h5 className='md:text-2xl font-medium text-center capitalize text-black sm:text-3xl mt-4'>professional tour guide</h5>
                        <p className='font-desc mb-7 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deleniti soluta beatae voluptatum repellendus ducimus natus voluptate aliquid accusantium similique perspiciatis vitae pariatur doloremque maxime accusamus unde necessitatibus, debitis aut fugiat molestias. Fuga, placeat. Dolorem, culpa aliquam!</p>
                  </div>

                  <div data-aos='zoom-in' data-aos-delay='200' className='md:w-[320px] overflow-hidden bg-orange-200 rounded-lg flex items-center flex-col px-7 justify-center hover:scale-95 duration-300 ease-linear'>
                        <AiFillSafetyCertificate  className='w-12 h-12 text-white bg-red-500 mt-4 px-3 py-3 rounded-lg'/>
                        <h5 className='md:text-2xl font-medium text-center capitalize text-black sm:text-3xl mt-4'>ertified travel angency</h5>
                        <p className='font-desc mb-7 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deleniti soluta beatae voluptatum repellendus ducimus natus voluptate aliquid accusantium similique perspiciatis vitae pariatur doloremque maxime accusamus unde necessitatibus, debitis aut fugiat molestias. Fuga, placeat. Dolorem, culpa aliquam!</p>
                  </div>


                  <div data-aos='fade-left' data-aos-delay='300' className='md:w-[320px] overflow-hidden bg-orange-200 rounded-lg flex items-center flex-col px-7 justify-center hover:scale-95 duration-300 ease-linear'>
                        <BiSupport className='w-12 h-12 text-white bg-red-500 mt-4 px-3 py-3 rounded-lg'/>
                        <h5 className='md:text-2xl font-medium text-center capitalize text-black sm:text-3xl mt-4'>24/7 premium suppoer</h5>
                        <p className='font-desc mb-7 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, deleniti soluta beatae voluptatum repellendus ducimus natus voluptate aliquid accusantium similique perspiciatis vitae pariatur doloremque maxime accusamus unde necessitatibus, debitis aut fugiat molestias. Fuga, placeat. Dolorem, culpa aliquam!</p>
                  </div>
            </div>
      </main>
    </section>
  )
}

export default Whyus