import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoToEdit: null
}
const todoToEditSlice = createSlice({
    name: 'todoToEdit',
    initialState,
    reducers: {
        setTodoToEdit(state, action) {
            state.todoToEdit = action.payload
        },
        removeTodoToEdit(state) {
            state.todoToEdit = null
        }
    }
})

export const { setTodoToEdit, removeTodoToEdit } = todoToEditSlice.actions
export default todoToEditSlice.reducer
