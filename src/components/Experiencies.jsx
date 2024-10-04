import React from "react";
import assets from "../assets/assets";
import { MdStars } from "react-icons/md";
// import Carousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const Experiencies = () => {
    const cards = [ 
        {
            icons :  <MdStars />,
            testimony: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.   Recusandae, nemo sequi? Amet nisi odit eius architecto.',
            img: assets.sender,
            client: 'Citizen A. Raf',
            status: 'Senior Software Engineer - Lead'        
        },
        {
            icons :  <MdStars />,
            testimony: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nemo sequi? Amet nisi odit eius architecto.',
            img: assets.sender,
            client: 'Citizen G. Raf',
            status: 'Senior Software Engineer - Lead'        
        },
        {
            icons :  <MdStars />,
            testimony: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nemo sequi? Amet nisi odit eius architecto.',
            img: assets.sender,
            client: 'Citizen Raf',
            status: 'Senior Software Engineer - Lead'        
        }
    ]

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
      <section className="bg-[#1A7122]">
        <div className="flex flex-col items-center mx-2 xl:mx-[4.5rem] py-6  justify-center  gap-8 ">
          <div className="xl:w-[45%] text-center">
            {/* header */}
            <h1 className=" text-wrap text-4xl text-[white] mb-2 text-wrap font-semibold ">
              Happy Individual's
              <span className="text-[#EF362C]"> Testimonies</span>
            </h1>
            <p className="text-[white] text-wrap">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              harum itaque est ea excepturi quos maxime eius dolorem magnam
              officiis.
            </p>
          </div>

          <Carousel
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            // infinite={true}
            // autoPlay={false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={1000}
            containerClass="w-full flex justify-center"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {
                cards.map((card) => {
                    return( 
                    <div className="flex w-[%] items-center justify-center m-1 mb-8 ">
                    <div className="w-[%] bg-[#fff] text-black xl: flex flex-col gap-4 py-4 px-3 rounded-md">
                      {/* rating */}
                      <div className="flex text-xl text-[#1A7122]">
                        {card.icons}
                        {card.icons}
                        {card.icons}
                        {card.icons}
                        {card.icons}
                      </div>
      
                      {/* testimonies */}
                      <div className="">
                        <p className="text-[#888888]">
                          {card.testimony}
                        </p>
                      </div>
                      <div className=" flex items-center gap-2 w-[%] ">
                        <img className="w-10" src={card.img} alt="" />
                        <div className="">
                          <h2 className="text-[#1A7122] font-semibold ">
                           {card.client}
                          </h2>
                          <p className="text-sm text-[#888888]">
                            {card.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )})
            }
         
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Experiencies;
