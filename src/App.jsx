import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MealPlans from './components/MealPlans'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MealPlans />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
