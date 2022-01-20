
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import signalementService from "../service/signalement.service";

export const getAllType=createAsyncThunk(
    "type/get",
    async()=>{
        const res=await signalementService.getAllType();
        return res.data;
    }
)
export const createType=createAsyncThunk(
    "type/create",
    async(data)=>{
        const res=await signalementService.createType(data);
        return res.data;
    }
)
export const getAllNotAffected=createAsyncThunk(
    "notAffected/get",
    async ()=>{
        console.log("iiii");
        const res =await signalementService.getAllNotAffected();
        console.log("5555",res);
        return res.data;
    }
);
export const affecter=createAsyncThunk(
    "affectation",
    async(data)=>{
        const res=await signalementService.affectation(data)
        return data
    }
)
export const getAllAffected=createAsyncThunk(
    "affected/get",
    async ()=>{
        const res =await signalementService.getAllAffected();
        
        return res.data;
    }
);
export const getAll=createAsyncThunk(
    "affectation/all",
    async ()=>{
        const res =await signalementService.getAll();
        return res.data;
    }
);
const signalementSlice = createSlice({
    name: "signalement",
    initialState:{ all:[],affected: [],notAffected:[],types:[]},
    reducers: {},
    extraReducers: {
        [getAllNotAffected.fulfilled]:(state,action)=>{
           
            const notAffected=action.payload.data
            console.log("No",action.payload.data);
          return {notAffected};
        },
        [affecter.fulfilled]:(state,action)=>{
            console.log("action",action);
            let arr = [...state.notAffected];
            console.log("DDDDDD",arr.length);
            let index = arr.findIndex(({id}) =>id === action.meta.arg.idSIG);
            console.log("index",index);
            arr.splice(index,1);
            state.notAffected=arr;
            console.log("EEEEEE",arr.length);
        },
        [getAllAffected.fulfilled]:(state,action)=>{
            const affected=action.payload.data;
            console.log("jjjjjjjjjj");
            console.log('YES',action.payload.data)
           return {affected}
        },
        [getAll.fulfilled]:(state,action)=>{
            const all=action.payload.data;
           return {all};
        },
        [getAllType.fulfilled]:(state,action)=>{
            const types=action.payload.data;
            return {types};

        },
        [createType.fulfilled]:(state,action)=>{
            state.types.unshift(action.payload.data)  ;
        }
    }

    
})

export const {
 
 } = signalementSlice.actions;
 export default signalementSlice.reducer;