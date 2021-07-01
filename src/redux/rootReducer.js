import React from "react";
import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import AuthReducer from "./reducers/authReducer";

const RootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer,
});

export default RootReducer;
