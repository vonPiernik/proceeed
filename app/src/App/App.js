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
          <PrivateRoute path="/a/" exact component={Hello} />
          <PrivateRoute path="/a/procedures" exact component={Procedures} />
          <PrivateRoute path="/a/procedures/new" exact component={NewProcedure} />
        </Router>
      </Dashboard>
    </div>
    </>
  );
}

export const App = () => {
  // @todo: coś nie gra z tymi ścieżkami, '/' w niektórych sytuacjach powinna być exact a w niektóych nie
  return(
    <Router history={history}>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/a" component={Panel} />
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