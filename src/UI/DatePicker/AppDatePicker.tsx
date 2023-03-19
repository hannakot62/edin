import React from 'react'
import { DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'

interface IDatePicker {
    value?: string
    className?: string
    onChange?: (date: any, dateString: string) => void
}

const AppDatePicker: React.FC<IDatePicker> = (props: IDatePicker) => {
    return (
        <DatePicker
            defaultValue={dayjs(props.value)}
            format={'DD/MM/YYYY'}
            className={props.className}
            onChange={props.onChange}
        />
    )
}

export default AppDatePicker
