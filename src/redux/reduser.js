import { createSlice } from '@reduxjs/toolkit';

export const initialState={
    count:0,
    data:['sdsdd','ssss','gggg']
}

export const counterSlice = createSlice({
     name:'counter',
     initialState:initialState,
     reducers:{
        incriment:(state)=>{
             state.count +=1;
        },
        decriment:(state)=>{
            state.count -=1;
        },
        anmountincr:(state,action)=>{
             state.count += action.payload;
        },
        anmoundecr:(state,action)=>{
             state.count -= action.payload
        }
     }
})


export const {incriment,decriment,anmountincr,anmoundecr}= counterSlice.actions;
export default counterSlice.reducer;
