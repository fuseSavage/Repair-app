import { React } from "react";
import { Layout } from "antd";

import HeaderTap from "../../../Layouts/tabHeader";
import MenuList from "../../../Layouts/menulist";

const { Content, Footer } = Layout;

export default function Ecommerce() {
  return (
    <>
      <HeaderTap className="site-layout-background" style={{ padding: 0 }} />
      <Layout style={{ minHeight: "100vh", paddingTop: "2vh" }}>
        <MenuList />

        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
