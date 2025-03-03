import React from "react";
import ImageComponent from "../../atoms/Image/ImageComponent";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import img from "../../../../../public/images/allcontributors.svg";
import cloudimg from "../../../../../public/images/clouds.svg";
const BecomeContributor = () => {
  return (
    <div className="bg-[#E5F8FF] lg:max-w-[1620px]  lg:mx-auto h-[375px] relative   flex flex-col justify-center items-center">
      <div className="absolute bottom-0 hidden lg:block">
        <ImageComponent
          className="hidden md:block w-[1620px]"
          source={cloudimg}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ImageComponent className="" source={img}/>
        <p className="my-4 lg:text-3xl text-lg  font-extrabold">
          Become A <span className="italic font-black">Contributor</span> Today
        </p>
        <Text
          child="Help us create the world's largest stock photo library, become a contributor and get paid for your assets."
          className="lg:px-80 px-4 text-center text-[#3C3C3C]"
        />
      </div>
      <AllPurposeButton
        className="font-medium flex relative bg-black  text-white border-black border-2 px-10 py-2 mt-10 rounded"
        child="Let's contribute"
      />
    </div>
  );
};

export default BecomeContributor;
