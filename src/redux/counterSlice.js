import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0 
}
//create slice
export const counterSlice=createSlice({
    name:'counter',
    initialState,

    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        reset:(state)=>{
            state.value=0
        },
        decrement:(state)=>{
            state.value -=1
        }
    }
})
export const {increment,reset,decrement}=counterSlice.actions
export default counterSlice.reducer