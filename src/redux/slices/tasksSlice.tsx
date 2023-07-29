import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {comment, Status, step, task} from '../../interfaces/index'


interface Itasks {
    tasks: task[],
    activeTask: any
}

const initialState:Itasks={
    tasks:[],
    activeTask: null
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addNewTask:(state, action:PayloadAction<task>)=>{
            state.tasks.push({...action.payload, status:'Не сделано'})
        },
        deleteTask:(state, action:PayloadAction<string>)=>{
            if (action.payload === state.activeTask?.id) {
                state.activeTask = undefined;
            }
            state.tasks = state.tasks.filter(item=> item.id !== action.payload);
        },

        changeStatus:(state, action:PayloadAction<{id:string, status: Status, completedDate?:string}>)=>{
            const index = state.tasks.findIndex(item => item.id === action.payload.id);
            state.tasks[index] = {...state.tasks[index], status: action.payload.status};

            if(action.payload.completedDate) {
                state.tasks[index].completedDate = action.payload.completedDate;
            }
            state.activeTask = state.tasks[index];
        },
        
        toggleTaskActivity: (state, action:PayloadAction<string>) => {
            const task = state.tasks.find(item => item.id === action.payload);

            state.activeTask = task;
        },

        addNewStep:(state, action:PayloadAction<{id:string, step:step}>) => {
            const index = state.tasks.findIndex(item => item.id === action.payload.id);

            if(state.tasks[index].steps){
            state.tasks[index].steps = [...state.tasks[index].steps!, action.payload.step];
            } else {
                state.tasks[index] = {...state.tasks[index], steps:[action.payload.step]};
            }
            state.activeTask = state.tasks[index];
        },
        deleteStep:(state, action:PayloadAction<{id:string, stepId:string}>) => {
            const index = state.tasks.findIndex(item => item.id === action.payload.id);
            state.tasks[index].steps = state.tasks[index].steps!.filter(item => item.id !== action.payload.stepId);
            state.activeTask = state.tasks[index];
        },
        updateStepCompleted: (state, action:PayloadAction<{id:string, stepId:string}>) => {
            const index = state.tasks.findIndex(item => item.id === action.payload.id);

            const step = state.tasks[index].steps?.findIndex(item => item.id === action.payload.stepId);

            state.tasks[index].steps![step!].completed = !state.tasks[index].steps![step!].completed;

            state.activeTask = state.tasks[index];
        },
        addNewComment:(state, action:PayloadAction<{id:string, comment:comment}>) => {
            const index = state.tasks.findIndex(item => item.id === action.payload.id);

            if(state.tasks[index].comments){
                state.tasks[index].comments = [...state.tasks[index].comments!, action.payload.comment];
                } else {
                    state.tasks[index] = {...state.tasks[index], comments:[action.payload.comment]};
                }
            state.activeTask = state.tasks[index];
        },
    }
})

export const {
    addNewTask,
    deleteTask,
    changeStatus,
    addNewStep,
    toggleTaskActivity,
    deleteStep,
    updateStepCompleted,
    addNewComment
} = taskSlice.actions;
export default taskSlice.reducer