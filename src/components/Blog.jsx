import React from 'react'
import assets from '../assets/assets';
import { MdAccountCircle, MdTimer } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const Blog = () => {

    const blogData = [
        {
          img: assets.hero3,
          author: "Citizen Raf",
          title: "A Call for more robust German-African exchange in sustainability",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: assets.hero3,
          author: "Citizen Raf",
          title: "CREP4Campus; Women & Youth Empowerment - One woman and one youth at a time!",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: assets.hero3,
          author: "Citizen Raf",
          title: "A Call for more robust German-African exchange in sustainability",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba, were thrilled to support the #LiteracyFair organi...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
              dateIcon: <MdTimer/> 
          },
        },
      ];

    const latestblogData = [
        {
          img: assets.hero3,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: assets.hero3,
          author: "consolegh_",
          title: "DTI Offers a Variety of Programmes Designed ...",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: assets.hero3,
          author: "consolegh_",
          title: "CREP4Campus; Women & Youth Empowerment - One woman and one youth at a time!",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img: assets.hero3,
          author: "consolegh_",
          title: "CREP4Campus; Women & Youth Empowerment - One woman and one youth at a time!",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },
        {
          img:  assets.b4,
          author: "consolegh_",
          title: "A Call for more robust German-African exchange in sustainability",
          detail: 'Mobile Web Ghana and the American Corner, Agbogba...',
          date: "May 26, 2024",
          icons: {
            authorIcon: <MdAccountCircle /> ,
            dateIcon: <MdTimer/> 
          },
        },

      ];

      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    

  return (
    <section className="bg-[]">
    <div className="mx-4 xl:mx-[4.8rem] my-12 ">
    <div className="flex flex-col justify-center items-center ">
       <div className="flex items-center justify-between pt-12 lg:">
           <h1 className=" mb-14  text-[#1A7122] text-center font-semibold text-6xl ">
             Blog
           </h1>
       </div>
        
     
   
     <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            // infinite={true}
            autoPlay={true}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="w-[100%]"
            removeArrowOnDeviceType={["desktop"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
                {blogData.map((val, index) => {
       const {img, title, author, detail, date , icons } = val;
       return (
        <div key={index} className=" xl:flex-row  items-center text-w justify-center  mb-6 gap-8 flex flex-col">
         <div className=" flex  flex-col gap-2 m-1 items-center ">
            <div className="">
            <img src={img} className="rounded-md" alt="" />   
              </div>              
            <div className="my- flex flex-col justify p-2  ">
            <div className="flex  xl:text-[16px] text-[gray] justify-start items-center gap-2 py-">
           <span className="flex items-center gap-2">{icons.authorIcon} {author}</span>
            <span className="flex items-center gap-2">{icons.dateIcon} {date}</span>              
           </div>
           <div className="">
           <h2 className="text-[14px] text-[#1A7122] xl:mb-4 font-semibold uppercase  xl:text-wrap">{title}</h2>
           <p className='xl:mb-6 text-[gray]'>{detail}</p>
           </div>
           
            </div>
         </div>
         </div>
       );
     })}        
          </Carousel>


         
    </div>
    </div>

 </section>
  )
}

export default Blog
