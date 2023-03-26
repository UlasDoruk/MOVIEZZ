import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
    name : "auth",
    initialState:{
        user : []
    },
    reducers:{
        getRegister : (state,action)=>{
            // localStorage.setItem("user",JSON.stringify(action.payload))
            state.user = action.payload
        },
        login:(state,action)=>{
            // localStorage.setItem("user",JSON.stringify(action.payload))
            state.user = action.payload
        },logout :(state)=>{
            // localStorage.removeItem("user")
            state.user = []
            state.user = false
        }
    }
})

export const { login, logout, getRegister } = firebaseSlice.actions;
export default firebaseSlice.reducer