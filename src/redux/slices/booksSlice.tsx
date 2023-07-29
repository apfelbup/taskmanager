import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {book} from '../../interfaces';

interface Ibooks {
    books: book[]
}

const initialState:Ibooks = {
    books:[]
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addNewBook:(state, action:PayloadAction<book>) => {
            state.books.push({...action.payload, status:'Не прочитано'});
        },

        deleteBook:(state, action:PayloadAction<string>) => {
            state.books = state.books.filter(item => item.id !== action.payload);
        },

        changeBookStatus:(state, action)=>{
            const [removed] = state.books.splice(action.payload.source.index, 1);
            state.books.splice(action.payload.destination.index, 0, {...removed, status:action.payload.destination.droppableId})
        },

        changePagesValue:(state, action:PayloadAction<{id:string,pages: number}>)=>{
            const index = state.books.findIndex(item => item.id === action.payload.id);

            state.books[index] = {...state.books[index], pagesLeft: action.payload.pages};
        },

        changeRating: (state, action:PayloadAction<{id:string, rating:number}>) => {
            const index = state.books.findIndex(item => item.id === action.payload.id);

            state.books[index] = {...state.books[index], rating: action.payload.rating};
        }
    }
})

export const {
                addNewBook, 
                changeBookStatus, 
                changeRating, 
                deleteBook, 
                changePagesValue
            } = booksSlice.actions;
            
export default booksSlice.reducer;