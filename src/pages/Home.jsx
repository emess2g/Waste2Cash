import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Features from '../components/Features'
import Statistics from '../components/Statistics'
import Operations from '../components/Operations'
import Experiencies from '../components/Experiencies'
import Blog from '../components/Blog'
import Discount from '../components/Discount'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Partners/>
      <Features/>
      <Statistics/>
      <Operations/>
      <Experiencies/>
      <Blog/>
      <Discount/>
    </div>
  )
}

export default Home
