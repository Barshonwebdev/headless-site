import React from "react";
import SearchInput from "../atoms/inputs/SearchInput";
import DropdownComponent from "./Dropdown";
import imgIcon from "../../../../public/icons/imgIcon.svg";
import IconComponent from "../atoms/icons/IconComponent";
import searchicon from "../../../../public/icons/search.svg";
const Searchbox = () => {
  return (
    <div className="flex    ">
      <div className="flex space-x-4 items-center bg-white  rounded-md w-[650px]">
        <div className="flex space-x-2 border-gray-400 p-5">
          <IconComponent
            className=""
            height={24}
            width={24}
            source={imgIcon}
          ></IconComponent>
          <DropdownComponent></DropdownComponent>
        </div>
        <SearchInput className=""></SearchInput>
      </div>
      <button className=" rounded flex items-center p-4  bg-black">
        <IconComponent
          source={searchicon}
          height={24}
          width={24}
          className=""
        ></IconComponent>
      </button>
    </div>
  );
};

export default Searchbox;
