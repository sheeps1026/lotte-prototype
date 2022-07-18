import { createSlice } from '@reduxjs/toolkit';

const childCountSlice = createSlice({
    name: "childCount",
    // 이 모듈이 관리하고자 하는 상태값들을 명시
    initialState: {numberC: 0, colorC: '#cfcfcf'},
    reducers: {
        plus3: (state, action) => {
            let numberValue = state.numberC + action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberC: numberValue, colorC: colorValue };
        },
        minus3: (state, action) => {
            let numberValue = state.numberC - action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberC: numberValue, colorC: colorValue };
        }
    },
    extraReducers: {
    }
});

export const { plus3, minus3 } = childCountSlice.actions;

export default childCountSlice.reducer;