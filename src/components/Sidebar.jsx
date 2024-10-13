import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets';
import ModalPopup from './ModalPopup';

const Sidebar = ({showSidebar}) => {
  const [showModal,setShowModal] = useState(false);

  const sidebarData = [
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
  ];



  return (
    <aside  id='sidebar'>
       <nav className='flex flex-col duration-700 justify-between absolute w-[100%] bg-white  px-4 left-0 top-20  drop-shadow-2xl duration-700 rounded-md h-[80vh] ' >
         <ul className=' flex-1'>     
            {sidebarData.map((item, index) => {
                return ( <li key={index} className='flex flex-row gap- p-2'>
                      <Link to={item.path} className={'text-[#1A7122] font-semibold w-full duration-700 flex items-center justify-between p-2 '   }>
                         <span 
                         className={index == 5 ? "bg-[#1A7122] font-semibold rounded-md py-3 px-6 text-[#fff] duration-700" : "bg-inherit"}
                         onClick={  () => setShowModal(true) || showSidebar }  >                  
                          {item.title}</span>
                    </Link>
                    {showModal &&  <ModalPopup setShowModal={setShowModal}/>} 
                 </li>)
            })}
         </ul>
         <img  className='p-6' src={assets.logo} alt="" />
      
       </nav>
       
    </aside>
  )
}

export default Sidebar
