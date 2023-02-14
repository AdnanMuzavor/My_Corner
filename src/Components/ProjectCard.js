import React from "react";

import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="col-md-4  col-12 mx-auto cont acard" data-aos="zoom-in">
        <div class="card">
          <img
            src={props.img}
            class="img card-img-top img-fluid"
            alt="project image"
          />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            {window.innerWidth > 360 ? (
              <p class="card-text ">
                {/* {props.content.slice(0,80)+".."} */}
                {props.content}
              </p>
            ) : null}

            <div className="btn-cont text-center d-flex justify-content-center">
              {props.weblink === "nill" ? (
                null
              ) : (
                <a
                  href={props.weblink}
                  className={`card-btn btn btn-primary ${
                    window.innerWidth > 360 ? " anima" : ""
                  }`}
                >
                  {props.btn}
                </a>
              )}

              <a href={props.link} target="_blank" class="card-btn btn btn-primary git">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
