import {configureStore} from "@reduxjs/toolkit"; 
import tasks from './slices/tasksSlice'
import timer from './slices/timerSlice'
import statistic from './slices/statisticSlice'

export const store = configureStore({
    reducer:{
        tasks,
        timer,
        statistic
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;