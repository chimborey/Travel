import React from 'react'
import Hero from '../Components/Hero'
import About from '../Page/About'
import Services from '../Services'
import Packages from './Packages'
import Whyus from './whyus'
import Contact from './Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Whyus />
      <Contact />
    </main>
  )
}

export default Home