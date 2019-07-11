import { Login } from "../Auth";
import { Router, Route, Redirect } from "react-router-dom";
import { getToken } from "../_actions/auth";
import { history } from "../_helpers/history";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";

function Panel() {
  return (
    <>
    <div id="wrapper">
      <Sidebar />
      <Dashboard />
    </div>
    </>
  );
}

export const App = () => {
  return(
    <Router history={history}>
      <PrivateRoute path="/" exact component={Panel} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}