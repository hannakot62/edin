import React from 'react'
import { Checkbox } from 'antd'

interface ICheckbox {
    checked: boolean
    className?: string
}

const AppCheckbox: React.FC<ICheckbox> = (props: ICheckbox) => {
    return (
        <Checkbox
            checked={props.checked}
            className={props.className}
        ></Checkbox>
    )
}

export default AppCheckbox
