import React from "react";
import Text from "../../atoms/texts/Text";
import Searchbox from "../../molecules/Searchbox";
import SearchSuggest from "../../molecules/SearchSuggest";
import bg from '../../../../../public/images/mobilebanner.svg'

const MobileBanner = () => {
  return (
    <div className="flex space-y-8 items-center bg-cover h-[484px]  flex-col justify-center" style={{ backgroundImage: `url(${bg.src})` }} >
      <Text child="Emotions through images." className="text-3xl text-center text-white font-extrabold"></Text>
      <Text
        child="Explore our curated collection of premium digital art to inspire your next creative masterpiece."
        className="px-5 text-lg text-white text-opacity-85 text-center " 
      ></Text>
      <Searchbox></Searchbox>
      <SearchSuggest></SearchSuggest>
    </div>
  );
};

export default MobileBanner;
