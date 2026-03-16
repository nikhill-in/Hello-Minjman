import { combineReducers } from "@reduxjs/toolkit";
 import authSlice from "../features/auth/authSlices.js"

const rootReducer = combineReducers({
    auth:authSlice,
 
});

export default rootReducer;
