import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-6 fw-bold text-white">
            Thank you for visiting my corner!!
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              This is a portfolio website featuring me, my projects and skills.
              <br></br>
              Website designed by: Adnan Shah Muzavor.
            </p>
            <div className="row d-grid gap-2 d-sm-flex justify-content-sm-center d-flex justify-content-center">
              <Link
                onClick={() => ToTop()}
                className="col-md-4 col-lg-4 col-6 btn ms-2 btn-get-started btn-danger"
              >
                Take me to the top!
              </Link>
            </div>
          </div>
        </div>
        <div className="simple d-flex justify-content-center align-items-center">
          <p>
            <font>
              {/* <font>© 2019--2021 Company, Inc. </font> */}
              <font>· </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Privacy</font>
              </font>
            </a>
            <font>
              <font> · </font>
            </font>
            <a href="https://www.websitepolicies.com/blog/terms-conditions-vs-privacy-policy">
              <font>
                <font>Terms</font>
              </font>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
