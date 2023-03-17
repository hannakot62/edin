import React from 'react'
import './App.css'
import 'antd/dist/reset.css'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    )
}

export default App
