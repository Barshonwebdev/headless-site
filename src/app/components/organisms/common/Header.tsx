import React from "react";
import ImageComponent from "../../atoms/Image/ImageComponent";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import logo from "../../../../../public/images/Logo.svg";

const Header = () => {
  return (
    <div className="my-[16px]">
      <div className="flex items-center justify-between">
        <ImageComponent source={logo}></ImageComponent>
        <div className="flex space-x-8 items-center">
          <Text
            decoration="underline"
            weight="font-normal"
            size="text-sm"
            text="Contributor Account"
          ></Text>
          <AllPurposeButton
            fontweight="font-medium"
            bgcolor="bg-white"
            textcolor="text-black"
            border="border-black border-2"
            text="Sign Up"
          ></AllPurposeButton>
          <AllPurposeButton
            fontweight="font-medium"
            bgcolor="bg-black"
            textcolor="text-white"
            border="border-black border-2"
            text="Log in"
          ></AllPurposeButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
