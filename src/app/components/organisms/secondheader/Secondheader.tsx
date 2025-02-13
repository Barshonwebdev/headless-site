import React from 'react';
import Text from '../../atoms/texts/Text';
import AllPurposeButton from '../../atoms/buttons/AllPurposeButton';
import Width from '../../layout/Width';
import IconComponent from '../../atoms/icons/IconComponent';
import bookmark from "../../../../../public/icons/bookmark.svg";
import cart from "../../../../../public/icons/cart.svg";
import DropdownComponent from '../../molecules/Dropdown';
import glitter from '../../../../../public/icons/glitter.svg'
const Secondheader = () => {
    return (
      <div className="bg-black">
        <div className=" ">
          <Width>
            {" "}
            <div className="flex  items-center justify-between py-4">
              <div className="flex text-white items-center space-x-8">
                <DropdownComponent className='text-white'></DropdownComponent>
                <Text className=" " child="VIDEOS"></Text>
                <div className="flex items-center space-x-1">
                <IconComponent source={glitter} className=""
                  width={20}
                  height={20} ></IconComponent>
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
    );
};

export default Secondheader;