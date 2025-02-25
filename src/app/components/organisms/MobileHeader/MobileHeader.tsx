"use client";

// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';
import React, { useState } from "react";
import { Drawer } from "antd";
import "./mobileheader.css";
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import IconComponent from "../../atoms/icons/IconComponent";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import hamburger from "../../../../../public/icons/hamburger.svg";
import mobilelogo from "../../../../../public/images/mobilelogo.svg";
import cart from "../../../../../public/icons/cart.svg";
import bookmark from "../../../../../public/icons/bookmark.svg";
import glitter from "../../../../../public/icons/glitter.svg";

import { CloseOutlined } from "@ant-design/icons";
import NavigateDropdown from "../../molecules/NavigationDropdown";
import Text from "../../atoms/texts/Text";
import Link from "next/link";
// import MobileDrawerMenu from "../../molecules/MobileDrawerMenu";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // const onClick: MenuProps['onClick'] = (e) => {
  //     console.log('click ', e);
  //   };
  return (
    <div className="bg-black ">
      <div className=" ">
        <Width>
          {" "}
          <div className="flex  items-center justify-between py-4">
            <Link href={"/"}>
              <ImageComponent className="" source={mobilelogo}></ImageComponent>
            </Link>
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

              <button onClick={showDrawer} className="">
                <IconComponent
                  className="mt-1"
                  width={20}
                  height={30}
                  source={hamburger}
                ></IconComponent>
              </button>
            </div>
          </div>
        </Width>
      </div>
      <Drawer
        style={{ backgroundColor: "#202020", color: "white" }}
        width={500}
        closeIcon={<span style={{ display: "none" }}></span>}
        title={
          <div className="flex p-4 items-center justify-between  bg-black">
            <Link href="">
              <ImageComponent className="" source={mobilelogo}></ImageComponent>
            </Link>
            <CloseOutlined onClick={onClose}></CloseOutlined>
          </div>
        }
        open={open}
      >
        <div>
          <div className="flex flex-col  text-white ">
            <Link href={""}>
              <Text
                className=" border-b p-4 border-white border-opacity-30"
                child="HOME"
              ></Text>
            </Link>
            <div className="border-b p-4 border-white border-opacity-30">
              <NavigateDropdown></NavigateDropdown>
            </div>
            <Link href={""}>
              <Text
                className="border-b p-4 border-white border-opacity-30 "
                child="VIDEOS"
              ></Text>
            </Link>
            <Link
              href=""
              className="flex p-4 space-x-2 items-center border-b border-white border-opacity-30 "
            >
              <IconComponent
                source={glitter}
                className=""
                width={20}
                height={20}
              ></IconComponent>
              <Text className=" " child="AI GENERATED"></Text>
            </Link>
            <Link href={""}>
              <Text
                className="border-b p-4 border-white border-opacity-30 "
                child="BROWSE CONTENT"
              ></Text>
            </Link>
            <Link
              href=""
              className="p-4 space-x-2 flex items-center border-b border-white border-opacity-30 "
            >
              <IconComponent
                source={bookmark}
                className=""
                width={20}
                height={20}
              ></IconComponent>
              <Text className=" " child="FAVORITES"></Text>
            </Link>
            <div className="p-4">
              <div className="bg-gradient-to-r from-purple-600 to-orange-400 rounded-3xl inline-block p-[2px]">
                <AllPurposeButton
                  className=" bg-[#202020] text-white font-bold rounded-3xl ps-4 pe-5 py-2"
                  child="Get Involved"
                ></AllPurposeButton>
              </div>
            </div>
            <div className="p-4 flex flex-col items-center border-t border-white border-opacity-30">
              <AllPurposeButton
                className="font-semibold mt-10  bg-stone-900 text-white border-white border-2 rounded  px-10 pt-1 pb-2"
                child="Sign up"
              ></AllPurposeButton>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href={""}>
              {" "}
              <Text
                className="underline mt-3 text-sm text-center "
                child="Contributor Account"
              ></Text>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
