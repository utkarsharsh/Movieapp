import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        url:{},
        generes:{}
    },
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url=action.payload;
        },
        getApiGeneres:(state,action)=>{
            state.generes=action.payload;
        }
    }
})
export  const {getApiConfiguration,getApiGeneres} = homeSlice.actions;
export default homeSlice.reducer