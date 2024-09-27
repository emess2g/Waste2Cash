import React from 'react'
import assets from '../assets/assets'
const Partners = () => {
  return (

    <div className='bg-[#1A7122]'>
        <section className='flex mx-[4.8rem] justify-between  py-2'>
        <img className='w-[10%] ' src={assets.p1} alt="" />
      <img className='w-[10%]' src={assets.p2} alt="" />
      <img className='w-[10%]' src={assets.p3} alt="" />
      <img className='w-[10%]' src={assets.p2} alt="" />
      <img className='w-[10%]' src={assets.p1} alt="" />
      <img className='w-[10%]' src={assets.p2} alt="" />
        </section>
    </div>
  )
}

export default Partners
