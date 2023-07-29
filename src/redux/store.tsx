import {configureStore} from "@reduxjs/toolkit"; 
import tasks from './slices/tasksSlice'
import timer from './slices/timerSlice'
import statistic from './slices/statisticSlice'
import books from './slices/booksSlice'
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, tasks);
const persistedStatictic = persistReducer(persistConfig, statistic);
const persistedBooks= persistReducer(persistConfig, books);


export const store = configureStore({
    reducer:{
        tasks:persistedReducer,
        timer,
        statistic:persistedStatictic,
        books:persistedBooks,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;