import React from "react";
import Text from "../../atoms/texts/Text";
import Searchbox from "../../molecules/Searchbox";
import SearchSuggest from "../../molecules/SearchSuggest";
import bg from "../../../../../public/images/banner.svg";

const Banner = () => {
  return (
    <div
      className="flex space-y-8 items-center bg-cover  bg-center h-[450px]  flex-col justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Text
        child="Emotions through images."
        className="text-5xl text-center text-white font-extrabold"
      ></Text>
      <Text
        child="Explore our curated collection of premium digital art to inspire your next creative masterpiece."
        className="text-xl text-white text-center font-normal"
      ></Text>
      <Searchbox></Searchbox>
      <SearchSuggest></SearchSuggest>
    </div>
  );
};

export default Banner;
