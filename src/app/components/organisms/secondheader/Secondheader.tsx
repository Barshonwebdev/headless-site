import React from 'react';
import Text from '../../atoms/texts/Text';
import AllPurposeButton from '../../atoms/buttons/AllPurposeButton';
import Width from '../../layout/Width';
import IconComponent from '../../atoms/icons/IconComponent';
import bookmark from "../../../../../public/icons/bookmark.svg";
import cart from "../../../../../public/icons/cart.svg";
const Secondheader = () => {
    return (
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
    );
};

export default Secondheader;