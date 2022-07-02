import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getPayment = createAsyncThunk("PaymentSlice/getPayment",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get("https://localhost:3001/");
    }
    catch(e){
        result = rejectWithValue(e.reponse);
    }
    return result;
})

const PaymentSlice = createSlice({

    name: "payment",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getPayment.pending]:(state,{payload})=>{
            return {...state,loading:true}
        },
        [getPayment.fulfilled]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [getPayment.rejected]:(state,{payload})=>{
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

export default PaymentSlice.reducer;