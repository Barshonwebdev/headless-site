import Image from "next/image";
import React from "react";

type Props = {
  source: string;
  className: string;
};

const SVGComponent = ({ source, className }: Props) => {
  return (
    <div>
      <Image className={`${className}`} alt="" src={source}></Image>
    </div>
  );
};

export default SVGComponent;
