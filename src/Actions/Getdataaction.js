import {
  GET_EXPERIENCE_FAIL,
  GET_EXPERIENCE_REQUEST,
  GET_EXPERIENCE_SUCCESS,
} from "../Constants/ExperienceConstants";
import {
  GET_GALLERY_FAIL,
  GET_GALLERY_REQUEST,
  GET_GALLERY_SUCCESS,
} from "../Constants/GetGalleryConstants";
import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from "../Constants/GetprojectsConstants";
import {
  GET_SKILLS_FAIL,
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
} from "../Constants/GetskillsConstants";

export const GetData = (datatype) => async (dispatch) => {
  try {
    //Dispatch as per request
    if (datatype === "skills") {
      dispatch({ type: GET_SKILLS_REQUEST });
    } else if (datatype === "projects") {
      dispatch({ type: GET_PROJECTS_REQUEST });
    } else if (datatype === "gallery") {
      dispatch({ type: GET_GALLERY_REQUEST });
    } else if (datatype === "experiences") {
      dispatch({ type: GET_EXPERIENCE_REQUEST });
    }

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________

    // const getdata = await fetch("/api/mydata", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });

    //After getting data call reducer with help of type as per request
    //const data = await getdata.json();

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________

    if (datatype === "skills") {
      // const skills = data.filter((e) => e.category === "skill");
      // console.log(skills);

      dispatch({ type: GET_SKILLS_SUCCESS, payload: "" });
    } else if (datatype === "projects") {
      // const projects = data.filter((e) => e.category === "project");
      // console.log(projects);

      dispatch({ type: GET_PROJECTS_SUCCESS, payload: "" });
    } else if (datatype === "gallery") {
      // const gallerydata = data.filter((e) => e.category === "gallery");
      // console.log(gallerydata);

      dispatch({ type: GET_GALLERY_SUCCESS, payload: "" });
    } else if (datatype === "experiences") {
      // const experiencedata = data.filter((e) => e.category === "experience");
      // console.log(experiencedata);
      dispatch({ type: GET_EXPERIENCE_SUCCESS, payload: "" });
    }
  } catch (e) {
    console.log(e);
    //Dispatch as per request
    if (datatype === "skills") {
      dispatch({ type: GET_SKILLS_FAIL });
    } else if (datatype === "projects") {
      dispatch({ type: GET_PROJECTS_FAIL });
    } else if (datatype === "gallery") {
      dispatch({ type: GET_GALLERY_FAIL });
    } else if (datatype === "experiences") {
      dispatch({ type: GET_EXPERIENCE_FAIL });
    }
  }
};
