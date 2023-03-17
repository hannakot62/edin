import React from 'react'
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'
import style from './Main.module.css'
import AppButton from '../../UI/Button/AppButton'

const Main: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <h2>Today</h2>
            <TodoList
                todos={[
                    {
                        description: 'eeeee',
                        added: new Date(),
                        deadline: new Date(),
                        done: true
                    },
                    {
                        description: 'fffff',
                        added: new Date(),
                        deadline: new Date(),
                        done: false
                    },
                    {
                        description: '1',
                        added: new Date(),
                        deadline: new Date(),
                        done: true
                    }
                ]}
            />
            <h3>Tomorrow</h3>
            <TodoList todos={[]} />

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
