import { bindActionCreators } from "redux";
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
import Experiences from "../Data/ExpData";
import Projects from "../Data/ProjectData";
import Skills from "../Data/SkillData";

export const GetdataReducer = (
  state = { Skills: [], Projects: [], Gallery: [], Experiences: [] },
  action
) => {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return { ...state, loading: true };
    case GET_SKILLS_SUCCESS:
      console.log(Skills);
      return { ...state, loading: false, Skills: Skills };
    case GET_SKILLS_FAIL:
      return { ...state, loading: false, error: "Unable to get skills" };
    case GET_GALLERY_REQUEST:
      return { ...state, loading: true };
    case GET_GALLERY_SUCCESS:
      return { ...state, loading: false, Gallery: action.payload };
    case GET_GALLERY_FAIL:
      return { ...state, loading: false, error: "Unable to get gallery" };
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case GET_PROJECTS_SUCCESS:
      return { ...state, loading: false, Projects: Projects };
    case GET_PROJECTS_FAIL:
      return { ...state, loading: false, error: "Unable to get projects" };
    case GET_EXPERIENCE_REQUEST:
      return { ...state, loading: true };
    case GET_EXPERIENCE_SUCCESS:
      return { ...state, loading: false, Experiences: Experiences };
    case GET_EXPERIENCE_FAIL:
      return { ...state, loading: false, error: "Unable to get experiences" };
    default:
      return state;
  }
};
