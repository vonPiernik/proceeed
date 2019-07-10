import { Login } from "../Auth";
import { Router, Route, Redirect } from "react-router-dom";
import { getToken } from "../_actions/auth";
import { history } from "../_helpers/history";

function Dashboard() {
  return <h2>dash</h2>;
}

export const App = () => {
  return(
    <Router history={history}>
      <PrivateRoute path="/" exact component={Dashboard} />
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