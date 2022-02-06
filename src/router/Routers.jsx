// Router
import { BrowserRouter as AppRouter, Route, Switch } from "react-router-dom";

// import Ecommerce from "../view/Dashboards/ecommerce";

// import HeaderTap from "../Layouts/tabHeader";
// import MenuList from "../Layouts/menulist";

//import
// import Login from "../view/Login";
// import RegistionPage from "../view/Registion";

// Routes
import { Routes } from "./routes";

// Layouts
import VerticalLayout from "../Layouts/VerticalLayout";
import FullLayout from "../Layouts/FullLayout";

// Components

import ProtectedRoute from "../ProtectdRoute";

// import { Layout } from "antd";

// const { Content, Footer } = Layout;

export default function Routers() {
  // Default Layout
  const DefaultLayout = null; // FullLayout or VerticalLayout

  // All of the available layouts
  const Layouts = { VerticalLayout, FullLayout };

  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          (route.layout === layout || DefaultLayout === layout) &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      );
    }

    return { LayoutRoutes, LayoutPaths };
  };

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);
      const LayoutTag = Layouts[layout];
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <ProtectedRoute
                    key={route.path}
                    path={route.path}
                    exact
                    component={route.component}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <AppRouter>
      <Switch>{ResolveRoutes()}</Switch>
    </AppRouter>
  );
}
