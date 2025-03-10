import React from "react";
import Text from "../../atoms/texts/Text";
import smartimg from "../../../../../public/images/smartCard.jpg";
import ImageComponent from "../../atoms/Image/ImageComponent";
import SmartParts from "../../molecules/SmartParts";
import smartimg1 from "../../../../../public/images/smartpart1.svg";
import smartimg2 from "../../../../../public/images/smartpart2.svg";
import smartimg3 from "../../../../../public/images/smartpart3.svg";
const Smart = () => {
  return (
    <div className="py-20 ">
      <Text
        child="Smart Art Suggestions  to Elevate Your Creative Projects"
        className="lg:px-[240px] px-4 mb-10 lg:text-4xl text-3xl font-bold text-center"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center   ">
        <div className="flex order-2 lg:order-1  mt-8 lg:mt-0 ">
          <ImageComponent
            source={smartimg}
            className="lg:px-0 px-2"
          />
        </div>
        <div className="space-y-8   order-1 lg:order-2 px-8 ">
          <SmartParts
            titletext="Personalized Art Suggestion"
            titleClass="text-sm font-bold mb-3 text-center lg:text-start "
            descriptiontext="Receive handpicked digital art suggestions based on your preferences and past downloads."
            descriptionClass="lg:text-start text-center text-xs text-gray-600 font-normal"
            imgclass="w-10 mb-4 mx-auto lg:mx-0"
            smartimg={smartimg1}
          />
          <SmartParts
            titletext="High Quality & Premium Stock Images"
            titleClass="lg:text-start text-center text-sm font-bold mb-3 "
            descriptiontext="Explore a diverse library of stunning premium stock images for all your creative endeavors."
            descriptionClass="lg:text-start text-center text-xs text-gray-600 font-normal"
            imgclass="w-10 mb-4 mx-auto lg:mx-0"
            smartimg={smartimg2}
          />
          <SmartParts
            titletext="Explore Trending Styles"
            titleClass="lg:text-start text-center text-sm font-bold mb-3"
            descriptiontext="Stay ahead of the curve with trending digital art styles and techniques in-demand artistic trends to elevate your creations"
            descriptionClass="lg:text-start text-center text-xs text-gray-600 font-normal"
            imgclass="mx-auto w-10 mb-4 lg:mx-0"
            smartimg={smartimg3}
          />
        </div>
      </div>
    </div>
  );
};

export default Smart;
