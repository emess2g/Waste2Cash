import React from 'react'


const Discount = () => {
  return (
    <div>
      <section>
        {/* details */}
        <div className="flex items-center justify-center bg-[#1A7122] h-[50vh] mx-auto p-4   ">
        <div className="  px-8 py-8  xl:w-[%] flex  justify-center items-center flex-col gap-4 ">
        <h1 className=" text-wrap text-4xl text-[white]  text-wrap font-semibold ">
          Become the environment's superhero 
          <span className="text-[#EF362C]"> while earning</span>
        </h1>
        <p className="text-[white] text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam harum itaque est ea excepturi quos maxime eius dolorem magnam officiis.
        </p>     
          <button className="bg-[#fff] w-[%] text-[#1A7122] py-3 px-6 rounded flex  gap-4 mt-2 font-semibold">
            start turning waste2cash 
          </button>
      </div>
        </div>
      </section>
    </div>
  )
}

export default Discount
