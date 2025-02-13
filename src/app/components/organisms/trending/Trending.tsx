import React from "react";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import Card from "../../molecules/Card";
import img1 from "../../../../../public/images/trendingimage1.svg";
import img2 from "../../../../../public/images/trendingimage2.svg";
import img3 from "../../../../../public/images/trendingimage3.svg";
import img4 from "../../../../../public/images/trendingimage4.svg";
const Trending = () => {
  return (
    <div className="my-24">
      <div className="flex justify-between items-center">
        <Text
          child="Discover Trending Categories"
          className="text-black font-bold text-4xl text-center"
        ></Text>
        <AllPurposeButton
          child="Explore all categories"
          className="text-sm border-black border p-3 rounded font-semibold"
        ></AllPurposeButton>
      </div>
      <div className="flex gap-7 mt-10">
        <div className="group">
          <Card imageSource={img1} className=""></Card>
          <Text
            child="Images"
            className="text-center -mt-11 invisible transition translate-y-12 text-white group-hover:visible group-hover:translate-y-0 "
          ></Text>
        </div>
        <div className="group">
          <Card imageSource={img2} className=""></Card>
          <Text
            child="AI Designs"
            className="text-center -mt-11 invisible transition translate-y-12 text-white group-hover:visible group-hover:translate-y-0 "
          ></Text>
        </div>
        <div className="group">
          <Card imageSource={img3} className=""></Card>
          <Text
            child="Paintings"
            className="text-center -mt-11 invisible transition translate-y-12 text-white group-hover:visible group-hover:translate-y-0 "
          ></Text>
        </div>
        <div className="group">
          <Card imageSource={img4} className=""></Card>
          <Text
            child="3D Models"
            className="text-center -mt-11 invisible transition translate-y-12 text-white group-hover:visible group-hover:translate-y-0 "
          ></Text>
        </div>
      </div>
    </div>
  );
};

export default Trending;
