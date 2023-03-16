import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

interface ICheckbox {
    checked: boolean
    className?: string
    onChange: () => void
}

const AppCheckbox: React.FC<ICheckbox> = (props: ICheckbox) => {
    return (
        <Checkbox
            checked={props.checked}
            className={props.className}
            onChange={() => props.onChange()}
        ></Checkbox>
    )
}

export default AppCheckbox
