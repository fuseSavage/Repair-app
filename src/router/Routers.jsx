import { BrowserRouter as AppRouter, Route, Switch } from "react-router-dom";

// import Ecommerce from "../view/Dashboards/ecommerce";

import HeaderTap from "../Layouts/tabHeader";
import MenuList from "../Layouts/menulist";

//import
import Login from "../view/Login";
// import Home from "../view/Homes/index";
import Home from "../view/Homes/index";
import RegistionPage from "../view/Registion";

import { Layout } from "antd";

const { Content, Footer } = Layout;

export default function Routers() {
  return (
    <>
      <HeaderTap
        className="site-layout-background"
        style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
      />
      <Layout style={{ minHeight: "100vh", paddingTop: "2vh" }}>
        <MenuList />

        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, mixHeight: 360 }}
            >
              <AppRouter>
                <Switch>
                  <Route
                    exact
                    path={"/login"}
                    render={() => {
                      return <Login />;
                    }}
                  />

                  <Route
                    exact
                    path={"/registion"}
                    render={() => {
                      return <RegistionPage />;
                    }}
                  />
                  <Route
                    exact
                    path={"/"}
                    render={() => {
                      return <Home />;
                    }}
                  />
                </Switch>
              </AppRouter>
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
