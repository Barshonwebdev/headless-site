import React from "react";
import ImageComponent from "../components/atoms/Image/ImageComponent";
import logo from "../../../public/images/Logo.svg";
import mobilelogo from "../../../public/images/mobilelogo.svg";
import Width from "../components/layout/Width";
import Text from "../components/atoms/texts/Text";
import AllPurposeButton from "../components/atoms/buttons/AllPurposeButton";
import IconComponent from "../components/atoms/icons/IconComponent";
import bookmark from "../../../public/icons/bookmark.svg";
import cart from "../../../public/icons/cart.svg";
import hamburger from "../../../public/icons/hamburger.svg";
import glitter from "../../../public/icons/glitter.svg";
import bg from "../../../public/images/banner.svg";
import mobilebg from '../../../public/images/mobilebanner.svg'
import Searchbox from "../components/molecules/Searchbox";
import SearchSuggest from "../components/molecules/SearchSuggest";
import Trending from "../components/organisms/trending/Trending";
import NavigateDropdown from "../components/molecules/NavigationDropdown";
import Desktop from "../components/layout/Desktop";
import Mobile from "../components/layout/Mobile";
const Test = () => {
  return (
    <div>
      {/* first header  */}
      <Width>
        <div className="my-[16px] hidden md:block">
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
                className="font-medium  bg-black text-white border-black border-2 px-8 py-3 rounded"
                child="Log in"
              ></AllPurposeButton>
            </div>
          </div>
        </div>
      </Width>

      {/* second header  */}
      <div className="bg-black hidden md:block">
        <div className=" ">
          <Width>
            {" "}
            <div className="flex  items-center justify-between py-4">
              <div className="flex text-white items-center space-x-8">
                <NavigateDropdown></NavigateDropdown>
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

      {/* mobile header  */}
      <div className="bg-black md:hidden">
        <div className=" ">
          <Width>
            {" "}
            <div className="flex  items-center justify-between py-4">
              {/* <div className="flex text-white items-center space-x-8">
                <NavigateDropdown></NavigateDropdown>
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
              </div> */}
              <ImageComponent className="" source={mobilelogo}></ImageComponent>
              <div className="flex space-x-4 ml-2">
                {/* <AllPurposeButton
                  className="font-medium bg-black text-white border-white border-2 rounded-3xl px-4 py-2"
                  child="Get Involved"
                ></AllPurposeButton> */}
                {/* <IconComponent
                  className=""
                  width={30}
                  height={30}
                  source={bookmark}
                ></IconComponent> */}
                <button>
                <IconComponent
                  className=""
                  width={20}
                  height={30}
                  source={cart}
                ></IconComponent>
                </button>
                <AllPurposeButton
                className="font-medium text-sm bg-black text-white border-white border-2 py-1 px-4  rounded"
                child="Log in"
              ></AllPurposeButton>
             <button>
             <IconComponent
                  className=""
                  width={20}
                  height={30}
                  source={hamburger}
                  
                ></IconComponent>
             </button>
              </div>
            </div>
          </Width>
        </div>
      </div>
      

      {/* banner  */}
      <Desktop><div
        className="flex space-y-8 items-center bg-cover h-[484px]  flex-col justify-center"
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
        {/* searchbox  */}
        <Searchbox></Searchbox>
        <SearchSuggest></SearchSuggest>
      </div></Desktop>

      {/* mobile banner  */}

      <Mobile><div className="flex space-y-8 items-center bg-cover h-[484px]  flex-col justify-center" style={{ backgroundImage: `url(${mobilebg.src})` }} >
      <Text child="Emotions through images." className="text-5xl text-center text-white font-extrabold"></Text>
      <Text
        child="Explore our curated collection of premium digital art to inspire your next creative masterpiece."
        className="text-xl text-white text-center font-normal"
      ></Text>
      <Searchbox></Searchbox>
      <SearchSuggest></SearchSuggest>
    </div></Mobile>

      {/* trending  */}
      <Width>
        <Trending></Trending>
      </Width>
    </div>
  );
};

export default Test;
