import React from "react";
import IconComponent from "../atoms/icons/IconComponent";
import searchIcon from "../../../../public/icons/search.svg";
import Text from "../atoms/texts/Text";
const SearchSuggest = () => {
  return (
    <div>
      {/* desktop view  */}
      <div className="hidden md:block">
        <div className="flex space-x-5 ">
          <div className="bg-gray-500 opacity-75 rounded p-1">
            <Text child="Popular Searches:" className="text-white"></Text>
          </div>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Aesthetic image" className="text-white"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="New arrived" className=" text-white"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Best art" className=" text-white"></Text>
          </button>
        </div>
      </div>

      {/* mobile view  */}
      <div className="block md:hidden">
        <div className="flex  space-x-5   ">
        {/* <div className="bg-gray-500 opacity-75 rounded px-1 space-x-2 flex items-center">
            <Text child="Popular Searches:" className="text-white"></Text>
          </div> */}
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Aesthetic" className="text-white"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="New arrived" className=" text-white"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Best art" className=" text-white"></Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggest;
