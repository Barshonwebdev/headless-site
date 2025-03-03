import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";
import Text from "../atoms/texts/Text";

type TinspirationType = {
  img1: string;
  img2: string;
  img3: string;
  categoryText: string;
};
const InspirationCard = ({
  img1,
  img2,
  img3,
  categoryText,
}: TinspirationType) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <ImageComponent className=" " source={img1} />
      <div className="flex gap-2">
        <ImageComponent className="w-1/2 " source={img2} />
        <ImageComponent className="w-1/2 " source={img3} />
      </div>
      <div>
        <Text className="text-base font-bold mt-4" child={categoryText} />
      </div>
      <Text
        child="60 Assets"
        className=" text-sm bg-[#202020] inline text-white py-1 px-3 font-thin rounded-sm absolute top-6"
      />
    </div>
  );
};

export default InspirationCard;
