import React, { useState } from 'react'
import AppCheckbox from '../../UI/Checkbox/AppCheckbox'
import { lightFormat, formatDistanceToNow } from 'date-fns'
import AppButton from '../../UI/Button/AppButton'
import style from './Todo.module.css'
import { useDispatch } from 'react-redux'
import { checkTodo, deleteTodo } from '../../store/slices/allTodosSlice'
import { setTodoToEdit } from '../../store/slices/todoToEditSlice'

export type TodoType = {
    description: string
    added: Date
    deadline: Date
    done: boolean
}

const Todo: React.FC<TodoType> = (props: TodoType) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(props.done)
    function handleCheckbox() {
        dispatch(
            checkTodo({
                description: props.description,
                deadline: props.deadline,
                added: props.added,
                done: checked
            })
        )
        setChecked(!checked)
    }
    function handleEdit(todo: TodoType) {
        dispatch(setTodoToEdit(todo))
    }

    function handleDelete(todo: TodoType) {
        dispatch(deleteTodo(todo))
    }
    return (
        <div className={style.container}>
            <div className={style.checkboxContainer}>
                <AppCheckbox checked={checked} onChange={handleCheckbox} />
            </div>
            <div className={style.mainContainer}>
                <h3>{props.description}</h3>
                <h5>Added {formatDistanceToNow(props.added)} ago</h5>
            </div>
            <div className={style.endContainer}>
                <h5>{lightFormat(props.deadline, 'd/M/y')}</h5>
                <div className={style.buttons}>
                    <AppButton
                        text={'edit'}
                        type={'default'}
                        size={'small'}
                        linkPath={'/edit'}
                        onClick={() =>
                            handleEdit({
                                description: props.description,
                                deadline: props.deadline,
                                added: props.added,
                                done: props.done
                            })
                        }
                    />
                    <AppButton
                        text={'delete'}
                        type={'default'}
                        size={'small'}
                        linkPath={'/main'}
                        onClick={() =>
                            handleDelete({
                                description: props.description,
                                deadline: props.deadline,
                                added: props.added,
                                done: props.done
                            })
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Todo
