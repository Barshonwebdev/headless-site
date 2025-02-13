'use client'


import React from 'react';
// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';
import Width from "../../layout/Width";
import ImageComponent from "../../atoms/Image/ImageComponent";
import IconComponent from "../../atoms/icons/IconComponent";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import hamburger from "../../../../../public/icons/hamburger.svg";
import mobilelogo from "../../../../../public/images/mobilelogo.svg";
import cart from "../../../../../public/icons/cart.svg";


// type MenuItem = Required<MenuProps>['items'][number];


// const items: MenuItem[] = [
//   {
//     key: 'sub1',
//     icon: <IconComponent source={hamburger} className='' height={10} width={10} />,
//     children: [
//       {
//         key: 'g1',
//         label: 'Item 1',
//         type: 'group',
//         children: [
//           { key: '1', label: 'Option 1' },
//           { key: '2', label: 'Option 2' },
//         ],
//       },
//     ],
//   },
  
// ];
const MobileHeader = () => {
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
              <button>
                {/* <Menu
                      onClick={onClick}
                      style={{ width: 256 }}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                      items={items}
                    /> */}
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
