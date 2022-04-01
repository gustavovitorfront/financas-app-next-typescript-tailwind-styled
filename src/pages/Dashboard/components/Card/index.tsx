import React from 'react'
import { Button } from '../../../../components/atoms/Button'
import tw from 'tailwind-styled-components'

export const Card = ({ title, category, price }) => {
    return (
        <CardContainer>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="px-4 h-8 flex items-center justify-center text-green-900 bg-green-100 self-start rounded-full">
                {category}
            </p>
            <p className="font-medium">R$ {price}</p>
            <footer className='w-full flex justify-between'>
                <Button variant="ghost">Editar</Button>
                <Button variant="ghost">Excluir</Button>
            </footer>
        </CardContainer>
    )
}

export const CardContainer = tw.article`
    bg-white p-4 shadow-md relative flex justify-between flex-col gap-4 pb-2
`