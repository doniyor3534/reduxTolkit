import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./reduser";

export const ReducerSlice = createSlice({
    name:'reducer',
    initialState:initialState,
    reducers:{
       add:(state,action)=>{
            state.data=[...state.data, action.payload];
       },
       delll:(state,action)=>{
           state.data= state.data.filter(val=>val !== action.payload);
       }
    }
})

export const {add,delll}= ReducerSlice.actions;
export default ReducerSlice.reducer
