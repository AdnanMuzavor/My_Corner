import React from "react";
import { NavLink } from "react-router-dom";

const Page = (props) => {
  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex justify-content-center">
          <div className=" d-flex justify-content-center col-md-4 col-lg-4 col-12 mt-5">
            <div className="imgframe row frames">
              <div className="imagecont col-10 col-md-10 col-lg-10">
                <img src={props.img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-center col-md-6 col-lg-6 col-12 mt-5">
            <div className="textframe row frames">
              <div className="textcont col-10 col-md-12 col-lg-12">
                <h4 className="text-center colortxt">{props.title}</h4>
                <div className="wrapper">
                  <div className="static-txt">
                    I am a Web developer|Learner
                  </div>
               
           
                </div>
                {/* <h6 className="text-center">Web developer</h6> */}
                <p className="my-3 text-center colortxt">{props.content}</p>
         
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row mx-auto">
          <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center ">
            <div className="mt-2 btn-get-started text-center d-flex justify-content-center buttonframe ">
             
              <NavLink
                to="/about"
                className="btn ms-2 btn-get-started btn-danger"
              >
                {props.btn}
              </NavLink>
              <NavLink
                to="/projects"
                className="btn ms-2 btn-get-started btn-danger"
              >
                {props.btn2}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <section id="header" className="d-flex text" data-aos="fade-left">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row flexer">
                <div className="col-lg-6 col-md-6 col-10 mx-auto pt-5 pt-lg-0 order-2 order-lg-1 text-center d-flex justify-content-center flex-column ">
                  <h4 className="text-center">
                    {props.title} 
                  </h4>
                  <h6 className='text-center'>Web developer</h6>
                  <p className="my-3 text-center">
                   {props.content}
                  </p>
                  <div className="mt-3 btn-get-started text-center">
                   <NavLink to={props.btnurl} className="btn btn-get-started btn-danger">{props.btn}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img imgcontainer ">
                  <img src={props.img} className="img img-fluid animated " alt="home img"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* <section className="main_heading my-5">
        <div className="text-center">
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row my-5">
            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6 imgcontainer"
              data-aos="fade-up-right"
            >
              <img src={props.img} className="img-fluid about_img animated" />
            </div>

            <div
              className="mt-4 col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column"
              data-aos="fade-up-left"
            >
              <h4 className="text-center">{props.title}</h4>
              <p>{props.content}</p>

              <div className="mt-3 btn-get-started text-center">
                <NavLink
                  to={props.btnurl}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  {props.btn}
                </NavLink>
                <NavLink
                  to={props.btnurl}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  {props.btn2}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Page;
