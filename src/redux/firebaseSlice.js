import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
    name : "auth",
    initialState:{
        user : [],
    },
    reducers:{
        getRegister : (state,action)=>{
            state.user = action.payload
            state.userName = action.payload.displayName
        },
        login:(state,action)=>{
            state.user = action.payload
        },logout :(state)=>{
            state.user = ""
        }
    }
})

export const { login, logout, getRegister } =
  firebaseSlice.actions;
export default firebaseSlice.reducer