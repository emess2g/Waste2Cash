import React from 'react'
import { IoClose } from "react-icons/io5";

const ModalPopup = ({setShowModal}) => {
  return (
    <div className='flex flex-col m-2 absolute txl:op-[210px] z-[10] top-[25px] left-0 right-0 xl:left-4 text-start bg-[#1A7122]  xl:w-full p-4 rounded'>
    <header className='flex justify-between items-cemter mb-4'>
         <h1>Details</h1>
         <div className="bg-red-400 p-1 rounded-[50%] text-white">
         <IoClose className='text-2xl' onClick={() => setShowModal(false)} />
         </div>
    </header>
    <form  className='flex flex-col text-start gap- justify-start p-2'>
        <label className='flex flex-col items-center' htmlFor="">
            Name
            <input type="text" className='m-4 py-2 outline-none bg-transparent border pl-2  w-[100%]' placeholder='e.g Rafik Gansta' />
        </label> 
        <label className='flex flex-col items-center' htmlFor="">
            Location
            <input type="text" className='m-4 py-2 outline-none bg-transparent border pl-2  w-[100%]' placeholder='e.g Kaosa-NewTown' />
        </label>
        <label className='flex flex-col items-center' htmlFor="">
            Contact
            <input type="text" className='m-4 py-2 outline-none bg-transparent border pl-2  w-[100%]' placeholder='e.g 0550' />
        </label>
        <label className='flex flex-col items-center' htmlFor="">
            Waste Type
            <input type="text" className='m-4 py-2 outline-none bg-transparent border pl-2  w-[100%]' placeholder='e.g plastics, metals' />
        </label>
        <label className='flex flex-col items-center' htmlFor="">
            Instruction
            <input type="text" className='m-4 py-2 outline-none bg-transparent border pl-2  w-[100%]' placeholder='' />
        </label>

          <button onClick={() => setShowModal(false)} type="submit" className="bg-red-400 p-2 rounded-md text-2xl">Submit</button>
    </form>
 </div>
  )
}

export default ModalPopup
