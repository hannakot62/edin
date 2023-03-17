import React from 'react'
import style from './AddEdit.module.css'
import AppTextarea from '../../UI/Textarea/AppTextarea'
import AppDatePicker from '../../UI/DatePicker/AppDatePicker'
import AppButton from '../../UI/Button/AppButton'

interface IAddEdit {
    type: 'add' | 'edit'
}

const AddEdit: React.FC<IAddEdit> = (props: IAddEdit) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                {props.type === 'add' ? 'Add' : 'Edit'} ToDo
            </h1>
            <label>Description:</label>

            <AppTextarea />
            <label>Date:</label>

            <AppDatePicker className={style.date} />
            <div className={style.buttons}>
                <AppButton
                    text={'cancel'}
                    type={'default'}
                    linkPath={'/main'}
                />
                <AppButton
                    text={props.type}
                    type={'primary'}
                    linkPath={'/main'}
                />
            </div>
        </div>
    )
}

export default AddEdit
