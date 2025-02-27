import React from "react";
import SearchInput from "../atoms/inputs/SearchInput";
import DropdownComponent from "./Dropdown";
import imgIcon from "../../../../public/icons/imgIcon.svg";
import IconComponent from "../atoms/icons/IconComponent";
import MobileDropdown from "./MobileDropdown";
import Mobile from "../layout/Mobile";
import Desktop from "../layout/Desktop";
import searchicon from "../../../../public/icons/search.svg";

const Searchbox = () => {
  return (
    <div className="flex   ">
      <div className="flex relative space-x-4 items-center bg-white  rounded-md w-[343px] h-[54px] md:w-[650px] ">
        <div className="flex  border-gray-400 px-2  ms-3 rounded border">
          <IconComponent
            className=""
            height={24}
            width={24}
            source={imgIcon}
          ></IconComponent>
          <Desktop>
            <DropdownComponent className="text-black md:w-32  "></DropdownComponent>
          </Desktop>
          <Mobile>
            <MobileDropdown className="text-black w-8 "></MobileDropdown>
          </Mobile>
        </div>

        <div className="flex ">
          <SearchInput className="flex md:space-x-52  "></SearchInput>
          <button className="absolute right-0 bottom-[0.2px] hidden md:flex rounded  items-center p-4  bg-black">
            <IconComponent
              source={searchicon}
              height={24}
              width={24}
              className=""
            ></IconComponent>
          </button>
          <button className="absolute right-0 bottom-0 md:hidden rounded flex p-4 items-center  bg-black">
            <IconComponent
              source={searchicon}
              height={30}
              width={23}
              className=""
            ></IconComponent>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
