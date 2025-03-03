import Image from "next/image";
import React from "react";

type icon = {
  className: string;
  source: string;
  width: number;
  height: number;
};
const IconComponent = ({ className, source, width, height }: icon) => {
  return (
    <Image
      height={height}
      width={width}
      src={source}
      alt=""
      className={className}
    />
  );
};

export default IconComponent;
