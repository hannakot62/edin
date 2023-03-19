import React from 'react'
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'
import style from './Main.module.css'
import AppButton from '../../UI/Button/AppButton'
import { useSelector } from 'react-redux'
import { isToday, isTomorrow } from 'date-fns'
import { TodoType } from '../../components/Todo/Todo'

const Main: React.FC = () => {
    const todos = useSelector((state: any) => state.allTodos.allTodos)
    const todayTodos = todos.filter((todo: TodoType) => isToday(todo.deadline))
    const tomorrowTodos = todos.filter((todo: TodoType) =>
        isTomorrow(todo.deadline)
    )

    return (
        <div className={style.container}>
            <Header />
            <h2>Today</h2>
            <TodoList todos={todayTodos} />
            <h3>Tomorrow</h3>
            <TodoList todos={tomorrowTodos} />

            <AppButton
                className={style.button}
                text={'Show all...'}
                type={'link'}
                linkPath={'/all'}
            />
        </div>
    )
}

export default Main
