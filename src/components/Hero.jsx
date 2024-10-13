import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";
import { IoArrowForward } from "react-icons/io5"



const Hero = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${assets.hero3})`,
        backgroundFilter: "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "rem",
      }}
      className=" relative h-[60vh] text-center text-white xl:text-start xl:h-[88vh]"
    >
      <div className="w-[%] relative justify-center ml-0  flex xl:ml-20  flex-col gap-6 items-center">
        <h1 className="text-3xl text-wrap xl:text-5xl text-[] text-center text-wrap font-bold ">
          Become the environment's superhero <br />
          <span className="text-[#EF362C]"> while earning</span>
        </h1>
        <p className="text- text-wrap">
          It's easy, convenient and good for the planet
        </p>
  
       
      </div>
    </div>
  );
};

export default Hero;
