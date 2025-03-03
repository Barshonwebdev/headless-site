import React from "react";

type TtextType = {
  className: string;
  child: string;
};

const Text = ({ className, child }: TtextType) => {
  return <p className={className}>{child}</p>;
};

export default Text;
