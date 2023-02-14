import React from "react";

const FilterMenu = (props) => {
  return (
    <>
      {props.catitems.map((ele, indx) => {
        return (
          <>
            <button
              className="btn ms-2 btn-get-started text-center col-md-1 col-lg-1 col-4 mt-2 "
              key={indx}
              onClick={() => props.FilterGallery(ele)}
            >
              {ele}
            </button>
          </>
        );
      })}
      {/* </div>
      </div> */}
    </>
  );
};

export default FilterMenu;
