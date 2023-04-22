import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {loginSlice} from './reducers/user';


const store = configureStore({
    reducer: {
      login: loginSlice,
    },
});

export default store;