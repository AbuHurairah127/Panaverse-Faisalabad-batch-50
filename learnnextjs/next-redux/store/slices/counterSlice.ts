import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'Naveed Sarwar',
    count: 1
}

export const counterSlice = createSlice({
    name:'counter',
   initialState: initialState,
   reducers:{
    changeUserName:(state,action)=>{
        console.log("action",action);
        
        state.userName = action.payload.user
    },
    increament: (state)=>{
        state.count = state.count + 1
    },
    decreament: (state)=>{
        state.count = state.count -1
    },
    reset: (state)=>{
        state.count = 0
    },
   }

})

export const {changeUserName, increament, decreament, reset} = counterSlice.actions
export default counterSlice.reducer