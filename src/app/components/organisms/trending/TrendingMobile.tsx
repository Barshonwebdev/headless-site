import React from "react";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import img1 from "../../../../../public/images/trendingimage1.svg";
import img2 from "../../../../../public/images/trendingimage2.svg";
import img3 from "../../../../../public/images/trendingimage3.svg";
import img4 from "../../../../../public/images/trendingimage4.svg";
import ImageComponent from "../../atoms/Image/ImageComponent";
const TrendingMobile = () => {
  return (
    <div className="my-24">
      <div className="mb-8"> 
        <Text
          child="Discover Trending Categories"
          className="text-black font-bold text-3xl text-center"
        ></Text>
        
      </div>
      <div className="grid gap-x-4 gap-y-10 grid-cols-2 mt-5 mx-4">
        <div className="group">
        <ImageComponent source={img1} className=""></ImageComponent>
          <Text
          className="-mt-9 text-white text-center"
            child="Images"
          ></Text>
        </div>
        <div className="group">
        <ImageComponent source={img2} className=""></ImageComponent>
          <Text
          className="-mt-9 text-white text-center"
            child="AI Designs"
          ></Text>
        </div>
        <div className="group">
        <ImageComponent source={img3} className=""></ImageComponent>
          <Text
          className="-mt-9 text-white text-center"
            child="Paintings"
          ></Text>
        </div>
        <div className="group">
        <ImageComponent source={img4} className=""></ImageComponent>
          <Text
          className="-mt-9 text-white text-center"
            child="3D Models"
          ></Text>
        </div>
        
      </div>
      <AllPurposeButton
          child="Explore all categories"
          className="text-sm flex mx-auto mt-8 border-black border p-3 rounded font-semibold"
        ></AllPurposeButton>
    </div>
  );
};

export default TrendingMobile;
