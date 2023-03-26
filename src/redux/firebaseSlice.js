import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
    name : "auth",
    initialState:{
        user : []
    },
    reducers:{
        getRegister : (state,action)=>{
            state.user = action.payload
        },
        login:(state,action)=>{
            state.user = action.payload
        },logout :(state)=>{
            state.user = []
            state.user = false
        }
    }
})

export const { login, logout, getRegister } = firebaseSlice.actions;
export default firebaseSlice.reducer