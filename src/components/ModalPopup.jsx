import React from "react";
import { IoClose } from "react-icons/io5";

const ModalPopup = ({ setShowModal }) => {
  return (
    <section
      id="modals"
      className="w-[90%] xl:w-[30%] md:w-[40%] absolute m-4  items-center right-[0] text-black text-start bg-[#fff] p-4 rounded"
    >
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
          
            <select 
            required=""
            id="fi-cityId"
            name="cityId"
            aria-label="City"
            type="search"
            className=" py-2 rounded outline-none bg-transparent border pl-2  w-[%]"
            placeholder="e.g Kaosa-NewTown"
          >
            <option value="" disabled="">
              Please select
            </option>
            <option value="652">Abeka</option>
            <option value="270">Abelemkpe</option>
            <option value="290">Ablekuma</option>
            <option value="257">Abokobi</option>
            <option value="278">Abossey Okai</option>
            <option value="578">Accra Mall</option>
            <option value="303">Accra Newtown</option>
            <option value="262">Achimota</option>
            <option value="475">Adabraka</option>
            <option value="170">Adenta</option>
            <option value="664">Afariwaa</option>
            <option value="446">Afienya</option>
            <option value="295">Agbogba</option>
            <option value="662">Agbogbloshie</option>
            <option value="269">Airport</option>
            <option value="258">Amasaman</option>
            <option value="653">Amrahia</option>
            <option value="480">Anyaa</option>
            <option value="663">Ashaiman</option>
            <option value="638">Ashaley Botwe</option>
            <option value="591">Ashongman Estate</option>
            <option value="300">Aslyum Down</option>
            <option value="479">Awoshie</option>
            <option value="575">Awudome</option>
            <option value="265">Baatsona - Spintex</option>
            <option value="481">Bubuashie</option>
            <option value="298">Cantonment</option>
            <option value="585">Caprice</option>
            <option value="568">Chorkor</option>
            <option value="587">Circle</option>
            <option value="267">Dansoman</option>
            <option value="665">Dansoman Mataheko</option>
            <option value="304">Darkuman</option>
            <option value="296">Dawhenya</option>
            <option value="260">Dodowa</option>
            <option value="192">Dome</option>
            <option value="274">Dzorwulu</option>
            <option value="291">East Legon</option>
            <option value="656">East Legon Hills</option>
            <option value="636">Gbestile</option>
            <option value="668">Gbetsele</option>
            <option value="671">Gbetsele Second Junction</option>
            <option value="292">Haatso</option>
            <option value="477">James Town</option>
            <option value="579">Junction Mall</option>
            <option value="301">Kanda</option>
            <option value="276">Kaneshie</option>
            <option value="306">Kissieman</option>
            <option value="266">Korle Bu</option>
            <option value="297">Kpone</option>
            <option value="263">Kwabenya</option>
            <option value="283">Kwashieman</option>
            <option value="281">Labadi</option>
            <option value="280">Labone</option>
            <option value="637">Lakeside Estate</option>
            <option value="273">Lapaz</option>
            <option value="473">Lartebiokorshie</option>
            <option value="223">Lashibi</option>
            <option value="264">Legon</option>
            <option value="224">Madina</option>
            <option value="472">Makola</option>
            <option value="277">Mallam</option>
            <option value="586">Mamobi</option>
            <option value="657">Mamprobi</option>
            <option value="289">Michel Camp</option>
            <option value="654">Mile 7</option>
            <option value="632">Ministries</option>
            <option value="302">Nima</option>
            <option value="577">North Ridge</option>
            <option value="231">Nungua</option>
            <option value="305">Odorkor</option>
            <option value="674">Ofankor</option>
            <option value="592">Old Ashongman</option>
            <option value="268">Osu</option>
            <option value="285">Oyarifa</option>
            <option value="655">Oyibi</option>
            <option value="288">Pantang</option>
            <option value="275">Prampram</option>
            <option value="474">Ridge</option>
            <option value="299">Roman Ridge</option>
            <option value="282">Sakumono</option>
            <option value="279">Santa Maria</option>
            <option value="284">Sowutuom</option>
            <option value="670">Spintex Flower Pot</option>
            <option value="560">Spintex GT Bank</option>
            <option value="245">Taifa</option>
            <option value="634">Teiman</option>
            <option value="625">Tema Commnuity 9</option>
            <option value="617">Tema Community 1</option>
            <option value="626">Tema Community 10</option>
            <option value="627">Tema Community 11</option>
            <option value="628">Tema Community 12</option>
            <option value="629">Tema Community 18</option>
            <option value="618">Tema Community 2</option>
            <option value="630">Tema Community 22</option>
            <option value="631">Tema Community 25</option>
            <option value="619">Tema Community 3</option>
            <option value="620">Tema Community 4</option>
            <option value="621">Tema Community 5</option>
            <option value="622">Tema Community 6</option>
            <option value="623">Tema Community 7</option>
            <option value="624">Tema Community 8</option>
            <option value="250">Tema New Town</option>
            <option value="478">Tesano</option>
            <option value="251">Teshie</option>
            <option value="571">Tse Addo</option>
            <option value="476">Tudu</option>
            <option value="259">Weija</option>
            <option value="464">Westhills</option>
          </select> 
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
