import { createSlice } from "@reduxjs/toolkit";



const initialState={
    tasks:[ {
        id:'19907000',
        content:"sleep",
        status: 'Выполнено',
        type:'другое'
    },
    {
        id:'144689899546862',
        content:"eat",
        status: 'В процессе',
        type:'работа'
    },
    {
        id:'365435348376',
        content:"drink some tea oh yes yes yes yes yes yes  yes",
        status: 'Выполнено',
        type:'обучение'
    },
    {
        id:'43242114',
        content:"poop",
        status: 'Не сделано',
        type:'хобби'
    }]
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addNewTask:(state, action)=>{
            state.tasks.push({...action.payload, status:'Не сделано'})
        },
        deleteTask:(state, action)=>{

        },
        changeStatus:(state, action)=>{
            const [removed] = state.tasks.splice(action.payload.source.index, 1);
            state.tasks.splice(action.payload.destination.index, 0, {...removed, status:action.payload.destination.droppableId})
        }
    }
})

export const {
    addNewTask,
    deleteTask,
    changeStatus
} = taskSlice.actions;
export default taskSlice.reducer