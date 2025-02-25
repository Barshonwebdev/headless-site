"use client";

import React from "react";
import { Select, Space } from "antd";

type dropdownStyles = {
  className: string;
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const DropdownComponent = ({ className }: dropdownStyles) => {
  return (
    <div className="">
      <div>
        <Space wrap>
          <Select
            defaultValue="Images"
            className={className}
            variant="borderless"
            onChange={handleChange}
            options={[
              { value: "Images", label: "Images" },
              { value: "Vectors", label: "Vectors" },
              { value: "Paintings", label: "Paintings" },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default DropdownComponent;
