
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import toast from "react-hot-toast"

const initialState={
    table:[],
    tables:[],
    isError:false,
    isLoading:false,
    isSucess:false,
    messsage:''
}


export const getTable=createAsyncThunk(
    'table/getSingleTable',
    async (tableId,thunkApi)=>{
        try {
            
       const res=await axios.get(`http://localhost:8000/api/table/getTable?tableId=${tableId}`)
       const data=res.data;
       return data;

    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString();
      toast.error(message);
      // Ensure to return the rejection
      return thunkApi.rejectWithValue(message);
    }

    }
)


const tableSlice=createSlice({
     name:'Table',
     initialState,
     reducers:{

     },
     extraReducers:(builder)=>{
        builder
        .addCase(getTable.pending,(state,action)=>{
            state.isLoading=true;
        })
        .addCase(getTable.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSucess=true;
            state.table=action.payload;
        })
        .addCase(getTable.rejected,(state,action)=>{
          state.isLoading=false;
          state.isError=true;
          state.messsage=action.payload;
          toast.error(action.payload);
        })
     }
})


export const selectTable=(state)=>state.Table.table;
export const selectIsLoading=(state)=>state.Table.isLoading;

export default tableSlice.reducer;

