import { Redirect, Route, Router } from "react-router-dom";
import { Login } from "../Auth";
import { getToken } from "../_actions/auth";
import { history } from "../_helpers/history";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { NewProcedure } from "../Procedures/NewProcedure";
import { Hello } from "./Hello";
import { Procedures } from "../Procedures/Procedures";

function Panel() {
  return (
    <>
    <div id="wrapper">
      <Sidebar />
      <Dashboard>
        <Router history={history}>
          <Route path="/" exact component={Hello} />
          <Route path="/procedures" exact component={Procedures} />
          <Route path="/procedures/new" exact component={NewProcedure} />
        </Router>
      </Dashboard>
    </div>
    </>
  );
}

export const App = () => {
  return(
    <Router history={history}>
      <PrivateRoute path="/" component={Panel} />
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