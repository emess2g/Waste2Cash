import React from 'react'
import assets from '../assets/assets'
const Operations = () => {
  return (
    <div>
       <section className='bg-[#F7F7F7] pb-[3rem] py-[3rem] mx-4 xl:mx-[4.8rem]'>
        <h1 className='text-4xl xl:text-[3rem] text-center text-[#1A7122] mb-4 font-semibold'>Areas of Operation</h1>
        <div className="xl:flex justify-between gap-4 items-center ">
            {/* left features */}
            <div className="flex flex-col gap-4 py-4 xl:w-[40%]">
                <h2 className='text-3xl text-[#1A7122] font-semibold'>Areas</h2>
                <p className='text-[#545454]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus nulla culpa iusto, amet officiis ipsam.</p>
            {Array(4).fill("").map((item, index) => ( 
                  <div key={index} className=" flex items-center gap-4 rounded shadow-md p-4">
                  <img className='w-10' src={assets.sender} alt="" />
                  <div className="">
                      <h2 className='text-xl font-semibold text-[#1A7122]'>Plastic Waste</h2>
                      <p className='text-[#545454]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  </div>
              </div>
            ))}
            </div>
            {/* middle img */}
            <div className="">
              <img className='xl:h-[60vh] rounded-md my-6' src={assets.hero3} alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Operations
