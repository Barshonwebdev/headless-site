import React from "react";
import "./explore.css";
import Text from "../../atoms/texts/Text";
import ExploreImg from "../../molecules/ExploreImg";
import img1 from "../../../../../public/images/sky.svg";
import img3 from "../../../../../public/images/digital.svg";
import img4 from "../../../../../public/images/sea.svg";
import img5 from "../../../../../public/images/food.svg";
import img6 from "../../../../../public/images/book.svg";
import img7 from "../../../../../public/images/ball.svg";
import img8 from "../../../../../public/images/galaxy.svg";
import AllPurposeButton from "../../atoms/buttons/AllPurposeButton";
const Explore = () => {
  return (
    <div className=" ">
      
      {/* desktop view  */}
      <div className=" text-black bgcolor py-20">
        <Text
          className="text-4xl text-center font-bold mb-10"
          child="Explore A Vast Collection of Digital Art"
        ></Text>
        <div className="grid grid-cols-4">
          <ExploreImg imgsrc={img1} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img8} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img3} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img4} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img5} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img6} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img7} imgclassname=""></ExploreImg>
          <ExploreImg imgsrc={img8} imgclassname=""></ExploreImg>
        </div>
        <div>
          <AllPurposeButton
            className="font-medium flex mx-auto bg-black text-white border-black border-2 px-10 py-2 mt-10 rounded"
            child="Browse more"
          ></AllPurposeButton>
        </div>
      </div>
    </div>
  );
};

export default Explore;
