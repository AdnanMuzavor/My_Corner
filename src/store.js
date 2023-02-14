import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {Adminregisters} from "./Reducers/AdminReducers";

import {GetdataReducer} from "./Reducers/GetDataReducers";
import {GetMessagesReducer} from "./Reducers/MessagesReducer";
const initialState = {};

const reducer = combineReducers({
    Messages:GetMessagesReducer,
    Data:GetdataReducer,
    AdminLogin:Adminregisters,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
