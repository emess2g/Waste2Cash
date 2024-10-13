import React, { useState } from "react";

import assets from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "./Sidebar";
// import Home from "../pages/Home";

const Navbar = ({}) => {
  const [sidebar, setSidebar] = useState(false);
  // const [closeMenu, setClosemenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [media, SetMedia] = useState(false);


  
  const showSidebar = () => {
    setSidebar(!sidebar );
    setClosemenu(!closeMenu); 
  };

 

  const SidebarData = [
    {
      id: "1",
      title: "Home",
      path: "/",
    },
    {
      id: "2",
      title: "About",
      path: "/about",
    },
    { 
      id: "3",
      title: "Projects",
      path: "/projects",
    },
    {
      id: "4",
      title: "Blog",
      path: "/blog",
    },
    {
      id: "5",
      title: "Contact",
      path: "/contact",
    },
    {
      id: "6",
      title: "Register",
      path: "/register",
    },
  ];


  // nav bg color change //

  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "bg-[#1A7122] shadow-xl  w-full duration-700 " : "bg-[#1a7122] duration-700 "}>
      <div className="flex justify-between py-4  mx-4 xl:mx-[4.2rem] items-center sticky top-0 z-">
        <div className="  xl:pl-">
          <Link to='/'>
          <img
            className='duration-700 rounded  w-[40%] xl:W-[30%] '
            src={assets.logo }
            alt=""
          />
          </Link>        
        </div>

        { sidebar ? (<Sidebar showSidebar={showSidebar} />) 
        : 
        (       <nav className="hidden d  lg:block w-[50%]">
          <ul className="lg: flex text-nowrap gap-2 py-2  justify-between items-center  ">
            {SidebarData.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className=' px-4 xl:text-[20px] duration-700 text-white  font-semibold'             
                >
                  <span
                    className={
                      index == 5 ? "bg-[#EF362C] font-semibold rounded-md p-3 duration-700" : "bg-inherit"
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </ul>
        </nav>)}

 

        <div className=" flex text-3xl text-black items-center gap-4 text-2xl duration-700 lg:hidden">

          {sidebar ? (
            <IoClose
             onClick={showSidebar }
             className={sidebar ? 'text-white absolute right-1 bg-[#1A7122] showdow rounded-[50%] p- text-2xl top-10 duration-700' : ''} 
             />         
          ) : (
            <IoMenu  className="duration-700 text-white" onClick={showSidebar} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
