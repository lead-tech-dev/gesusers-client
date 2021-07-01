import { SubmissionError } from "redux-form";
import { requests } from "../../utils/agent";
import { parseApiErrors } from "../../utils/apiHelpers";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_RECEIVE,
  USER_SET_ID,
} from "../types";
export const login = (username, password) => {
  return (dispatch) => {
    return requests
      .post("/login_check", { username, password }, false)
      .then((response) => {
        dispatch(userLoginSuccess(response.token, response.id));
        window.location.href = "/admin";
      })
      .catch((error) => {
        console.error(error);
        throw new SubmissionError({
          _error: "Nom d'utilisateur ou mot de passe invalide",
        });
      });
  };
};

export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId,
  };
};

export const userProfileReceive = (userId, userData) => {
  return {
    type: USER_PROFILE_RECEIVE,
    userData,
    userId,
  };
};

export const userProfileFetch = (userId) => {
  return (dispatch) => {
    return requests
      .get(`/users/${userId}`, true)
      .then((response) => dispatch(userProfileReceive(userId, response)))
      .catch((error) => console.error(error));
  };
};

export const userSetId = (userId) => {
  return {
    type: USER_SET_ID,
    userId,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const register = (username, email, password, retypedPassword) => {
  return (dispatch) => {
    return requests
      .post("/users", { username, email, password, retypedPassword }, false)
      .then(() => (window.location.href = "/login"))
      .catch((error) => {
        throw new SubmissionError(parseApiErrors(error));
      });
  };
};
