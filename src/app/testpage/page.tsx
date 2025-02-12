import React from "react";
import ImageComponent from "../components/atoms/Image/ImageComponent";
import logo from "../../../public/images/Logo.svg";
import Width from "../components/layout/Width";
import Text from "../components/atoms/texts/Text";
import AllPurposeButton from "../components/atoms/buttons/AllPurposeButton";
import IconComponent from "../components/atoms/icons/IconComponent";
import bookmark from "../../../public/icons/bookmark.svg";
import cart from "../../../public/icons/cart.svg";
import DropdownComponent from "../components/molecules/Dropdown";
import glitter from "../../../public/icons/glitter.svg";
import bg from '../../../public/images/banner.svg'
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
              <div className="flex text-white items-center space-x-8">
                <DropdownComponent></DropdownComponent>
                <Text className=" " child="VIDEOS"></Text>
                <div className="flex items-center space-x-1">
                  <IconComponent
                    source={glitter}
                    className=""
                    width={20}
                    height={20}
                  ></IconComponent>
                  <Text className=" " child="AI GENERATED"></Text>
                </div>
                <Text className=" " child="BROWSE CONTENT"></Text>
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

      {/* banner  */}
      <div className="flex items-center bg-auto h-[484px]  flex-col justify-center" style={{ backgroundImage: `url(${bg.src})` }} >
        <Text child="Emotions through images." className="text-5xl text-center text-white font-extrabold"></Text>
        <Text child="Explore our curated collection of premium digital art to inspire your next creative masterpiece." className="text-xl text-white text-center font-normal"></Text>
      </div>
    </div>
  );
};

export default Test;
