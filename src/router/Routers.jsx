import { BrowserRouter as AppRouter, Route, Switch } from "react-router-dom";
import Ecommerce from "../view/Dashboards/ecommerce";

//import
import Login from "../view/Login";
// import Home from "../view/Homes/index";
import Home from "../view/Homes/index"

export default function Routers() {
  return (
    <AppRouter>
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => {
            return <Home />;
          }}
        />

        <Route
          exact
          path={"/login"}
          render={() => {
            return <Login />;
          }}
        />

        <Route
          exact
          path={"/dashboard"}
          render={() => {
            return <Ecommerce />;
          }}
        />
      </Switch>
    </AppRouter>
  );
}
