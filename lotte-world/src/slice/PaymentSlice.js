import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001";
//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getPayment = createAsyncThunk(
  "PaymentSlice/getPayment",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(`http://localhost:3001/info`, {
        params:{
            id : payload?.id
        }
      });
      console.log("받아온 페이로그 이거라고요"+payload+"왜안나와");
    } catch (e) {
      result = rejectWithValue(e.reponse);
      console.log("오류났음 ");
    }
    return result;
  }
);

const PaymentSlice = createSlice({
  name: "PaymentSlice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPayment.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getPayment.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getPayment.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: {
          code: payload?.data?.rt
            ? payload?.data?.rt
            : payload?.status
            ? payload.status
            : 500,
          message: payload?.data?.rtmsg
            ? payload?.data?.rtmsg
            : payload?.statusText
            ? payload.statusText
            : "Server Error",
        },
      };
    },
  },
});

export default PaymentSlice.reducer;
