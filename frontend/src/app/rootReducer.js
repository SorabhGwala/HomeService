import { authApi } from "@/feature/api/authApi.js";
import { combineReducers } from "@reduxjs/toolkit"; 
import authReducer from "@/feature/authSlice.js";

 const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
})

export default rootReducer;