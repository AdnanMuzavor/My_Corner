import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../Constants/AdminConstants";

export const Adminregisters = (state = { admin: {} }, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loading: false, admin: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { ...state, loading: false, error: "Unauthorised access" };
    default:
      return state;
  }
};
