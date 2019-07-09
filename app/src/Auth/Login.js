import { Wrapper } from "./Wrapper";
import { login } from "../_actions/auth";

const doSubmit = dispatch => {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  dispatch( login({username, password}) );
}

const Login = ({dispatch}) => {
    
    return(
      <Wrapper>
           <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user" _lpchecked="1" action="javascript:void(0);" id="loginForm" onSubmit={() => doSubmit(dispatch)}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-user" id="username" placeholder="Username" autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" id="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="register.html">Create an Account!</a>
                  </div>
            </div>
      </Wrapper>
    );
  }

// Redux.connect()(Login);
const connectedLogin = Redux.connect()(Login);
export { connectedLogin as Login };