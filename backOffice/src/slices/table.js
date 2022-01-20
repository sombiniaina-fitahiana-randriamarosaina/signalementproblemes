
import { createSlice } from "@reduxjs/toolkit";
const initialState={ data:undefined,search: {},key:[],head:undefined,selected:undefined};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {

        reset: state => initialState,

        setData:(state,action)=>{
           
            state.data = action.payload; 
        },
        getData:(state,action)=>{
            
            return action.payload
        },
        updateData:(state, action)=>{
            state.data.data = action.payload;
            console.log("stated",state.data.data)
        },

        setSearch:(state,action)=>{

            const { term , column } = action.payload;
            console.log(action.payload);
            
            if(typeof state.search[column] == "undefined") {
                state.search[column] = term;
            } else {
                if(state.search[column] != term) state.search[column] = term;
            }
          
        },
        getSearch:(state,action)=>{
            return action.payload
        },

    
        getKey:(state,action)=>{
            return action.payload
        },
        setKey:(state,action)=>{
           state.key.push(action.payload)
        },

        setHead:(state,action)=>{
            state.head=action.payload
        },
        getHead:(state,action)=>{
            return action.payload
        },
        setSelected:(state,action)=>{
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            state.selected=action.payload;
        }
    }
})

export const {
   setData,getData,setHead,updateData,setSearch,setKey,getHead,getKey,getSearch,reset,setSelected
 } = tableSlice.actions;
 export default tableSlice.reducer;