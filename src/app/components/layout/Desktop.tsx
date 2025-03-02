import React from "react";

const Desktop = ({ children }: { children: React.ReactNode }) => {
  return <div className="hidden lg:block">{children}</div>;
};

export default Desktop;
