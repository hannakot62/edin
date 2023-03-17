import React from 'react'
import './App.css'
import 'antd/dist/reset.css'
import Todo from './components/Todo/Todo'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'

function App() {
    return (
        <div className="App">
            <Header />
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
            {/*<Todo*/}
            {/*    description={' dfhds ff fh af ashf sif if '}*/}
            {/*    added={new Date()}*/}
            {/*    deadline={new Date(3)}*/}
            {/*    done={true}*/}
            {/*/>*/}
        </div>
    )
}

export default App
