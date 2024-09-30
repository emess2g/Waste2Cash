import React from 'react'
import assets from '../assets/assets'

const Features = () => {
  return (
    <div>
      <section className='pb-[1rem] py-[3rem] mx-4 xl:mx-[4.8rem]'>
        <h1 className='text-[3rem] text-center text-[#1A7122] mb-8'>Features</h1>
        <div className="flex flex-col   xl:flex-row ">
            {/* left features */}
            <div className="flex flex-col gap-4 py-4 ">
            {Array(3).fill("").map((item, index) => ( 
                  <div key={index} className=" justify-center text-center items-center flex flex-col gap-2 xl:items-start xl:text-start ">
                  <img className='w-10' src={assets.sender} alt="" />
                  <div className="">
                      <h2 className='text-xl font-semibold text-[#1A7122]'>Plastic Waste</h2>
                      <p className='text-[#545454]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, placeat illo. Minima modi dolor dicta et?</p>
                  </div>
              </div>
            ))}
            </div>
            {/* middle img */}
            <div className="">
              <img className='hidden xl:block h-[60vh] rounded-md my-6' src={assets.hero3} alt="" />
            </div>
            {/* right features */}
            <div className="hidden flex flex-col gap-4 py-4 xl:block">
            {Array(3).fill("").map((item, index) => ( 
                  <div key={index} className="flex flex-col gap-2 items-end text-end">
                  <img className='w-10' src={assets.sender} alt="" />
                   <div className="">
                   <h2 className='text-xl font-semibold text-[#1A7122]'>Plastic Waste</h2>
                   <p className='text-[#545454]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, placeat illo. Minima modi dolor dicta et?</p>                 
                   </div>             
              </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Features
