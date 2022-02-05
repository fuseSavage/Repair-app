import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  SearchOutlined,
  FileSearchOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            เริ่มต้นใช้งาน
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            ลงทะเบียนร้านซ่อม
          </Menu.Item>
          <SubMenu key="sub1" icon={<TeamOutlined />} title="บริการลูกค้า">
            <Menu.Item key="8" icon={<SearchOutlined />}>
              ค้นหาร้านซ่อม
            </Menu.Item>
            <Menu.Item key="6" icon={<FileSearchOutlined />}>
              เช็คสถานะการซ่อม
            </Menu.Item>
            <Menu.Item key="7" icon={<CommentOutlined />}>
              แจ้งปัญหาการใช้งาน
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<CommentOutlined />}>
              แจ้งปัญหาการใช้งาน
            </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
