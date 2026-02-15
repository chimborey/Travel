import React from 'react'
import S1 from './assets/s1.jpg'
import S2 from './assets/s2.jpg'
import S3 from './assets/s3.jpg'
import S4 from './assets/s4.webp'
import { TbPlayerPlayFilled } from "react-icons/tb";
const Services = () => {
      return (
            <section className='w-full'>
                  <main className='container flex flex-col justify-between items-center overflow-hidden mt-24'>
                        {/* service-left */}
                        <div className='flex flex-col justify-between items-center mb-7 gap-4'>
                              <h3 className='md:text-7xl font-medium text-center capitalize text-black sm:text-3xl' data-aos='zoom-in' data-aos-delay='100'>discover your next dream destination</h3>
                              <p className='font-desc' data-aos='zoom-in' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia, quia eius, iure praesentium, tempore ullam libero dolorum quas beatae voluptate. Ab autem impedit eveniet nisi, illum, delectus non quam nihil vel consequatur quae libero.</p>
                              <div className='div' data-aos='zoom-in' data-aos-delay='300'></div>
                        </div>


                        {/* service-right */}
                        <article className='grid grid-cols-1 md:grid-cols-2 gap-9 justify-between cursor-pointer'>
                              <div className='md:w-[490px] h-[270px] flex justify-between items-center gap-4'>
                                    <div data-aos='fade-right' data-aos-delay='200'>
                                          <div className='hover:scale-105 duration-300 ease-linear'>
                                                <div style={{ backgroundImage: `url(${S1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='md:w-[245px] relative h-[270px] sm:w-[200px] rounded flex justify-between items-center'>
                                                      <h5 className='font bottom-9 absolute px-3'>paris country</h5>
                                                      <p className='service-desc bottom-2 absolute px-3'>french</p>
                                                </div>
                                                <div>
                                                      <TbPlayerPlayFilled className='md:translate-x-44 sm:translate-x-36 -translate-y-14 bg-white rounded-full text-center absolute p-2 w-12 h-12' />
                                                </div>
                                          </div>
                                    </div>

                                    <div data-aos='fade-right' data-aos-delay='100'>
                                          <div className='hover:scale-105 duration-300 ease-linear'>
                                                <div style={{ backgroundImage: `url(${S3})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='md:w-[245px] h-[270px] sm:w-[200px] relative rounded'>
                                                      <h5 className='font bottom-9 absolute px-3'>camphor</h5>
                                                      <p className='service-desc bottom-2 absolute px-3'>china</p>
                                                </div>
                                                <div>
                                                      <TbPlayerPlayFilled className='md:translate-x-44 sm:translate-x-36 -translate-y-14 bg-white rounded-full text-center absolute p-2 w-12 h-12' />
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div data-aos='fade-left' data-aos-delay='300'>
                                    <div className='hover:scale-100 duration-500 ease-linear'>
                                          <div style={{ backgroundImage: `url(${S2})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='md:w-[490px] h-[270px] bg-black ml-4 rounded  hover:scale-105 duration-300 ease-linear'>
                                                <h5 className='font bottom-7 absolute px-3'>angkor wat</h5>
                                                <p className='service-desc bottom-2 absolute px-3'>cambodai</p>
                                          </div>
                                          <div>
                                                <TbPlayerPlayFilled className='sm:right-2 md:right-0 -translate-y-14 bg-white rounded-full text-center absolute p-2 w-12 h-12' />
                                          </div>
                                    </div>
                              </div>
                        </article>
                  </main>
                  {/* service-center*/}
                  <div className='mt-24 cursor-pointer'>
                        <div style={{ backgroundImage: `url(${S4})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='md:w-[100%] h-[100vh] flex justify-center items-center flex-col' data-aos='zoom-in' data-aos-delay='100'>
                              <div className='flex justify-center items-center flex-col translate-y-16 px-4 container' >
                                    <h3 className='font' data-aos='fade-right' data-aos-delay='100'>from, we fake you there</h3>
                                    <p className='font-desc mt-4' data-aos='zoom-in' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum eligendi rem reprehenderit ducimus voluptates, totam vitae molestiae odio vero eveniet aspernatur tenetur ea fugiat iure? Totam possimus quas sed accusantium maiores, molestiae autem! Totam nobis quos accusamus tenetur repellat, qui recusandae magni repellendus est, ea nulla?</p>
                                    <TbPlayerPlayFilled className='bg-white text-red-500 rounded-full text-center mt-6 p-2 w-12 h-12' data-aos='fade-left' data-aos-delay='300'/>
                              </div>
                        </div>
                  </div>

                  {/* service-bottom*/}

                  <div className='bg-slate-200 w-full py-6'>
                        <div className='container grid grid-cols-2 md:grid-cols-4 gap-9' data-aos='zoom-in' data-aos-delay='100'>
                              <div className=' texet-center flex justify-center items-center flex-col'>
                                    <h3 className='text-red-500 font-bold capitalize text-4xl'>27k+</h3>
                                    <p className='font-desc'>happy traveles.</p>
                              </div>

                              <div className=' texet-center flex justify-center items-center flex-col'>
                                    <h3 className='text-red-500 font-bold capitalize text-4xl'>50+</h3>
                                    <p className='font-desc'>top destinations.</p>
                              </div>

                              <div className='texet-center flex justify-center items-center flex-col'>
                                    <h3 className='text-red-500 font-bold capitalize text-4xl'>4.8/5</h3>
                                    <p className='font-desc'>customers review.</p>
                              </div>


                              <div className=' texet-center flex justify-center items-center flex-col'>
                                    <h3 className='text-red-500 font-bold capitalize text-4xl'>30+</h3>
                                    <p className='font-desc'>country places.</p>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Services