import React from "react";
import IconComponent from "../atoms/icons/IconComponent";
import searchIcon from "../../../../public/icons/search.svg";
import Text from "../atoms/texts/Text";
const SearchSuggest = () => {
  return (
    <div>
    
      <div className="">
        <div className="flex space-x-2 md:space-x-5 ">
          <div className="bg-gray-500 opacity-75 rounded p-1 hidden lg:block ">
            <Text child="Popular Searches:" className="text-white"></Text>
          </div>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Aesthetic image" className="text-white text-xs md:text-base"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="New arrived" className=" text-white text-xs md:text-base"></Text>
          </button>
          <button className="flex items-center space-x-2 bg-gray-900 opacity-75 rounded p-1">
            <IconComponent
              className=""
              height={10}
              width={20}
              source={searchIcon}
            ></IconComponent>
            <Text child="Best art" className=" text-white text-xs md:text-base"></Text>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default SearchSuggest;
