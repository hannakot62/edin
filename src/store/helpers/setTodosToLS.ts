import { TodoType } from '../../components/Todo/Todo'

export function setTodosToLS(todos: Array<TodoType>) {
    localStorage.setItem('todos', JSON.stringify(todos))
}
