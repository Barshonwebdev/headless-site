import Image, { StaticImageData } from "next/image";
import React from "react";

type Timage = {
  source: string | StaticImageData;
  className: string;
};

const ImageComponent = ({ source, className }: Timage) => {
  return (
    <div>
      <Image className={className} alt="" src={source} />
    </div>
  );
};

export default ImageComponent;
