import React from 'react'
import './App.css'
import 'antd/dist/reset.css'
import Todo from './components/Todo/Todo'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import Main from './pages/Main/Main'
import All from './pages/All/All'
import AddEdit from './pages/AddEdit/AddEdit'

function App() {
    return (
        <div className="App">
            <AddEdit type={'edit'} />
        </div>
    )
}

export default App
