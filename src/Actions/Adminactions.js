import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../Constants/AdminConstants";

export const Adminlogin = (details) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });
  try {

  //________________________________________________
  //_________WHEN BACKEND EXISTED___________________
  //________________________________________________

    // const admin = await fetch("/api/admin", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(details),
    // });
    // const signin = await admin.json();
    // console.log(signin)

    
    // dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: signin });

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________
  } catch (e) {
    dispatch({ type: ADMIN_LOGIN_FAIL });
  }
};
