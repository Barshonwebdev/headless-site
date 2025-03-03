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
      <ImageComponent className={imgclass} source={smartimg}/>
      <Text child={titletext} className={titleClass}/>
      <Text child={descriptiontext} className={descriptionClass}/>
    </div>
  );
};

export default SmartParts;
