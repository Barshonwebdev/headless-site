import React from "react";

type textProps = {
  text: string;
  size: string;
  weight: string;
  decoration: string;
};
const Text = ({ text, size, weight, decoration }: textProps) => {
  return (
    <div>
      <p className={`${size} ${weight} ${decoration}`}>{text}</p>
    </div>
  );
};

export default Text;
