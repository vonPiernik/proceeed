import { Link, Redirect, Route, Router } from "react-router-dom";
import { Login } from "../Auth";
import { getToken } from "../_actions/auth";
import { history } from "../_helpers/history";
import { Dashboard } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { NewProcedure } from "../Procedures/NewProcedure";

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

function Procedures() {
  return (
    <>
    <h1>All your procedures</h1>
    </>
  );
}

function Hello() {
  return (
    <>
    <h1>Welcome to Proceeed!</h1>
    <hr />
    <h4>Let's <Link to="/procedures/new">create</Link> your first procedure.</h4>
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