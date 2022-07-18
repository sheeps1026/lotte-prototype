import { createSlice } from '@reduxjs/toolkit';

const adultCountSlice = createSlice({
    name: "adultCount",
    // 이 모듈이 관리하고자 하는 상태값들을 명시
    initialState: {numberA: 1, colorA: '#2f77eb'},
    reducers: {
        plus1: (state, action) => {
            let numberValue = state.numberA + action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberA: numberValue, colorA: colorValue };
        },
        minus1: (state, action) => {
            let numberValue = state.numberA - action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberA: numberValue, colorA: colorValue };
        }
    },
    extraReducers: {
    }
});

export const { plus1, minus1 } = adultCountSlice.actions;

export default adultCountSlice.reducer;