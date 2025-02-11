import Image from "next/image";
import React from "react";

type Props = {
  source: string;
};

const ImageComponent = ({ source }: Props) => {
  return (
    <div>
      <Image className="" alt="" src={source}></Image>
    </div>
  );
};

export default ImageComponent;
