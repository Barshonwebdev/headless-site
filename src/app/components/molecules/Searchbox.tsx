import React from "react";
import SearchInput from "../atoms/inputs/SearchInput";
import DropdownComponent from "./Dropdown";
import imgIcon from "../../../../public/icons/imgIcon.svg";
import IconComponent from "../atoms/icons/IconComponent";
import MobileDropdown from "./MobileDropdown";
import Mobile from "../layout/Mobile";
import Desktop from "../layout/Desktop";
import searchicon from "../../../../public/icons/search.svg";
import AllPurposeButton from "../atoms/buttons/AllPurposeButton";

const Searchbox = () => {
  return (
    <div className="flex   ">
      <div className="flex relative space-x-4 items-center bg-white  rounded-md w-[343px] h-[54px] md:w-[650px] ">
        <div className="flex  border-gray-400 px-2  ms-3 rounded border">
          <IconComponent className="" height={24} width={24} source={imgIcon} />
          <Desktop>
            <DropdownComponent className="text-black lg:w-32  " />
          </Desktop>
          <Mobile>
            <MobileDropdown className="text-black w-8 " />
          </Mobile>
        </div>

        <div className="flex ">
          <SearchInput className="flex md:space-x-52 border-0 outline-none me-3 " />
          <AllPurposeButton
            child={
              <IconComponent
                source={searchicon}
                height={24}
                width={24}
                className=""
              />
            }
            className="absolute right-0 bottom-0 hidden md:flex rounded  items-center p-4  bg-black"
          />
          <AllPurposeButton
            child={
              <IconComponent
                source={searchicon}
                height={30}
                width={23}
                className=""
              />
            }
            className="absolute right-0 bottom-0 md:hidden rounded flex p-4 items-center  bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
