import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginSuccess, loginFailure, logout } from "../store/reducers/user";

const rootReducer = combineReducers({
  loginsuccess: loginSuccess,
  loginFailure: loginFailure,
  logout: logout
});

export const store = configureStore({
    reducer: rootReducer
});