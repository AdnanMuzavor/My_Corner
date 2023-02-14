import React from "react";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetData } from "../Actions/Getdataaction";
import { useSelector } from "react-redux";

import Loading from "../Components/Loading";
import Card from "../Components/ProjectCard";

function MyProjects() {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //To get skills from backend
  const Data = useSelector((state) => state.Data);
  const { loading, Projects, error } = Data;
  const [load, setload] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Projects.length === 0) {
      dispatch(GetData("projects"));
    }
    console.log(Projects);
    setTimeout(() => {
      setload(false);
    }, 2000);
    ToTop();
  }, []);

  return loading ? (
    <Loading />
  ) : load ? (
    <Loading />
  ) : (
    <>
      <div className="my-4 ">
        <h1 className="text-center" data-aos="fade-down">
          My Projects
        </h1>
        <hr className="w-25 mx-auto"></hr>
        <div className="my-4 row">
          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            {/* <i className="fas fa-mug-hot fa-2x mug d-flex justify-content-center"></i> */}
            <i
              class="fa fa-th fa-2x  mug d-flex justify-content-center"
              aria-hidden="true"
            ></i>

            <h6 className="counter  text-center " datatarget="7">
              6
            </h6>

            <hr className="w-25 mx-auto"></hr>
            <h5 className="text-center">APPS</h5>
            <hr className="w-25 mx-auto"></hr>
          </div>

          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            <i className="fas fa-mug-hot fa-2x mug d-flex justify-content-center"></i>
            <h6 className=" counter text-center" datatarget="4">
              3
            </h6>
            <hr className="w-25 mx-auto"></hr>
            <h5 className="text-center">WEBSITES</h5>
            <hr className="w-25 mx-auto"></hr>
          </div>

          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            {/* <i className="fas fa-mug-hot fa-2x mug d-flex justify-content-center"></i> */}
            <i
              class="fa fa-thumbs-up fa-2x mug d-flex justify-content-center"
              aria-hidden="true"
            ></i>
            <h6 className=" counter text-center" datatarget="18">
              8+
            </h6>
            <hr className="w-25 mx-auto"></hr>
            <h5 className="text-center">EFFECTS</h5>
            <hr className="w-25 mx-auto"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
              {Projects.map((e, i) => {
                return (
                  <>
                    <Card
                      key={e._id}
                      img={e.image}
                      title={e.content.split("&&")[0]}
                      content={e.content.split("&&")[1]}
                      link={e.content.split("&&")[2]}
                      weblink={e.content.split("&&")[3]}
                      btn="Explore More!"
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyProjects;
