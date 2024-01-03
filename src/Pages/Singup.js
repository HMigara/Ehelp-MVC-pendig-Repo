import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <>
      <Meta title={"SingUp"} />
      <BreadCrum title="SingUp" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sing Up</h3>
                <form action="#" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lans-name"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>

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
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button boder-0" type="submit">
                        Sing Up
                      </button>
                      <Link to="/login">Cancel</Link>
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

export default Singup