import { FC, useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Avatar, Button, Card, Dropdown, Layout, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';

const { Sider, Content } = Layout;

import { RouteConfigInterface } from '../../router';
import RouteConfig from '../../router/routeConfig';

import styles from './index.module.scss';

import logoUrl from '/src/assets/logo.svg';

type MenuItem = Required<MenuProps>['items'][number];

const DashboardLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const userName = 'xx';

  const renderMenuList = (v: RouteConfigInterface[]): MenuItem[] => {
    return v.map((v1) => {
      if (v1.children) {
        return {
          key: v1.key,
          icon: v1.icon,
          children: renderMenuList(v1.children),
          label: v1.name,
        };
      }
      return {
        key: v1.key,
        icon: v1.icon,
        label: v1.name,
      };
    });
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    alert(e.key);
  };

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsed={collapsed} collapsible={true}>
        <div className={styles.logo}>
          {!collapsed ? (
            <span className={styles.icon}>
              <img src={logoUrl} alt="" />
            </span>
          ) : (
            <span>
              <HomeOutlined />
            </span>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          className={styles.menu}
          items={renderMenuList(RouteConfig)}
        />
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={styles.collapsedBtn}
          />

          <div className={styles.headerRight} key="logoutDiv">
            <Dropdown
              menu={{
                items: [
                  {
                    label: 'logout',
                    key: '1',
                  },
                ],
                onClick: handleMenuClick,
              }}
            >
              <div
                style={{ height: 48, lineHeight: '48px' }}
                onClick={(e) => e.preventDefault()}
                key="logoutItem"
              >
                <Avatar style={{ marginRight: 8 }} shape="circle" icon={<UserOutlined />} />
                <span>{userName}</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className={styles.content}>
          <Card className={styles.contentWrap}>
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
