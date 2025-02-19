import React from "react";
import ImageComponent from "../atoms/Image/ImageComponent";

type card = {
  imageSource: string;
  className: string;
};
const Card = ({ imageSource, className }: card) => {
  return (
    <div>
      <ImageComponent
        className={className}
        source={imageSource}
      ></ImageComponent>
    </div>
  );
};

export default Card;
