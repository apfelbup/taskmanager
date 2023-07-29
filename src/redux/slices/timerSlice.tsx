import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    pageType:string,
    time: number,
    timeLeft: string | number
}

const initialState: IState = {
    pageType:'selection',
    time: 0,
    timeLeft: 0
};

const timerSlice = createSlice({
    name:'timer',
    initialState,
    reducers:{
        startTimer:(state, action:PayloadAction<{time:string, pageType:string}>) => {
            state.pageType = action.payload.pageType;
            state.time = Number(action.payload.time);
            state.timeLeft = state.time;
        },
        stopTimer:(state) => {
            state.time = 0;
            state.pageType = 'selection'
        },
        updateTime:(state, action:PayloadAction<string>) => {
            state.timeLeft = action.payload;
        }
    }
});

export const {
    startTimer,
    stopTimer,
    updateTime
} = timerSlice.actions;
export default timerSlice.reducer