import { configureStore, createSlice } from "@reduxjs/toolkit";

const signingSlice=createSlice({
    name:"signing",
    initialState:{},
    reducers:{
        setSigning: (state,action)=>{
            state.signing=action.payload;
        },
        setSigningOut: (state)=>{
            state.signing=null;
        }
    }
})
export const {setSigning,setSigningOut}=signingSlice.actions

const store=configureStore(
    {reducer:signingSlice.reducer}
)
export default store