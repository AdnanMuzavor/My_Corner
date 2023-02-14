import React from "react";

import { useHistory } from "react-router-dom";
import Galleryimg from "./Galleryimg";
//COMMON GALLERY COMPONENT
const GalleryImgRender = (props) => {
  const history = useHistory();
  const ToTop = (choice) => {
    if (choice == 2) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      history.push("/gallery");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {props.GalleryImages.map((imgval, index) => {
            return index < props.limit ? (
              <Galleryimg
                im={imgval.imgsrc}
                key={index}
                ind={index + 1}
                brief={imgval.brief}
              />
            ) : null;
          })}
        </div>
        <div className="col-xxl-12 text-center my-5">
          <button
            className="btn btn-outline-info"
            onClick={props.home ? () => ToTop(1) : () => ToTop(2)}
          >
            {props.home ? "Go to gallery" : "GO-TO-TOP"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GalleryImgRender;
