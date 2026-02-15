import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import About from './Page/About'
import AOS from 'aos'
import Services from './Services'
import Packages from './Page/Packages'
import Contact from './Page/Contact'
import Use from './Page/Use'
const App = () => {
  // AOS

  AOS.init({
    duration:1000,
    offset:100,
    once: false
  }, [])
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/services' element = {<Services />}></Route>
      <Route path='/packages' element = {<Packages />}></Route>
      <Route path='/whyus' element ={<Use />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App