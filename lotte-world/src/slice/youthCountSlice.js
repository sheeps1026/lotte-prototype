import { createSlice } from '@reduxjs/toolkit';

const youthCountSlice = createSlice({
    name: "youthCount",
    initialState: {numberY: 0, colorY: '#cfcfcf'},
    reducers: {
        plus2: (state, action) => {
            let numberValue = state.numberY + action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberY: numberValue, colorY: colorValue };
        },
        minus2: (state, action) => {
            let numberValue = state.numberY - action.payload;
            let colorValue = '#cfcfcf';
            
            if (numberValue > 0) {
                colorValue = '#2f77eb';
            } else if (numberValue < 0) {
                colorValue = '#cfcfcf';
                numberValue = 0;
            } 

            return { numberY: numberValue, colorY: colorValue };
        }
    },
    extraReducers: {
    }
});

export const { plus2, minus2 } = youthCountSlice.actions;

export default youthCountSlice.reducer;