import React from "react";
import {
  LOADING,
  SET_AUTHENTICATED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_RECEIVE,
  USER_SET_ID,
} from "../types";

const initialState = {
  token: null,
  userId: null,
  userData: null,
  authenticated: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        authenticated: true,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case USER_PROFILE_RECEIVE:
      return {
        ...state,
        userData:
          state.userId === action.userId && state.userData === null
            ? action.userData
            : state.userData,
      };
    case USER_SET_ID:
      return {
        ...state,
        userId: action.userId,
        authenticated: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        authenticated: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
