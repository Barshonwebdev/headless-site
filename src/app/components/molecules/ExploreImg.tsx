import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";
import Text from "../atoms/texts/Text";

type TexploreImgType = {
  imgclassname: string;
  imgsrc: string;
  txtChild: string;
  textClassName: string;
  premiumimg: string;
  premiumclass: string;
  bookmarkimg: string;
  bookmarkclass: string;
  arrowimg: string;
  arrowclass: string;
};

const ExploreImg = ({
  imgclassname,
  imgsrc,
  textClassName,
  txtChild,
  arrowclass,
  bookmarkclass,
  bookmarkimg,
  arrowimg,
  premiumclass,
  premiumimg,
}: TexploreImgType) => {
  return (
    <div className="relative group ">
      <ImageComponent className={imgclassname} source={imgsrc} />
      <div className="md:invisible group-hover:visible opacity-100 group-hover:opacity-100  md:opacity-0 transition ease-linear ">
        <button className="absolute top-4 left-4">
          <ImageComponent className={premiumclass} source={premiumimg} />
        </button>
        <button className="absolute top-4 right-4">
          <ImageComponent className={bookmarkclass} source={bookmarkimg} />
        </button>

        <button className="absolute invisible group-hover:visible bottom-0 top-0 left-0 right-0 flex justify-center items-center ">
          <ImageComponent className={arrowclass} source={arrowimg} />
        </button>
        <div className="absolute bottom-4 left-4 bg-gray-900 px-3 bg-opacity-60 rounded py-1">
          <Text className={textClassName} child={txtChild} />
        </div>
      </div>
    </div>
  );
};

export default ExploreImg;
