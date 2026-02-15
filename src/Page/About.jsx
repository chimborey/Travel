import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import Hero1 from '../assets/hero1.jpg'
import Hero2 from '../assets/hero2.webp'
const About = () => {
      return (
            <section className='w-full py-24 bg-sky-500 overflow-hidden'>
                  <main className='container'>
                        <article className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                              {/* Journey-left */}
                              <div className='relative cursor-pointer hover:scale-95 duration-300 ease-linear'>
                                    <div data-aos='fade-right' data-aos-delay='100'>
                                          <img src={Hero1} alt="" className='md:w-[990px] md:h-[620px] rounded-lg' />

                                          <div>
                                                <img src={Hero2} alt="" className='w-48 h-28 absolute bottom-0 translate-y-4 rounded-lg -rotate-12 left-1 -translate-x-4 border-4 border-white hover:-rotate-0 duration-700 transition-all' />
                                          </div>
                                    </div>
                              </div>

                              {/* Journey-right */}
                              <div data-aos='fade-left' data-aos-delay='100'>
                                    <div className='flex flex-col gap-4 border-b-[1px] border-slate-700'>
                                          <span className='font-desc capitalize'>abouts</span>
                                          <h3 className='about'>embark on a hilarious juorney with our travel experts</h3>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore reiciendis, sunt laboriosam ex repellendus facere cum odio dolorum aliquid deserunt error sed dolor sint!</p>

                                          <div className='mb-6'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint autem explicabo exercitationem ipsum earum eius voluptates culpa omnis, perspiciatis nam ex impedit aperiam, nulla consectetur voluptatem ullam delectus nesciunt itaque esse illum distinctio veritatis.</p>
                                          </div>
                                    </div>

                                    <div className='mt-7'>
                                          <div className='grid grid-cols-1 md:grid-cols-2 md:text-center gap-4 mb-12'>

                                                <div className='flex items-center gap-3 justify-center'>
                                                      <FaEarthAmericas className='w-16 h-20 text-white px-5 rounded bg-orange-600' />
                                                      <div className='flex flex-col  w-[150px]'>
                                                            <h5 className='text-sm capitalize mt-7 text-md font-serif mb-2'>best desctination</h5>
                                                            <p className='about-desc'>efficitur condmentum massa ibe.</p>
                                                      </div>
                                                </div>

                                                <div className='flex items-center gap-3 justify-center'>
                                                      <IoIosPricetags className='w-16 h-20 text-white px-5 rounded bg-orange-600' />
                                                      <div className='flex flex-col w-[150px]'>
                                                            <h5 className=' text-sm capitalize mt-7 mb-3 font-serif'>affordable price</h5>
                                                            <p className='about-desc'>efficitur condmentum massa ibe.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                  </main>
            </section>
      )
}

export default About