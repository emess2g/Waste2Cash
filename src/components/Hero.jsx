import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";
import { IoArrowForward } from "react-icons/io5";


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
      className=" h-[60vh] text-center text-white xl:text-start xl:h-[88vh]"
    >
      <div className="w-[%] justify-center ml-0  flex xl:ml-20  flex-col gap-6 items-center">
        <h1 className="text-3xl text-wrap xl:text-5xl text-[] text-center text-wrap font-bold ">
          Become the environment's superhero <br />
          <span className="text-[#EF362C]"> while earning</span>
        </h1>
        <p className="text- text-wrap">
          It's easy, convenient and good for the planet
        </p>
        <NavLink to="/about">
          <button className="bg-[#1A7122] w-[%] py-3 px-6 rounded flex items-center gap-4 mt-2 font-semibold">
            start turning waste2cash <IoArrowForward className="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
