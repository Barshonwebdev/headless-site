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
        <div className="flex items-center justify-between">
          <ImageComponent source={logo}></ImageComponent>
          <div className="flex space-x-8 items-center">
            <Text
              decoration="underline"
              weight="font-semibold"
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
      </Width>
    </div>
  );
};

export default Test;
