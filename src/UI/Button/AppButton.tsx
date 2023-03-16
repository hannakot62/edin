import React from 'react'
import { Button } from 'antd'

interface IButton {
    text: string
    type: 'primary' | 'default' | 'link'
    size?: 'large' | 'small'
    className?: string
}

const AppButton: React.FC<IButton> = (props: IButton) => {
    return (
        <Button className={props.className} size={props.size} type={props.type}>
            {props.text}
        </Button>
    )
}

export default AppButton
