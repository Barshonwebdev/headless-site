import React from "react";

const Mobile = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:hidden ">{children}</div>;
};

export default Mobile;
