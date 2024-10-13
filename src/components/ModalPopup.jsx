import React from 'react'
import { IoClose } from "react-icons/io5";

const ModalPopup = ({setShowModal}) => {
  return (
    <div className='w-[90%]  top-5 left-0 right-0  xl:w-[50%] z-[10] xl:top-[10]  xl:right-[202px]  text-start bg-[#1A7122] p-4 rounded'>
    <header className='flex justify-between items-cemter mb-4'>
         <h1>Details</h1>
         <div className="bg-red-400 p-1 rounded-[50%] text-white">
         <IoClose className='text-2xl' onClick={() => setShowModal(false)} />
         </div>
    </header>
    <form  className='flex flex-col text-start gap-1 justify-start p-'>
        <label className='flex flex-col items-' htmlFor="">
            Name
            <input type="text" className='mb- py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='e.g Rafik Gansta' />
        </label> 
        <label className='flex flex-col items-' htmlFor="">
            Location
            <input type="text" className=' py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='e.g Kaosa-NewTown' />
        </label>
        <label className='flex flex-col items-' htmlFor="">
            Contact
            <input type="text" className='m- py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='e.g 0550' />
        </label>
        <label className='flex flex-col items-' htmlFor="">
            Waste Type
            <input type="text" className=' py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='e.g plastics, metals' />
        </label>
        <label className='flex flex-col items-' htmlFor="">
            Instruction
            <input type="text" className=' py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='' />
        </label>

          <button onClick={() => setShowModal(false)} type="submit" className="bg-red-400 p-2 mt-2 rounded-md text-1xl">Submit</button>
    </form>
 </div>
  )
}

export default ModalPopup
