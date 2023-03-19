import React from 'react'
import { Input } from 'antd'
const { TextArea } = Input

interface ITextarea {
    value?: string
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const AppTextarea: React.FC<ITextarea> = (props: ITextarea) => {
    return (
        <TextArea
            value={props.value}
            className={props.className}
            onChange={props.onChange}
        />
    )
}

export default AppTextarea
