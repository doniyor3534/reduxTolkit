import { configureStore } from "@reduxjs/toolkit";
import  ReducerSlice  from "./redux/reducer2";
import  counterSlice  from "./redux/reduser";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        reducer:ReducerSlice,
    }
})