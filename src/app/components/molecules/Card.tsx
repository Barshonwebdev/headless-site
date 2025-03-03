import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";
import Text from "../atoms/texts/Text";

type Tcard = {
  imageSource: string;
  imgclassName: string;
  category: string;
  title: string;
  duration: string;
  className: string;
  categoryClass: string;
  titleClass: string;
  durationClass: string;
};
const Card = ({
  imageSource,
  imgclassName,
  className,
  category,
  title,
  duration,
  categoryClass,
  durationClass,
  titleClass,
}: Tcard) => {
  return (
    <div>
      <ImageComponent
        className={imgclassName}
        source={imageSource}
      ></ImageComponent>
      <div className={className}>
        <Text child={category} className={categoryClass}></Text>
        <Text child={title} className={titleClass}></Text>
        <Text child={duration} className={durationClass}></Text>
      </div>
    </div>
  );
};

export default Card;
