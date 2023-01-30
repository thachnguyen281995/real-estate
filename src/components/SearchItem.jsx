import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
const SearchItem = () => {
  const {handleClick} = useContext(HouseContext);
  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-xl bg-white
    lg:bg-transparent lg:backdrop-blur rounded-lg items-center
    "
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={handleClick}
        className="bg-violet-700 hover:bg-violet-800 transtion w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white
      text-lg
      "
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default SearchItem;
