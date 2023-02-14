import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import SkillCard from "../Components/SkillCard";
import { GetData } from "../Actions/Getdataaction";
import Loading from "../Components/Loading";

function MySkills() {
  //To get skills from backend
  const dispatch = useDispatch();
  useEffect(() => {
    // setloading(true);
    if (Skills.length === 0) {
      dispatch(GetData("skills"));
    }
    // setTimeout(() => {
    //   setloading(false);
    // }, 2000);
  }, []);

  const Data = useSelector((state) => state.Data);
  const { loading, Skills, error } = Data;
  //const [Skills, setSkills] = useState([

  // ]);
  // const [loading, setloading] = useState(false);
  return loading === true ? (
    <Loading />
  ) : (
    <>
      <section className="container my-3">
        <div className="main_heading my-5">
          <div className="text-center" data-aos="flip-up">
            <h1>Skills</h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="main_heading my-5">
          <div className="text-center" data-aos="flip-up">
            <h3>My Skills</h3>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row">
          {Skills.map((element, ind) => {
            return element.content.split("&&")[1] == "Skill" ? (
              <SkillCard
                title={element.content.split("&&")[0]}
                content={""}
                img={element.image}
                value={"789"}
                ind={ind + 1}
                category={"PL"}
              />
            ) : null;
          })}
        </div>
        <div className="main_heading my-5">
          <div className="text-center" data-aos="flip-up">
            <h3>Programming Languages</h3>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row">
          {Skills.map((element, ind) => {
            return element.content.split("&&")[1] == "PL" ? (
              <SkillCard
                title={element.content.split("&&")[0]}
                content={""}
                img={element.image}
                value={"789"}
                ind={ind + 1}
                category={"PL"}
              />
            ) : null;
          })}
        </div>
        <div className="main_heading my-5">
          <div className="text-center" data-aos="flip-up">
            <h3>Technologies,DataBases and IDEs</h3>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row">
          {Skills.map((element, ind) => {
            return element.content.split("&&")[1] == "Tech" ? (
              <SkillCard
                title={element.content.split("&&")[0]}
                content={""}
                img={element.image}
                value={"789"}
                ind={ind + 1}
                category={"PL"}
              />
            ) : null;
          })}
        </div>
      </section>
    </>
  );
}
export default MySkills;
