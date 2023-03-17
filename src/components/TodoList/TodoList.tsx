import React from 'react'
import { TodoType } from '../Todo/Todo'
import Todo from '../Todo/Todo'

interface ITodoList {
    todos: Array<TodoType>
}

const TodoList: React.FC<ITodoList> = (props: ITodoList) => {
    const todosToRender = props.todos.map(item => (
        <Todo
            key={item.description}
            description={item.description}
            added={item.added}
            deadline={item.deadline}
            done={item.done}
        />
    ))
    return (
        <div>
            {todosToRender.length ? todosToRender : <h3>no todos, chill :)</h3>}
        </div>
    )
}

export default TodoList
