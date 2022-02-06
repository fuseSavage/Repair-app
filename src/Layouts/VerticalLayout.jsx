import React from 'react'

import { Layout } from 'antd'

import HeaderTap from "./tabHeader";
import MenuList from "./menulist";

//import
// import Login from "../view/Login";
// import RegistionPage from "../view/Registion";



const { Content, Footer } = Layout

export default function VerticalLayout(props) {
  const { children } = props


  return (
      <>
        <HeaderTap
          className="site-layout-background"
          style={{
            padding: 0,
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        />

        <Layout
          style={{ minHeight: "93vh", maxHeight: "90vh", paddingTop: "0.5vh" }}
        >
          <MenuList />

          <Layout className="site-layout">
            <Content style={{ margin: "1vh 1vh" }}>
              <div
                className="site-layout-background"
                style={{ mixHeight: 360, overflowY: "scroll" }}
              >
                {children}
              </div>
            </Content>
            <Footer className="footer">
              <p>Final Project ©2021 Developed by Chaiwat Singkibut</p>
            </Footer>
          </Layout>
        </Layout>
      </>
    );
}