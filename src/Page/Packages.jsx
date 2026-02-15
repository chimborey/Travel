import React from 'react'
import { HiCalendarDateRange } from "react-icons/hi2";
import { GiSadCrab } from "react-icons/gi";
import P1 from '../assets/p1.jpg'
import P2 from '../assets/p2.jpg'
import P3 from '../assets/p3.jpeg'
import P4 from '../assets/p4.jpg'
import P5 from '../assets/p5.jpg'
import P6 from '../assets/p6.jpg'
const Packages = () => {
      return (
            <section className='w-full  bg-purple-800 overflow-hidden '>
                  <main className='container flex flex-col items-center mt-24 mb-12'>
                        {/* Packages-left */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                              <h3 className='md:text-4xl font-medium text-center capitalize text-black sm:text-3xl' data-aos='fade-right' data-aos-delay='100'>explore our most popular travel packages</h3>
                              <div data-aos='fade-left' data-aos-delay='200'>
                                    <p className='font-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quasi vitae! Nam rem vel error unde, molestiae deleniti laboriosam aliquam explicabo facere, ab eveniet vero nobis! Illum.</p>
                                    <div className='div mt-5 mb-7'></div>
                              </div>
                        </div>

                        {/* Packages-right */}
                        <div  className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-7'>
                              <div data-aos='fade-right' data-aos-delay='100' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P1} alt="" className='md:w-[320px] h-[230px] rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 299</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>phnom penh & siem reab city</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>5D/3N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>5D/3N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>

                              <div data-aos='zoom-in' data-aos-delay='200' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P3} alt="" className='md:w-[320px] h-[230px] sm:w-full rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 399</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>beijing & shanghai</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>4D/2N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>4D/2N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>

                              <div data-aos='fade-left' data-aos-delay='300' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P2} alt="" className='md:w-[320px] sm:w-full h-[230px] rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 499</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>New york & las vegas ity</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>6D/2N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>6D/2N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>

                              <div data-aos='fade-right' data-aos-delay='400' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P4} alt="" className='md:w-[320px] h-[230px] rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 499</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>australia</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>8D/2N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>8D/2N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>


                              <div data-aos='fade-up' data-aos-delay='500' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P5} alt="" className='md:w-[320px] h-[230px] rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 599</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>Iceland</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>1D/2N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>1D/2N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>


                              <div data-aos='fade-left' data-aos-delay='600' className='md:w-[320px] overflow-hidden bg-white relative rounded-lg cursor-pointer hover:scale-110 duration-500 transition-all'>
                                    <img src={P6} alt="" className='md:w-[320px] sm:w-full h-[230px] rounded-lg hover:scale-110 duration-300 ease-linear'/>

                                    <div className='w-[80px] h-[60px] bg-orange-500 absolute top-0 left-4 rounded-lg flex flex-col justify-center items-center'>
                                          <h5 className='text-2xl font-bold text-white'>$ 279</h5>
                                          <p className='text-md text-white'>/person</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-6'>
                                          <div className='border-b mt-6 border-gray-400'>
                                                <h3 className='font'>egypt</h3>
                                          </div>
                                          
                                          <div className='flex items-center gap-6'>
                                                <div className='flex items-center'>
                                                      <HiCalendarDateRange className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>90/3N</p>
                                                </div>

                                                <div className='flex text-center'>
                                                      <GiSadCrab className='w-7 h-7 text-orange-400'/>
                                                      <p className='font-desc'>90/3N</p>
                                                </div>
                                          </div>
                                          
                                          <div className=' px-4 mb-7'>
                                                <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque voluptas aperiam molestias eaque nesciunt a fugiat.</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Packages