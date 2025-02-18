"use client";

// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';
import React, { useState } from "react";
import { Drawer } from "antd";
import './mobileheader.css'
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import IconComponent from "../../atoms/icons/IconComponent";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import hamburger from "../../../../../public/icons/hamburger.svg";
import mobilelogo from "../../../../../public/images/mobilelogo.svg";
import cart from "../../../../../public/icons/cart.svg";
import {
  CloseOutlined
} from '@ant-design/icons';

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
        style={{ backgroundColor: "#202020", color:"white" }}
        width={500}
        headerStyle={{position:"relative"}}
        closeIcon={<span style={{display:'none'}}></span>}
        title={
          <div className="flex p-4 items-center justify-between  bg-black">
            <ImageComponent className="" source={mobilelogo}></ImageComponent>
            <CloseOutlined onClick={onClose}></CloseOutlined>
          </div>
        }
        
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
