import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  source: string | StaticImageData;
  className:string
};

const ImageComponent = ({ source,className }: Props) => {
  return (
    <div>
      <Image  className={`${className}`} alt="" src={source}></Image>
    </div>
  );
};

export default ImageComponent;
