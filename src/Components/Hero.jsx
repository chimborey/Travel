import React from 'react'
import bg from '../assets/bg1.jpg'
const Hero = () => {
  return (
    <section className='w-full mt-12 py-14 h-screen' style={{backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} data-aos='zoom-in' data-aos-delay='100'>
      <main className='container flex flex-col justify-center h-screen items-center gap-12'>
            {/* hero-center-01 */}
            <div className='flex flex-col gap-2 items-center'>
                  <h3 className='md:text-7xl font-medium text-center capitalize text-white sm:text-3xl' data-aos='zoom-in' data-aos-delay='200'>explore every beautiful desctionations</h3>
                  <p className='font-desc' data-aos='zoom-in' data-aos-delay='300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestiae magni! Facilis quis soluta tenetur dolorem beatae tempore eum culpa molestias aspernatur! Iure neque, totam odio magnam minima veritatis fugit laborum corporis aliquam placeat voluptates assumenda voluptas quos. Facere commodi deserunt reiciendis eaque eum tempore.</p>
            </div>

            {/* hero-center-02 */}
            <div data-aos='zoom-in' data-aos-delay='400'>
                  <button className='btn'>booking now</button>
            </div>
      </main>
    </section>
  )
}

export default Hero