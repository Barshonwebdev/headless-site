import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];



const MobileDrawerMenu = () => {
  const [current, setCurrent] = useState('mail');
  const [currentName, setCurrentName] = useState('IMAGES');

  const items: MenuItem[] = [
  
    {
      label: currentName,
      key: 'SubMenu',
      icon: <DownOutlined />,
      children: [
        {
          type: 'group',
          
          children: [
            { label: 'IMAGES', key: 'IMAGES' },
            { label: 'VECTORS', key: 'VECTORS' },
            { label: 'PAINTINGS', key: 'PAINTINGS' },
          ],
        }
      ],
    }
    
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setCurrentName(e.key)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MobileDrawerMenu;