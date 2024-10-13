import React from 'react'
import { IoClose } from "react-icons/io5";

const ModalPopup = ({setShowModal}) => {
  return (
    <section id='modals' className='w-[90%] xl:w-[30%] absolute m-4  items-center right-[0] text-white text-start bg-[#1A7122] p-4 rounded'>
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
            <input type="phone" className='m- py-2 rounded outline-none bg-transparent border pl-2  w-[%]' placeholder='e.g 0550' />
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
 </section>
  )
}

export default ModalPopup
