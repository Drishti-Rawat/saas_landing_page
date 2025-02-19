import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'

const Homepage = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features/>
      <Pricing/>

    </main>
  )
}

export default Homepage
