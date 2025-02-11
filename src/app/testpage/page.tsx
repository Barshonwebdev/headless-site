import React from "react";
import ImageComponent from "../components/atoms/Image/ImageComponent";
import logo from "../../../public/images/Logo.svg";
import Width from "../components/layout/Width";
import Text from "../components/atoms/texts/Text";
import AllPurposeButton from "../components/atoms/buttons/AllPurposeButton";

const Test = () => {
  return (
    <div>
      <Width>
      <div className="my-[16px]">
      <div className="flex items-center justify-between">
        <ImageComponent className="" source={logo}></ImageComponent>
        <div className="flex space-x-8 items-center">
          <Text
            className="underline text-sm"
            child="Contributor Account"
          ></Text>
          <AllPurposeButton
            className="font-medium bg-white text-black border-black border-2"
            child="Sign Up"
          ></AllPurposeButton>
          <AllPurposeButton
            className="font-medium bg-black text-white border-black border-2"
            child="Log in"
          ></AllPurposeButton>
        </div>
      </div>
    </div>
      </Width>
    </div>
  );
};

export default Test;
