import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { IoClose } from "react-icons/io5";
import { kGoogleApiKey } from "../../../env";

const ModalPopup = ({ setShowModal }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const locations = [
    { names: "Ashongman Estate", id: 0 },
    { names: "Ashongman Estate", id: 1 },
    { names: "Accra Mall", id: 2 },
    { names: "Agbogba", id: 3 },
    { names: "Awoshie", id: 4 },
    { names: "Bubuashie", id: 5 },
    { names: "East Legon Hills", id: 6 },
    { names: "Ashaley Botwe", id: 7 },
    { names: "Dawhenya", id: 8 },
    { names: "Amasaman", id: 9 },
    { names: "Dzorwulu", id: 10 },
  ];

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = locations.filter((loc) =>
      loc.names.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

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
            className="mb- py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g Rafik Gansta"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Location
          {/* <input
              type="text"
              value={searchItem}
              onChange={(e) => handleInputChange(e)}
              className="py-2 rounded outline-none bg-transparent border pl-2" /> */}
          <Autocomplete
            apiKey={kGoogleApiKey}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "gh" },
            }}
            className="py-2 rounded outline-none bg-transparent border pl-2 "
          />
          {/* <ul className="p-2 bg-[#F5F5F5]">
              {filteredUsers.map(loc => <li key={loc.id}><p>{loc.names}</p></li>)}
              </ul> */}
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Contact
          <input
            type="phone"
            className="m- py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g 0550"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Waste Type
          <input
            type="text"
            className=" py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g plastics, metals"
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Instruction
          <input
            type="text"
            className=" py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder=""
          />
        </label>

        <button
          onClick={() => setShowModal(false)}
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
