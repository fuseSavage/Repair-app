import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  UserAddOutlined,
  TeamOutlined,
  FileSearchOutlined,
  CommentOutlined,
  SettingOutlined,
  LogoutOutlined,
  DollarOutlined,
} from "@ant-design/icons";

// import services
import { sendLogout } from "../../services";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleLogout = () => {
    // console.log("test Logout");
    sendLogout();
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  return (
    <>
      <div
        style={{
          mixHeight: 360,
          backgroundColor: "#001529",
          overflowY: "scroll",
        }}
      >
        <Sider
          theme="dark"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1", "sub2"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to={"/dashboard"}>หน้าแรก</Link>
            </Menu.Item>

            <SubMenu
              key="sub1"
              icon={<UnorderedListOutlined />}
              title="จัดการงานซ่อม"
            >
              <Menu.Item key="2" icon={<OrderedListOutlined />}>
                <Link to={"/dashboard/all-repair"}>รายการซ่อม</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                <Link to={"/dashboard/add-detail"}>เพิ่มการซ่อม</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<ToolOutlined />}>
                <Link to={"/dashboard/status"}>สถานะการซ่อม</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="จัดการลูกค้า">
              <Menu.Item key="5" icon={<UserAddOutlined />}>
                <Link to={"/dashboard/add-member"}>ลงทะเบียนลูกค้า</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FileSearchOutlined />}>
                <Link to={"/dashboard/search-repair"}>ค้นหาการซ่อม</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                <Link to={"/dashboard/search-member"}>ลูกค้าของฉัน</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="10" icon={<DollarOutlined />}>
              <Link to={"/dashboard/payment"}>การชำระเงิน</Link>
            </Menu.Item>

            <Menu.Item key="8" icon={<SettingOutlined />}>
              <Link to={"/dashboard/setting"}>ตั้งค่าบัญชี</Link>
            </Menu.Item>

            <Menu.Item key="9" icon={<CommentOutlined />}>
              <Link to={"/dashboard/reported"}>แจ้งปัญหาการใช้งาน</Link>
            </Menu.Item>

            <Menu.Item
              onClick={handleLogout}
              key="11"
              icon={<LogoutOutlined />}
            >
              ออกจากระบบ
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    </>
  );
}
