
import { configureStore } from "@reduxjs/toolkit"
import  rootReducer  from "./rootReducer";
import { authApi } from "@/feature/api/authApi";    

export const appStore=  configureStore({
    reducer: rootReducer,
    middleware:(defaulMiddleware)=> defaulMiddleware().concat(authApi.middleware) 
})

