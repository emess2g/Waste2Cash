import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { IoClose } from "react-icons/io5";

const ModalPopup = ({ setShowModal }) => {
  
const api_key = 'AIzaSyA_qBSnevO4T8L2pW2qaCl13WOVPX9Gb9U'; 

  return (
    <section className="w-[90%] xl:w-[30%] md:w-[40%] absolute m-4  items-center right-[0] text-black text-start bg-[#fff] p-4 rounded">
      <header className="flex justify-between items-cemter mb-4">
        <h1>Details</h1>
        <div className="bg-red-400 p-1 rounded-[50%] text-white">
          <IoClose className="text-2xl" onClick={() => setShowModal(false)} />
        </div>
      </header>
      <form className="flex flex-col text-start gap-1 justify-start p-">
        <label className="flex flex-col items-" htmlFor="">
          Name 
          <input
            type="text"
            required
            className="mb- py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g Rafik Gansta"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Location
         
          <Autocomplete
            apiKey={api_key}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "gh" },
            }}
            className="py-2 rounded outline-none bg-transparent border pl-2 "
          />
       
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Contact
          <input
            type="tel"
             required
            className="m- py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g 0550"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Waste Type
          <input
            type="text"
            required
            className=" py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g plastics, metals"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Instruction
          <input
            type="textarea"
            className=" py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder=""
          />
        </label>

        <button
          onClick={SubmitEvent}
          type="submit"
          className="bg-red-400 p-2 mt-2 text-white rounded-md text-1xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ModalPopup;
