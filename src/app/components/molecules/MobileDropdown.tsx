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
      <div className="block lg:hidden">
        <Space wrap>
          <Select
            dropdownStyle={{ width: 200 }}
            className={className}
            style={{}}
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

export default MobileDropdown;
