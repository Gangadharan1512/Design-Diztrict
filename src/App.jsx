/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/Gallery'
import Collaborations from './Components/Collaborations/Collaborations'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Services />
        <Gallery />
        <Collaborations />
      </div>
      <Contact />
    </div>
  )
}

export default App