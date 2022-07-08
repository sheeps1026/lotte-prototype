import { createSlice } from '@reduxjs/toolkit';

/** Slice 정의 (Action 함수 + Reducer의 개념) */
const childCountSlice = createSlice({
    name: "childCount",
    // 이 모듈이 관리하고자 하는 상태값들을 명시
    initialState: {numberC: 0, colorC: '#cfcfcf'},
    // 내부 action 및 동기 action.
    // 상태값을 갱신하기 위한 함수들을 구현. 파라미터는 (state, action) 고정
    // 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 action.payload로 전달된다.
    // initialState와 동일한 구조의 JSON을 리턴해야 한다.
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
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        // 여기서는 사용 안 함
    }
});

// 액션 함수들 내보내기
export const { plus3, minus3 } = childCountSlice.actions;

// reducer 객체 내보내기
export default childCountSlice.reducer;