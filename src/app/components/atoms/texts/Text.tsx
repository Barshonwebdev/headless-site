import React from "react";

type textType = {
  className: string;
  child: string;
};

const Text = ({ className, child }: textType) => {
  return (
    <div>
      <p className={`${className}`}>{child}</p>
    </div>
  );
};

export default Text;
