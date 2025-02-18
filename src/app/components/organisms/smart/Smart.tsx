import React from "react";
import Text from "../../atoms/texts/Text";
import smartimg from "../../../../../public/images/smartCard.jpg";
import ImageComponent from "../../atoms/Image/ImageComponent";
import SmartParts from "../../molecules/SmartParts";
import smartimg1 from '../../../../../public/images/smartpart1.svg'
import smartimg2 from '../../../../../public/images/smartpart2.svg'
import smartimg3 from '../../../../../public/images/smartpart3.svg'
const Smart = () => {
  return (
    <div className="py-20 ">
      <Text
        child="Smart Art Suggestions  to Elevate Your Creative Projects"
        className="px-[440px] mb-10 text-4xl font-bold text-center"
      ></Text>
      <div className="flex items-center px-64 ">
        <div className="flex w-1/2 ">
          <ImageComponent
            source={smartimg}
            className=""
          ></ImageComponent>
        </div>
        <div className="space-y-8 px-20 w-1/2 ">
            <SmartParts titletext="Personalized Art Suggestion" titleClass="text-sm font-bold mb-3 " descriptiontext="Receive handpicked digital art suggestions based on your preferences and past downloads." descriptionClass="text-xs font-normal" imgclass="w-10 mb-4" smartimg={smartimg1}></SmartParts>
            <SmartParts titletext="High Quality & Premium Stock Images" titleClass="text-sm font-bold mb-3 " descriptiontext="Explore a diverse library of stunning premium stock images for all your creative endeavors." descriptionClass="text-xs font-normal" imgclass="w-10 mb-4" smartimg={smartimg2}></SmartParts>
            <SmartParts titletext="Explore Trending Styles" titleClass="text-sm font-bold mb-3" descriptiontext="Stay ahead of the curve with trending digital art styles and techniques in-demand artistic trends to elevate your creations" descriptionClass="text-xs font-normal" imgclass="w-10 mb-4" smartimg={smartimg3}></SmartParts>
            
        </div>
      </div>
    </div>
  );
};

export default Smart;
