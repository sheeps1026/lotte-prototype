import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cloneDeep } from "lodash";

// const URL = "http://localhost:3001";
//비동기 처리 함수 구현//

//결제하는 유저 정보 가져오기
export const getPayment = createAsyncThunk(
  "PaymentSlice/getPayment",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(`http://localhost:3001/members`, {
        params:{
            id : payload?.id
        }
      });
      
    } catch (e) {
      result = rejectWithValue(e.reponse);
      
    }
    return result;
  }
);
//결제정보 가져오기
export const getPaymentInfo = createAsyncThunk(
  "PaymentSlice/getPaymentInfo",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(`http://localhost:3001/res_info`, {
        params:{
          merchant_uid : payload?.merchant_uid,
          paymentDay : payload?.paymentDay,
          paymentMonth : payload?.paymentMonth
        }
      });
      
    } catch (e) {
      result = rejectWithValue(e.reponse);
      
    }
    return result;
  }
);
//결제하는 유저 & 방문유저 정보 보내기
export const postPaymentInfo = createAsyncThunk(
  "PaymentSlice/postPaymentInfo",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.post(`http://localhost:3001/res_info`, {
        
          pg: "html5_inicis",                   // PG사
          pay_method: payload?.pay_method,      // 결제수단
          merchant_uid: payload?.merchant_uid,  // 주문번호
          amount: payload?.amount,              // 결제금액
          name: payload?.name,                  // 주문명
          paymentDate :payload?.paymentDate,    // 주문 날짜
          buyer_name: payload?.buyer_name,      // 구매자 이름
          buyer_tel: payload?.buyer_tel,        // 구매자 전화번호
          buyer_email: payload?.buyer_email,    // 구매자 이메일
          visit_name: payload?.visit_name,      // 방문자 이름
          visit_tel: payload?.visit_tel,        // 방문자 전화번호
          visit_mail: payload?.visit_mail,    // 방문자 이메일
          buyer_addr: payload?.buyer_addr,          // 구매자 주소
          buyer_postcode: payload?.buyer_postcode,  // 구매자 우편번호
          priceA:payload?.priceA,                                 //어른 가격
          priceY:payload?.priceY,                                 //청소년 가격
          priceC:payload?.priceC,                                 //어린이 가격
          numberA:payload?.numberA,                               //어른 매수
          numberY:payload?.numberY,                               //청소년 매수
          numberC:payload?.numberC,                               //어린이 매수
          paymentDay:payload?.paymentDay,                           //결제날짜
          paymentMonth:payload?.paymentMonth,                           //결제월
          paymentHour:payload?.paymentHour                           //결제날짜
      });
      // console.log(payload.name+"추가할 놈 들어오냐???????");
      
    } catch (e) {
      result = rejectWithValue(e.reponse);
      console.log("아안됐다고",e);
      
    }
    return result;
  }
);

//결제 정보 안보아게 바뀌기
export const deletePaymentInfo = createAsyncThunk(
  "PaymentSlice/deletePaymentInfo",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.delete(`http://localhost:3001/res_info/${payload?.id}`);
    
    } catch (err) {
      result = rejectWithValue(err.message);
    
    
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
    [getPaymentInfo.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getPaymentInfo.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getPaymentInfo.rejected]: (state, { payload }) => {
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
    [postPaymentInfo.pending]: (state, { payload }) => {
      return { ...state, loading: true };
      
    },
    [postPaymentInfo.fulfilled]: (state, { payload }) => {
      const data = cloneDeep(state.data);
      
      console.log(data);
      

      return {
        data: data,
        loading: false,
        error: null,
      };
    },
    [postPaymentInfo.rejected]: (state, { payload }) => {
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
    [deletePaymentInfo.pending]: (state, { payload }) => {
     

      return { ...state, loading: true };
    },
    [deletePaymentInfo.fulfilled]: (state, { meta, payload }) => {
      const data = cloneDeep(state.data);
      

      const index = data.findIndex(
        (element) => element.merchant_uid === meta.arg.merchant_uid
      
        );
      if (index !== undefined) {
        data.splice(index, 1);
      }
      console.log(state.data);
      return {
        data: data,
        loading: false,
        error: null,
      };
    },
    [deletePaymentInfo.rejected]: (state, { payload }) => {
      
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
