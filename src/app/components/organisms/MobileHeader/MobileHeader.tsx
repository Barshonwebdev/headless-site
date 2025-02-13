import React from "react";
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import IconComponent from "../../atoms/icons/IconComponent";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import hamburger from "../../../../../public/icons/hamburger.svg";
import mobilelogo from "../../../../../public/images/mobilelogo.svg";
import cart from "../../../../../public/icons/cart.svg";

const MobileHeader = () => {
  return (
    <div className="bg-black ">
      <div className=" ">
        <Width>
          {" "}
          <div className="flex  items-center justify-between py-4">
            <ImageComponent className="" source={mobilelogo}></ImageComponent>
            <div className="flex space-x-4 ml-2">
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
  );
};

export default MobileHeader;
