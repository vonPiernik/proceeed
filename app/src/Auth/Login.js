import { Wrapper } from "./Wrapper";

export const Login = () => {
    return(
      <Wrapper>
           <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user" _lpchecked="1">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <a href="index.html" className="btn btn-primary btn-user btn-block">
                      Login
                    </a>
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