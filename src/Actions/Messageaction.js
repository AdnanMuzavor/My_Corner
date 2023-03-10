import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  POST_MESSAGES_FAIL,
  POST_MESSAGES_REQUEST,
  POST_MESSAGES_SUCCESS,
} from "../Constants/Messageconstants";

export const getmessages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MESSAGES_REQUEST });

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________

    // const messages = await fetch("/api/contacts", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },

    // });
    // const allmessages = await messages.json();
    // console.log(allmessages)
    // dispatch({ type: GET_MESSAGES_SUCCESS, payload: allmessages });

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_MESSAGES_FAIL, payload: "Fail to get messages" });
  }
};

export const postmessage = (details) => async (dispatch) => {
  try {
    dispatch({ type: POST_MESSAGES_REQUEST });
    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________

    // const postmessage = await fetch("/api/contacts/postmessage", {
    //   method: "POST",
    //   headers: {

    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(details),
    // });
    // const uploaded = await postmessage.json();

    //________________________________________________
    //_________WHEN BACKEND EXISTED___________________
    //________________________________________________

    dispatch({ type: POST_MESSAGES_SUCCESS, payload: "" });
  } catch (e) {
    console.log(e);
    dispatch({ type: POST_MESSAGES_FAIL, payload: "Unable to post message" });
  }
};
