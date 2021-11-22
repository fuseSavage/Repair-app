import { BrowserRouter as AppRouter, Route, Switch } from "react-router-dom";
import Ecommerce from "../view/Dashboards/ecommerce";

//import Login
import Login from "../view/Login";

export default function Routers() {
  return (
    <AppRouter>
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => {
            return <Login />;
          }}
        />

        <Route
          exact
          path={"/Dashboard"}
          render={() => {
            return <Ecommerce />;
          }}
        />
      </Switch>
    </AppRouter>
  );
}
