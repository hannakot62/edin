import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import AddEdit from '../pages/AddEdit/AddEdit'
import All from '../pages/All/All'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/add" element={<AddEdit type={'add'} />} />
            <Route path="/edit" element={<AddEdit type={'edit'} />} />
            <Route path="/all" element={<All />} />

            <Route path="/*" element={<Main />} />
        </Routes>
    )
}

export default AppRouter
