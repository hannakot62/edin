import { configureStore } from '@reduxjs/toolkit'
import allTodosReducer from './slices/allTodosSlice'
import todoToEditReducer from './slices/todoToEditSlice'

export const store = configureStore({
    reducer: {
        allTodos: allTodosReducer,
        todoToEdit: todoToEditReducer
    }
})
