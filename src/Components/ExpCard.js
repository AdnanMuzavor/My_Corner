import React from "react";

const ExpCard = (props) => {
  return (
    <>
      <div
        className="col-md-3 col-lg-3  col-10 mx-auto cont acard expcard2 mt-2 mb-4"
        data-aos="zoom-in"
      >
        <div className="balls row">
          <div className="bol1 col-md-12 col-lg-12 col-12">1</div>
          <div className="bol2 col-md-12 col-lg-12 col-12">2</div>
          <div className="bol3 col-md-12 col-lg-12 col-12">3</div>
        </div>
        <div class="card expcard3">
          <img
            src={props.img}
            class="img card-img-top img-fluid"
            alt="project image"
          />
          <div class="card-body exptext">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            {window.innerWidth > 360 ? (
              <ul className="expcolor">
              
                {props.content.split("&&").map((e, i) => {
                  return i >= 2 ? (
                    i != props.content.split("&&").length-1 ? (
                      <li className="expcolor" key={i}>{e}</li>
                    ) : (
                      <li key={i} className="skillsused">{e}</li>
                    )
                  ) : null;
                })}
              </ul>
            ) : //   <p class="card-text ">{props.content.slice(0, 80) + ".."}

            null}
          </div>
        </div>
</div>
    </>
  );
};
export default ExpCard;
