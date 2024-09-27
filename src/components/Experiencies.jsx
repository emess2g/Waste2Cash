import React from 'react'
import assets from '../assets/assets'
import { MdStars } from 'react-icons/md'

const Experiencies = () => {
  return (
    <div>
       <section>
        <div className="flex flex-col items-center justify-center bg-[#1A7122] h-[50vh]    ">
          <div className="w-[45%] text-center">
              {/* header */}
         <h1 className=" text-wrap text-4xl text-[white] mb-2 text-wrap font-semibold ">
           Happy Individual's 
          <span className="text-[#EF362C]"> Testimonies</span>
        </h1>
        <p className="text-[white] text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam harum itaque est ea excepturi quos maxime eius dolorem magnam officiis.
        </p> 
          </div> 

        {/* cards */}
          <div className="flex items-center justify-center gap-4 pt-8">
          <div className=" bg-[#fff] text-black w-[30%] flex  justif item flex-col gap-4 p-4 rounded-md ">
              {/* rating */}
              <div className="flex text-xl text-[#1A7122]">
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
              </div>

                {/* testimonies */}
                <div className="">
                <p className='text-[#888888]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nemo sequi? Amet nisi odit eius architecto.</p>
                </div>
                 <div className=" flex items-center gap-2 w-[%] ">
                  <img className='w-10' src={assets.sender} alt="" />
                  <div className="">
                      <h2 className='text-[#1A7122] font-semibold '> Citizen Raf </h2>
                      <p className='text-sm text-[#888888]'>Senior Software Engineer - Lead</p>
                  </div>
                 </div>
               
        </div>
        <div className="  bg-[#fff] text-black w-[30%] flex  justif item flex-col gap-4 p-4 rounded-md ">
              {/* rating */}
              <div className="flex text-xl text-[#1A7122]">
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
                  <MdStars/>
              </div>

                {/* testimonies */}
                <div className="">
                <p className='text-[#888888]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nemo sequi? Amet nisi odit eius architecto.</p>
                </div>
                 <div className=" flex items-center gap-2 w-[%] ">
                  <img className='w-10' src={assets.sender} alt="" />
                  <div className="">
                      <h2 className='text-[#1A7122] font-semibold '> Citizen Raf </h2>
                      <p className='text-sm text-[#888888]'>Senior Software Engineer - Lead</p>
                  </div>
                 </div>
               
        </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiencies
