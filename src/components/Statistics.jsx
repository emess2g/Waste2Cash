import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const Statistics = () => {
  return (
    <div>
      <section>
        {/* details */}
        <div className="flex items-center justify-center bg-[#1A7122]  mx-auto p-4   ">
        <div className="  mx:px-8 py-8  xl:w-[%] flex  justify-center items-center flex-col gap-4 ">
        <h1 className="text-2xl text-wrap text-center xl:text-4xl text-[white] font-semibold ">
          Become the environment's superhero 
          <span className="text-[#EF362C]"> while earning</span>
        </h1>
        <p className="text-[white] text-center text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam harum itaque est ea excepturi quos maxime eius dolorem magnam officiis.
        </p>     
          <button className="bg-[#fff] w-[%] text-[#1A7122] py-3 px-6 rounded flex  gap-4 mt-2 font-semibold">
            start turning waste2cash <IoArrowForward className="" />
          </button>
      </div>
        </div>
      </section>
    </div>
  )
}

export default Statistics
