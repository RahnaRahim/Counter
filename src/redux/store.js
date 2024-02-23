import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

//creation of store 
export const store=configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})