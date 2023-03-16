import React from 'react'
import './App.css'
import 'antd/dist/reset.css'
import Todo from './components/Todo/Todo'

function App() {
    return (
        <div className="App">
            <Todo
                description={' dfhds ff fh af ashf sif if '}
                added={new Date()}
                deadline={new Date(3)}
                done={true}
            />
        </div>
    )
}

export default App
