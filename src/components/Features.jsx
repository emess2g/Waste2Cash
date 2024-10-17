import React from 'react'
import assets from '../assets/assets'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const Features = () => {

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
    <div>
      <section className='pb-[1rem] py-[3rem] mx-4 xl:mx-[4.8rem]'>
        <h1 className='text-[3rem] text-center text-[#1A7122] mb-8'>Features</h1>
        <Carousel
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            // infinite={true}
            // autoPlay={true}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="w-[100%]"
            removeArrowOnDeviceType={["desktop","mobile","tablet"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >    
         
            {/* left features */}
            <div className="flex flex-col gap-4 py-4 ">
            {Array(3).fill("").map((item, index) => ( 
                  <div key={index} className=" justify-center text-center items-center flex flex-col gap-2 xl:items-start xl:text-start ">
                  <img className='w-10' src={assets.sender} alt="" />
                  <div className="">
                      <h2 className='text-xl font-semibold text-[#1A7122]'>Plastic Waste</h2>
                      <p className='text-[#545454]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, placeat illo. Minima modi dolor dicta et?</p>
                  </div>
              </div>
            ))}
            </div>
            {/* middle img */}
            <div className="">
              <img className=' h-[60vh] rounded-md my-6' src={assets.hero3} alt="" />
            </div>
            {/* right features */}
            <div className=" flex flex-col gap-4 py-4 ">
            {Array(3).fill("").map((item, index) => ( 
                  <div key={index} className="justify-center items-center text-center flex flex-col gap-2 xl:items-end xl:text-end">
                  <img className='w-10' src={assets.sender} alt="" />
                   <div className="">
                   <h2 className='text-xl font-semibold text-[#1A7122]'>Plastic Waste</h2>
                   <p className='text-[#545454]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, placeat illo. Minima modi dolor dicta et?</p>                 
                   </div>             
              </div>
            ))}
            </div>
         
          </Carousel>    
      </section>
    </div>
  )
}

export default Features
