'use client'

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const onClick: MenuProps['onClick'] = () => {
  
};

const items: MenuProps['items'] = [
  {
    label: 'IMAGES',
    key: '1',
  },
  {
    label: 'PAINTINGS',
    key: '2',
  },
  {
    label: 'VECTORS',
    key: '3',
  },
];

const NavigateDropdown= () => (
  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        IMAGES
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default NavigateDropdown;