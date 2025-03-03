import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";
import Text from "../atoms/texts/Text";

type TsmartType = {
  smartimg: string;
  imgclass: string;
  titleClass: string;
  descriptionClass: string;
  titletext: string;
  descriptiontext: string;
};
const SmartParts = ({
  smartimg,
  imgclass,
  titleClass,
  descriptionClass,
  descriptiontext,
  titletext,
}: TsmartType) => {
  return (
    <div className="">
      <ImageComponent className={imgclass} source={smartimg}></ImageComponent>
      <Text child={titletext} className={titleClass}></Text>
      <Text child={descriptiontext} className={descriptionClass}></Text>
    </div>
  );
};

export default SmartParts;
