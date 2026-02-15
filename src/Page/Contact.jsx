import React from 'react'

const Contact = () => {
  return (
    
    <section className='w-full h-72'>
      <section className='container absolute md:translate-y-20 md:translate-x-56 sm:-translate-y-12 z-10 '>
      <main className='continer grid grid-cols-1 md:px-7 sm:px-4 md:grid-cols-2 mt-24 mb-12 bg-cyan-700 rounded-lg' data-aos='fade-right' data-aos-delay ='100'>
            {/* Contact-left */}
            <div>
                  <h3 className='font-bold text-3xl text-white capitalize md:mt-7 sm:mt-4'>crafting unforgettable moments. one trip at a time</h3>
                  <div className='div mt-4 mb-12'></div>
            </div>

            {/* Contact-right */}
            <div className='flex flex-col items-center md:mt-7 sm:mb-4'>
                  <h3 className='font-bold text-3xl text-white capitalize ml-auto'>subscribe our newsletter</h3>
                  <div className='flex items-center gap-3 justify-center'>
                        <input type="text" name="" id="" placeholder='Enter your email' className='w-[270px] rounded-lg px-4 py-2 mt-7 h-[40px]'/>
                        <button className='btn mt-6'>subcribe</button>
                  </div>
            </div>
      </main>
    </section>
    </section>
  )
}

export default Contact