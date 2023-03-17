import React from 'react'
import style from './Header.module.css'
import AppButton from '../../UI/Button/AppButton'

const Header: React.FC = () => {
    return (
        <div className={style.headerContainer}>
            <h1>Your ToDos</h1>
            <AppButton text={'add'} type={'primary'} />
        </div>
    )
}

export default Header
