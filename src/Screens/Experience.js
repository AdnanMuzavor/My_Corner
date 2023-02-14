import React from "react";
import { useState } from "react";

import { useSelector, UseDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ExpCard from "../Components/ExpCard";
import Loading from "../Components/Loading";
import { GetData } from "../Actions/Getdataaction";
const Experience = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Data);
  const { loading, Experiences, error } = Data;
  const [load, setload] = useState(true);
  useEffect(() => {
    if (Experiences.length === 0) {
      dispatch(GetData("experiences"));
    }
    setTimeout(() => {
      setload(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loading />
  ) : load ? (
    <Loading />
  ) : (
    <>
      <div className="container mt-2 " data-aos="fade-down">
        <h1 className="text-center">Experiences</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container mt-5 expcont">
        <div className="row exprow">
          {/* <div
            className="col-md-4 col-lg-4  col-12 mx-auto cont acard"
            data-aos="zoom-in"
          > */}
          {Experiences.map((e) => {
            return (
              <ExpCard
                img={e.image}
                content={e.content}
                title={e.content.split("&&")[1]}
              />
            );
          })}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Experience;
