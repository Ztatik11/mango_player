import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from "./actionTypes";

export const userLogin = () => ({
  type: LOGIN_SUCCESS,
});

export const userLogout = () => ({
  type: LOGOUT,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
