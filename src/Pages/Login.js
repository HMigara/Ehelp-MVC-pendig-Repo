import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title="Login" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="Password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Pasword?</Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <button className="button boder-0" type="submit">
                        LOGIN
                      </button>
                      <Link className="button singup" to="/singup">
                        Singup
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login