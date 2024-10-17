import React, { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { GlobalLoading, showLoading } from "react-global-loading";
import Autocomplete from "react-google-autocomplete";
import { IoClose } from "react-icons/io5";
import { fetch } from "./sendRequest";
import { toast } from "react-toastify";

const ModalPopup = ({ setShowModal }) => {
  const [state, setState] = useState([]);
  const [senderName, setSenderName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const api_key = "AIzaSyA_qBSnevO4T8L2pW2qaCl13WOVPX9Gb9U";

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const data = { senderName, contact, location, latitude, longitude };

    try {
      setLoading(true);
      const response = await fetch(data);
      setTimeout(() => {
        // Handle the response as needed
        setLoading(false);
        setShowModal(false); // Close the modal after submission
      }, 500);
      toast.success("Request Submitted Successfully");
    } catch (error) {}
  };

  return (
    <section className="w-[90%] xl:w-[30%] md:w-[40%] fixed m-4  items-center right-[0] text-black text-start bg-[#fff] p-4 rounded">
      <header className="flex justify-between items-cemter mb-4">
        <h1>Details</h1>
        <div className="bg-red-400 p-1 rounded-[50%] text-white">
          <IoClose className="text-2xl" onClick={() => setShowModal(false)} />
        </div>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-start gap-1 justify-start p-"
      >
        <label className="flex flex-col items-" htmlFor="">
          Name
          <input
            type="text"
            required
            className="mb- py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="Enter your name"
            onChange={(result) => setSenderName(result.target.value)}
            value={senderName}
          />
        </label>
        <label className="flex flex-col items-" htmlFor="">
          Location
          <Autocomplete
            apiKey={api_key}
            onPlaceSelected={(place) => {
              setLatitude(place.geometry.location.lat());
              setLongitude(place.geometry.location.lng());
              setLocation(place.formatted_address);
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
            onChange={(result) => setContact(result.target.value)}
            value={contact}
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
          type="submit"
          className="flex items-center justify-center  bg-red-400 p-2 mt-2 text-white rounded-md text-1xl"
        >
          {!loading ? (
            <span> Submit</span>
          ) : (
            <ClipLoader
              color={color}
              loading={loading}
              // cssOverride={override}
              size={18}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </button>
      </form>
    </section>
  );
};

export default ModalPopup;
