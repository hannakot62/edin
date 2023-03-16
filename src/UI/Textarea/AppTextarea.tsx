import React from 'react'
import { Input } from 'antd'
const { TextArea } = Input

interface ITextarea {
    value?: string
    className?: string
}

const AppTextarea: React.FC<ITextarea> = (props: ITextarea) => {
    return <TextArea value={props.value} className={props.className} />
}

export default AppTextarea
