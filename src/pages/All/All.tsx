import React from 'react'
import style from './All.module.css'
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'
import AppButton from '../../UI/Button/AppButton'

const All: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <TodoList todos={[]} />
            <AppButton
                className={style.button}
                text={'Go back'}
                type={'link'}
            />
        </div>
    )
}

export default All
