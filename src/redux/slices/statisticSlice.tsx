import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatistic, IUpdateStatistic } from "../../interfaces";


const initialState:IStatistic = {
    dailyTotalTime:0,
    weeklyTotalTime:0,
    dayOfMonth:0,
    weekOfMonth:0,
    month:0,
    statistic:{
        daily:{
            work:0,
            study:0,
            hobby:0,
            other:0
        },
        weekly:{
            work:0,
            study:0,
            hobby:0,
            other:0
        }
    },
    completedTasks:{
        weekly:{
            mon:[],
            tue:[],
            wed:[],
            thu:[],
            fri:[],
            sat:[],
            sun:[]
        },
        monthly: {
            first: [],
            second: [],
            third: [],
            fourth: [],
            fifth: []
        }
    },
    time:{
        weekly:{
            mon:0,
            tue:0,
            wed:0,
            thu:0,
            fri:0,
            sat:0,
            sun:0
        },
        monthly: {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0
        }
    }
}

const statisticSlice = createSlice({
    name:'statistic',
    initialState,
    reducers:{
        updateTimeStatistic:(state,action:PayloadAction<IUpdateStatistic>)=>{
            state.dailyTotalTime = state.dailyTotalTime + Number(action.payload.time);
            state.weeklyTotalTime = state.weeklyTotalTime + Number(action.payload.time);

            state.statistic.daily[action.payload.type] = state.statistic.daily[action.payload.type] + Number(action.payload.time);
            state.statistic.weekly[action.payload.type] = state.statistic.weekly[action.payload.type] + Number(action.payload.time);

            state.time.weekly[action.payload.day] = state.time.weekly[action.payload.day] + Number(action.payload.time);
            state.time.monthly[action.payload.week!] = state.time.monthly[action.payload.week!] + Number(action.payload.time);
        },
        updateTasksStatistic:(state,action:PayloadAction<{id:string | undefined, day:string, week:string | undefined}>)=>{
                if(!state.completedTasks.weekly[action.payload.day].find((item) => item.id === action.payload.id)){
                    state.completedTasks.weekly[action.payload.day]?.push({...action.payload});
                    state.completedTasks.monthly[action.payload.week!]?.push({...action.payload});
                }
            
        },
        updateDate:(state, action:PayloadAction<{dayOfMonth:number, weekOfMonth:number, month:number}>) => {
            if(state.dayOfMonth === 0){
                state.dayOfMonth = action.payload.dayOfMonth;
            }
            if(state.weekOfMonth === 0){
                state.weekOfMonth = action.payload.weekOfMonth;
            }
            if(state.month === 0){
                state.month = action.payload.month;
            }
        },
        resetDailyStatistic: (state) => {
            state.dailyTotalTime = initialState.dailyTotalTime;
            state.statistic.daily = initialState.statistic.daily;

            state.dayOfMonth = initialState.dayOfMonth;
        },
        resetWeeklyStatistic: (state) => {
            state.weeklyTotalTime = initialState.weeklyTotalTime;
            state.statistic.weekly = initialState.statistic.weekly;
            state.time.weekly = initialState.time.weekly;
            state.completedTasks.weekly = initialState.completedTasks.weekly;

            state.weekOfMonth = initialState.weekOfMonth;
        },
        resetMonthlyStatistic: (state) => {
            state.time.monthly = initialState.time.monthly;
            state.completedTasks.monthly = initialState.completedTasks.monthly;

            state.month = initialState.month;
        }
    }
});

export const {
    updateTimeStatistic,
    updateTasksStatistic,
    resetDailyStatistic,
    resetWeeklyStatistic,
    resetMonthlyStatistic,
    updateDate
} = statisticSlice.actions;
export default statisticSlice.reducer