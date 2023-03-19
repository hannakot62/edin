import React from 'react'
import style from './All.module.css'
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'
import AppButton from '../../UI/Button/AppButton'
import { useSelector } from 'react-redux'

const All: React.FC = () => {
    const todos = useSelector((state: any) => state.allTodos.allTodos)
    return (
        <div className={style.container}>
            <Header />
            <TodoList todos={todos} />
            <AppButton
                className={style.button}
                text={'Go back'}
                type={'link'}
                linkPath={'/main'}
            />
        </div>
    )
}

export default All
