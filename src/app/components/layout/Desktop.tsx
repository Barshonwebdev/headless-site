import React from "react";

const Desktop = ({ children }: { children: React.ReactNode }) => {
  return <div className="hidden md:block">{children}</div>;
};

export default Desktop;
