
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import RegionService from "../service/region.service";

const initialState={liste:[]};

export const getAllRegion=createAsyncThunk(
    "regions/get",
    async ()=>{
        console.log("iiii");
        const res =await RegionService.getAllRegion();
        console.log("5555",res);
        return res.data;
    }
);
export const createRegion=createAsyncThunk(
    "regions/create",
    async(data)=>{
        const res=await RegionService.create(data)
        return res.data
    }
)

const regionSlice = createSlice({
    name: "signalement",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllRegion.fulfilled]:(state,action)=>{
            console.log("fullfilled",action);
            const liste=action.payload.data
            return {liste};
        },
        [createRegion.fulfilled]:(state,action)=>{
            state.liste.unshift(action.payload.data);
        }
    }

    
})

export const {
 
 } = regionSlice.actions;
 export default regionSlice.reducer;