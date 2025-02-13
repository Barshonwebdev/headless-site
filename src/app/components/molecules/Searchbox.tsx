import React from "react";
import SearchInput from "../atoms/inputs/SearchInput";
import DropdownComponent from "./Dropdown";
import imgIcon from "../../../../public/icons/imgIcon.svg";
import IconComponent from "../atoms/icons/IconComponent";
const Searchbox = () => {
  return (
    <div className="flex    ">
      <div className="flex  space-x-4 items-center bg-white  rounded-md w-[650px]">
        <div className="flex  space-x-2 border-gray-400 px-2 py-1 ms-3 rounded border">
          <IconComponent
            className=""
            height={24}
            width={24}
            source={imgIcon}
          ></IconComponent>
          <DropdownComponent className="text-black" ></DropdownComponent>
        </div>
        <SearchInput className="flex space-x-52 "></SearchInput>
      </div>
      
    </div>
  );
};

export default Searchbox;
