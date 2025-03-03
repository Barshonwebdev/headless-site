import React, { ReactNode } from "react";

type Tbutton = {
  className: string;
  child: string | ReactNode;
};
const AllPurposeButton = ({ className, child }: Tbutton) => {
  return <button className={className}>{child}</button>;
};

export default AllPurposeButton;
