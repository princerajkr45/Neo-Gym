import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import AboutUs from './AboutUs'
import Classes from './Classes'
import Testimonials from './Testinomials'
import CTA from './CTA'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <Classes />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  )
}
