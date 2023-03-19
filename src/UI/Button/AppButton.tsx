import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface IButton {
    text: string
    type: 'primary' | 'default' | 'link'
    size?: 'large' | 'small'
    className?: string
    linkPath?: string
    onClick?: any
}

const AppButton: React.FC<IButton> = (props: IButton) => {
    return (
        <Button
            className={props.className}
            size={props.size}
            type={props.type}
            onClick={props.onClick}
        >
            {props.linkPath ? (
                <Link to={props.linkPath}>{props.text}</Link>
            ) : (
                props.text
            )}
        </Button>
    )
}

export default AppButton
