import React from "react";
import ImageComponent from "../components/atoms/Image/ImageComponent";
import logo from "../../../public/images/Logo.svg";
import Width from "../components/layout/Width";
import Text from "../components/atoms/texts/Text";
import AllPurposeButton from "../components/atoms/buttons/AllPurposeButton";
import IconComponent from "../components/atoms/icons/IconComponent";
import bookmark from "../../../public/icons/bookmark.svg";
import cart from "../../../public/icons/cart.svg";

const Test = () => {
  return (
    <div>
      {/* first header  */}
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
                className="font-medium bg-white text-black border-black border-2 px-8 py-3 rounded"
                child="Sign Up"
              ></AllPurposeButton>
              <AllPurposeButton
                className="font-medium bg-black text-white border-black border-2 px-8 py-3 rounded"
                child="Log in"
              ></AllPurposeButton>
            </div>
          </div>
        </div>
      </Width>

      {/* second header  */}
      <div className="bg-black">
        <div className=" ">
          <Width>
            {" "}
            <div className="flex  items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                <Text className=" text-white" child="IMAGES"></Text>
                <Text className=" text-white" child="VIDEOS"></Text>
                <Text className=" text-white" child="AI GENERATED"></Text>
                <Text className=" text-white" child="BROWSE CONTENT"></Text>
              </div>

              <div className="flex space-x-9">
                <AllPurposeButton
                  className="font-medium bg-black text-white border-white border-2 rounded-3xl px-4 py-2"
                  child="Get Involved"
                ></AllPurposeButton>
                <IconComponent
                  className=""
                  width={30}
                  height={30}
                  source={bookmark}
                ></IconComponent>
                <IconComponent
                  className=""
                  width={30}
                  height={30}
                  source={cart}
                ></IconComponent>
              </div>
            </div>
          </Width>
        </div>
      </div>
    </div>
  );
};

export default Test;
