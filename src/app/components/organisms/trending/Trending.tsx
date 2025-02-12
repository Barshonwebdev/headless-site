import React from "react";
import Text from "../../atoms/texts/Text";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
import Card from "../../molecules/Card";
import img1 from '../../../../../public/images/trendingimage1.svg'
const Trending = () => {
  return (
    <div className="my-24">
      <div className="flex justify-between items-center">
        <Text child="Discover Trending Categories" className="text-black font-bold text-4xl text-center"></Text>
        <AllPurposeButton child="Explore all categories" className="text-sm border-black border p-3 rounded font-semibold"></AllPurposeButton>
      </div>
      <div>
        <Card imageSource={img1} className=""></Card>
        <Card imageSource='' className=""></Card>
        <Card imageSource="" className=""></Card>
        <Card imageSource="" className=""></Card>
      </div>
    </div>
  );
};

export default Trending;
