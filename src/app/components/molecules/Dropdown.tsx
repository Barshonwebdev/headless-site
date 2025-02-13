"use client";

import React from "react";
import { Select, Space } from "antd";

type dropdownStyles={
  className:string
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const DropdownComponent = ({className}:dropdownStyles) => {
  return (
    <div >
      <Space wrap>
        <Select
          defaultValue="IMAGES"
          
          className={className}
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
  );
};

export default DropdownComponent;
