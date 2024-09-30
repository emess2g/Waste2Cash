import React, {useState} from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom'
import assets from '../assets/assets';
import { MdEmail, MdHome, MdPhone } from 'react-icons/md';

const Footer = () => {

   const getYear = () => {
       return new Date().getFullYear()
   }


  return (
    <div className='bg-[#F7F7F7] text-[#747474] '>
      <div className="xl:mx-10  flex flex-col text-cener items-center justify-between gap-[rem] bg-[]  pt-[6rem] px-8 pb-[rem] lg:px-12">
      <div className="flex flex-col  gap-[3rem] lg:flex-row   justify-betwn p-">
        <div className="xl:w-[30%] flex flex-col justify-center">
           <NavLink to='/'>
           <img className='w-[50%]' src={assets.logo} alt="logo" />
           </NavLink>
            <article className='text-[14px] mt-10'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto doloremque nihil ducimus doloribus neque, dolor sint.
            </article>
            <button className='w-[50%] bg-[#1A7122] text-white p-4 m-3 rounded-md text-center'>
                Join Us
            </button>
        </div>

       <div className=" flex flex-col gap-4  p- lg:flex-row text-[18px]  justify-between flex-1">
        <div className="">
        <h2 className='text-[#1A7122] font-semibold mb-2' >Quick Links</h2>
        <div className="flex flex-col gap-2 py-  text-[px]">
                <Link className='flex items-center gap-2' to='/'>         
                  <p>Home</p>
                </Link>

                <Link className='flex items-center gap-2' to='/about'>      
                <p>About</p>
                </Link>
               
                <Link className='flex items-center gap-2' to='/projects'> 
                <p>Projects</p>
                </Link>
              
                <Link className='flex items-center gap-2' to='/register'>
                <p>Register</p>
                </Link>

                <Link className='flex items-center gap-2' to='/blog'>
                <p>Blog</p>
                </Link>
            </div>
        </div>

        <div className="">
          <h1 className='text-[#1A7122] font-semibold mb-2'>Follow Us</h1>
           
          <div className="flex flex-col gap-4 py-  text-[px]">
                <Link className='flex items-center gap-2' to='https://x.com/ruralcodecampgh'>         
                <FaTwitter/>
                <p>Twitter</p>
                </Link>

                <Link className='flex items-center gap-2' to='https://www.facebook.com/profile.php?id=61562999973794'>
                <FaFacebook />
                <p>Facebook</p>
                </Link>
               
                <Link className='flex items-center gap-2' to=''>
                <FaInstagram/>
                <p>Instagram</p>
                </Link>

               
                <Link className='flex items-center gap-2' to=''>
                 <FaLinkedin/>
                <p>LinkedIn</p>
                </Link>
            </div>
        </div>

         <div className="flex flex-col gap-2 mb-6">
            <h2 className='text-[#1A7122] font-semibold' >Contact Us</h2>

            <div>
                <div className='flex items-center gap-2'> <MdEmail/> 
                 <span className='text-[gray] pointer'>info@waste2cash.org</span> </div>  

                <div className='flex items-center gap-2'> <MdPhone/>
                 <span className='text-[gray] pointer'>+233 551143989</span> </div>

                <address className='flex items-center gap-2'> <MdHome/>
                 <span className='text-[gray] pointer'>CC-980-73, Accra- Ghana</span> </address>
            </div>

            <div className="text-md">
              <h1 className='text-[gray]'>Subscribe To Our Newsletter:</h1>
              <form action="" className='flex items-center'>
                <input type="email" className='text-sm p-2 outline-none border border-[#1A7122] ' placeholder='Email Address' /> 
                <Link to=''>
                <button type="submit" className="bg-[#1A7122] text-sm text-white p-2 border border-[#1A7122]">Subscribe</button>
                </Link>
              </form>
            </div>
         </div>
      </div>
     </div>
      <hr className='w-[100%] mt-4 border-[#1A7122] '/>
      {/* divider */}
     <div className="flex justify-center text-center text-[#1A7122]  my-4"> 
        <div className="">
             &copy;{getYear()} - Waste2Cash. ALL RIGHTS RESERVED.
        </div>
     </div>
      </div>
    </div>
  )
}

export default Footer
