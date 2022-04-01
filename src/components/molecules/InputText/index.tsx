import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText = ({label, ...props}: Props) => {
    return (
        <label className='flex flex-col w-full'>
            <span>{label}</span>
            <input className='border border-gray-200 h-10 px-2' {...props} />
        </label>
    )
}
