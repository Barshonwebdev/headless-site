import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";
import Text from "../atoms/texts/Text";
import profileimg from "../../../../public/images/profile.svg";
type TcontributorImgType = {
  imgclassname: string;
  imgsrc: string;
  nametxtChild: string;
  nameClassName: string;
  arrowimg: string;
  arrowclass: string;
};

const ContributorImg = ({
  imgclassname,
  imgsrc,
  nametxtChild,
  nameClassName,
  arrowclass,
  arrowimg,
}: TcontributorImgType) => {
  return (
    <div className="relative group">
      <ImageComponent className={imgclassname} source={imgsrc} />
      <div className="md:invisible group-hover:visible opacity-100 group-hover:opacity-100  md:opacity-0 transition ease-linear ">
        <button className="absolute invisible group-hover:visible bottom-0 top-0 left-0 right-0 flex justify-center items-center ">
          <ImageComponent className={arrowclass} source={arrowimg} />
        </button>
        <button className="absolute bottom-4 lg:left-4 flex px-3 bg-opacity-60 rounded py-1 items-center space-x-2 text-white">
          <ImageComponent className=" w-7 lg:w-10" source={profileimg} />
          <Text className={nameClassName} child={nametxtChild} />
        </button>
      </div>
    </div>
  );
};

export default ContributorImg;
