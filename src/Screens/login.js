import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Adminlogin } from "../Actions/Adminactions";
import Loading from "../Components/Loading";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const AdminLogin = useSelector((state) => state.AdminLogin);
  const { loading, admin, error } = AdminLogin;
  //For getting admin details
  const [adminin, setadmin] = useState({
    email: "",
    password: "",
  });

  //Updating details as written
  const ChnageHandler = (e) => {
    const { name, value } = e.target;
    setadmin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submithandler = () => {
    dispatch(Adminlogin(adminin));
  };

  useEffect(() => {
    if (admin.Message === "Verified User") {
      history.push("/admin");
    }
  }, [loading]);
  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <div className="container mt-4">
        <div className="row flexer">
          <button
            className={`col-md-3 ms-2 col-lg-3 ms-2 col-8 ms-2 flexer btn `}
          >
            <h6 className="text-center">Help us verify it's Adnan</h6>
            {admin.Message === "Admin login Fail"
              ? "Oops! you're not Adnan"
              : ""}
          </button>
        </div>
      </div>
      <div className="container contact_div">
        <div className="row" data-aos="zoom-out">
          <div className="col-md-6 col-lg-6 col-10 mx-auto">
            <div className="row flexer2">
              <div className="col-md-8 col-lg-6 col-10 ">
                <div className="mb-3"></div>

                <>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label"
                    >Email</label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder={"Email"}
                      value={adminin.email}
                      onChange={ChnageHandler}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      value={adminin.password}
                      onChange={ChnageHandler}
                    />
                  </div>
                </>

                <div className="col-12 mx-auto " data-aos="zoom-out">
                  <button
                    className="btn btn-outline-primary anima mx-auto "
                    type="submit"
                    onClick={submithandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
