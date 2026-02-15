import React from 'react'
import Hero from '../Components/Hero'
import About from '../Page/About'
import Services from '../Services'
import Packages from './Packages'
import Contact from './Contact'
import Use from './Use'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Use />
      <Contact />
    </main>
  )
}

export default Home