import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface IButton {
    text: string
    type: 'primary' | 'default' | 'link'
    size?: 'large' | 'small'
    className?: string
    linkPath?: string
}

const AppButton: React.FC<IButton> = (props: IButton, children) => {
    return (
        <Button className={props.className} size={props.size} type={props.type}>
            {props.linkPath ? (
                <Link to={props.linkPath}>{props.text}</Link>
            ) : (
                props.text
            )}
        </Button>
    )
}

export default AppButton
