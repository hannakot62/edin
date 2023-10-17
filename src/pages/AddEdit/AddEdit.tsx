import React, { useState } from 'react'
import style from './AddEdit.module.css'
import AppTextarea from '../../UI/Textarea/AppTextarea'
import AppDatePicker from '../../UI/DatePicker/AppDatePicker'
import AppButton from '../../UI/Button/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../../store/slices/allTodosSlice'
import { removeTodoToEdit } from '../../store/slices/todoToEditSlice'

interface IAddEdit {
    type: 'add' | 'edit'
}

const AddEdit: React.FC<IAddEdit> = (props: IAddEdit) => {
    const dispatch = useDispatch()
    const todoToEdit = useSelector((state: any) => state.todoToEdit.todoToEdit)

    const [description, setDescription] = useState(
        props.type === 'add' ? '' : todoToEdit.description
    )
    const [deadline, setDeadline] = useState(
        props.type === 'add' ? new Date() : todoToEdit.deadline
    )

    function handleAdd(description: string, deadline: Date) {
        dispatch(
            addTodo({
                description: description,
                added: new Date().valueOf(),
                deadline: deadline.valueOf(),
                done: false
            })
        )
    }
    function handleEdit(description: string, deadline: Date) {
        dispatch(deleteTodo(todoToEdit))
        dispatch(
            addTodo({
                description: description,
                deadline: deadline.valueOf(),
                added: todoToEdit.added,
                done: todoToEdit.done
            })
        )
        dispatch(removeTodoToEdit())
    }

    //

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                {props.type === 'add' ? 'Add' : 'Edit'} ToDo
            </h1>
            <label>Description:</label>

            <AppTextarea
                onChange={event => setDescription(event.target.value)}
                value={description}
            />
            <label>Date:</label>

            <AppDatePicker
                className={style.date}
                onChange={(date, dateString) => setDeadline(date)}
                value={deadline}
            />
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
                    onClick={
                        props.type === 'add'
                            ? () => handleAdd(description, deadline)
                            : () => handleEdit(description, deadline)
                    }
                />
            </div>
        </div>
    )
}

export default AddEdit
