import React, { useState } from "react";
import img2 from "../Images/img3.webp";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import Loading from "../Components/Loading";
import MySkills from "./MySkills";

function About() {
  const [load, setload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);

  return load ? (
    <Loading />
  ) : (
    <>
      <section className="main_heading my-4">
        <div className="text-center">
          <h1 className="" data-aos="fade-down">
            About
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row my-5">
            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6"
              data-aos="fade-up-right"
            >
              <img src={img2} className="img-fluid about_img animated" />
            </div>

            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column"
              data-aos="fade-up-left"
            >
              <h1 className="text-center">My Journey</h1>
              <p className="colortxt">
                Technology was always something which seem attractive to me.
                Right from webs to apps,the techno peaks boosted my curiosity
                and landed me into an engineering college in CS domain.
                Currently I am learning and exploring about web developmet.
                Looking ahead to deep dive my interst in some more techs,
                enhance my curiosity and quench it every time it is enhanced.
                Tech domain is full of discoveries, such that every new
                discovery always ignites a software engineer and challenges him
                to expand his limits. I too believe in same. And yes I am a
                learner and will always like to keep learning!!
              </p>
              <div className="mt-3 btn-get-started text-center">
                <NavLink
                  to={{ pathname: "/projects" }}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  My projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MySkills />
    </>
  );
}
export default About;
