

import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'


//import Login
import Login from "../view/Login";

export default function Routers() {
  return (
    <AppRouter>
      <Switch>
        <Route
          exact
          path={'/'}
          render={() => {
            return <Login />
          }}
        />
      </Switch>
    </AppRouter>
  );
}
