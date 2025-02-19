/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/gallery'
import Collaborations from './Components/Collaborations/Collaborations'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Services />
        <Gallery />
        <Collaborations />
      </div>
      <Contact />
    </div>
  )
}

export default App