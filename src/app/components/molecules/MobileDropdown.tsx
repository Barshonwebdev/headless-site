"use client";

import React from "react";
import { Select, Space } from "antd";

type dropdownStyles = {
  className: string;
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const MobileDropdown = ({ className }: dropdownStyles) => {
  return (
    <div className="">
     
      <div className="block md:hidden">
      <Space wrap>
          <Select 
          dropdownStyle={{width:200}}
            className={className}
            style={{}}
            variant="borderless"
            onChange={handleChange}
            options={[
              { value: "IMAGES", label: "IMAGES" },
              { value: "VECTORS", label: "VECTORS" },
              { value: "PAINTINGS", label: "PAINTINGS" },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default MobileDropdown;
