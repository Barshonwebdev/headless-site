import React from "react";
import ImageComponent from "../../atoms/Image/ImageComponent";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import logo from "../../../../../public/images/Logo.svg";
import Link from "next/link"; 

const Header = () => {
  return (
    <div className="my-[16px] lg:max-w-[1620px] mx-auto">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <ImageComponent className="" source={logo}/>
        </Link>
        <div className="flex space-x-8 items-center">
          <Link href="">
            <Text
              className="underline text-sm"
              child="Contributor Account"
            />
          </Link>
          <AllPurposeButton
            className="font-medium bg-white text-black border-black border-2 px-8 py-3 rounded"
            child="Sign Up"
          />
          <AllPurposeButton
            className="font-medium bg-black text-white border-black border-2 px-8 py-3 rounded"
            child="Log in"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
