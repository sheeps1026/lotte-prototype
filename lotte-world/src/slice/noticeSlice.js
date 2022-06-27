import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getList = createAsyncThunk("noticeSlice/getContent",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get("http://localhost:3301",payload);
    }
    catch(e){
        result = rejectWithValue(e.reponse);
    }
    return result;
})

const  noticeSlice= createSlice({
    name: "notice",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getList.pending]:(state,{payload})=>{
            return {...state,loading:true}
        },
        [getList.fulfilled]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [getList.rejected]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:{
                    code:payload?.status? payload.status : 500,
                    message:payload?.statusText ? payload.extraReducers:"Server Error"
                }
            }
        }
    }
});

export default noticeSlice.reducer;