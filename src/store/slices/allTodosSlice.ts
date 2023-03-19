import { createSlice } from '@reduxjs/toolkit'
import { getTodosFromLS } from '../helpers/getTodosFromLS'
import { setTodosToLS } from '../helpers/setTodosToLS'
import { removeTodosFromLS } from '../helpers/removeTodosFromLS'
import { TodoType } from '../../components/Todo/Todo'

const initialState = {
    allTodos: getTodosFromLS()
}
const allTodosSlice = createSlice({
    name: 'allTodos',
    initialState,
    reducers: {
        setTodos(state, action) {
            setTodosToLS(action.payload.allTodos)
            state.allTodos = action.payload.allTodos
        },
        removeTodos(state) {
            removeTodosFromLS()
            state.allTodos = []
        },
        addTodo(state, action) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.allTodos.push({
                description: action.payload.description,
                added: action.payload.added,
                deadline: action.payload.deadline,
                done: action.payload.done
            })
            state.allTodos.sort(
                (a: TodoType, b: TodoType) =>
                    a.deadline.valueOf() - b.deadline.valueOf()
            )
            setTodosToLS(state.allTodos)
        },
        deleteTodo(state, action) {
            const index = state.allTodos.findIndex(
                (todo: TodoType) =>
                    todo.description === action.payload.description &&
                    todo.deadline === action.payload.deadline &&
                    todo.added === action.payload.added &&
                    todo.done === action.payload.done
            )
            state.allTodos.splice(index, 1)
            setTodosToLS(state.allTodos)
        },
        checkTodo(state, action) {
            const index = state.allTodos.findIndex(
                (todo: TodoType) =>
                    todo.description === action.payload.description &&
                    todo.deadline === action.payload.deadline &&
                    todo.added === action.payload.added &&
                    todo.done === action.payload.done
            )
            state.allTodos[index].done = !state.allTodos[index].done
            setTodosToLS(state.allTodos)
        }
    }
})

export const { setTodos, removeTodos, addTodo, deleteTodo, checkTodo } =
    allTodosSlice.actions
export default allTodosSlice.reducer
