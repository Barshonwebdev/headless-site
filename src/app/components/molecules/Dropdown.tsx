"use client";

import React from "react";
import { Select, Space } from "antd";

type dropdownColor={
  className:string
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const DropdownComponent = ({className}:dropdownColor) => {
  return (
    <div >
      <Space wrap>
        <Select
          defaultValue="IMAGES"
          style={{ width: 120 }}
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
