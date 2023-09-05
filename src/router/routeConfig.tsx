import { ReactNode } from 'react';
import { DesktopOutlined } from '@ant-design/icons';

export interface RouteConfigInterface {
  key: string;
  icon?: ReactNode;
  name: string;
  children?: RouteConfigInterface[];
  showButton?: boolean;
}

const RouteConfig: RouteConfigInterface[] = [
  {
    key: '/dashboard/home',
    icon: <DesktopOutlined />,
    name: '首页',
  },
];

export default RouteConfig;
