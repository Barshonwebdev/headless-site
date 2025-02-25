import React from "react";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import Width from "../../layout/Width";
import IconComponent from "../../atoms/icons/IconComponent";
import bookmark from "../../../../../public/icons/bookmark.svg";
import cart from "../../../../../public/icons/cart.svg";
import glitter from "../../../../../public/icons/glitter.svg";
import NavigateDropdown from "../../molecules/NavigationDropdown";
import Link from "next/link";
const Secondheader = () => {
  return (
    <div className="bg-black">
      <div className=" ">
        <Width>
          {" "}
          <div className="flex  items-center justify-between py-4">
            <div className="flex text-white items-center space-x-8">
              <NavigateDropdown></NavigateDropdown>
              <Link href={""}>
                <Text className=" " child="VIDEOS"></Text>
              </Link>
              <Link href={""} className="flex items-center space-x-1">
                <IconComponent
                  source={glitter}
                  className=""
                  width={20}
                  height={20}
                ></IconComponent>
                <Text className=" " child="AI GENERATED"></Text>
              </Link>
              <Link href={""}>
                <Text className=" " child="BROWSE CONTENT"></Text>
              </Link>
            </div>
            <div className="flex space-x-9 items-center">
              <span className="bg-gradient-to-r from-purple-600 to-orange-400 rounded-3xl p-[2px]"><AllPurposeButton
                className="font-medium bg-black text-white rounded-3xl px-4 py-2"
                child="Get Involved"
              ></AllPurposeButton></span>
              <Link href={""}>
                <IconComponent
                  className=""
                  width={30}
                  height={30}
                  source={bookmark}
                ></IconComponent>
              </Link>
              <Link href={""}>
                <IconComponent
                  className=""
                  width={25}
                  height={30}
                  source={cart}
                ></IconComponent>
              </Link>
            </div>
          </div>
        </Width>
      </div>
    </div>
  );
};

export default Secondheader;
