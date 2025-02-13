import React from "react";
import IconComponent from "../icons/IconComponent";
import searchicon from "../../../../../public/icons/search.svg";

type inputstring = {
  className: string;
};
const SearchInput = ({ className }: inputstring) => {
  return (
    <div className={`${className}`}>
      <input
        className="border-0 outline-none "
        placeholder="Search for the best asset..."
        type="text"
      />
      <button className="hidden md:flex rounded  items-center p-4  bg-black">
        <IconComponent
          source={searchicon}
          height={24}
          width={24}
          className=""
        ></IconComponent>
      </button>
      <button className="md:hidden rounded flex items-center p-4  bg-black">
        <IconComponent
          source={searchicon}
          height={24}
          width={50}
          className=""
        ></IconComponent>
      </button>
    </div>
  );
};

export default SearchInput;
