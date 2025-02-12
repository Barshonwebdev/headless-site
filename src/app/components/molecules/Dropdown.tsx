'use client'

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space,theme } from 'antd';
const { useToken } = theme;

const items: MenuProps['items'] = [
  {
    label: 'VECTORS',
    key: '1',
  },
  {
    label: 'PAINTINGS',
    key: '2',
  },
 
];


const DropdownComponent = () =>{ 
    const { token } = useToken();
    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorText,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
      };
      const menuStyle: React.CSSProperties = {
        color:'white'
      };
    return(
  <Dropdown dropdownRender={(menu) => (
    <div style={contentStyle}>
      {React.cloneElement(
        menu as React.ReactElement<{
          style: React.CSSProperties;
        }>,
        { style: menuStyle }
      )}
      
    </div>
  )}  menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        IMAGES
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
); }

export default DropdownComponent;