import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import tw from 'tailwind-styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
}

export const Button = ({ children, variant, ...props }: Props) => {
  if (variant === 'ghost') {
    return (
      <GhostButton
        {...props}
      >
        {children}
      </GhostButton>
    )
  }

  return (
    <MainButton
      {...props}
    >
      {children}
    </MainButton>
  )
};

export const BaseButton = tw.button`
  h-10 font-bold text-white px-8 disabled:bg-gray-300 disabled:cursor-not-allowed
`

export const MainButton = tw(BaseButton)`
  bg-green-500 hover:bg-green-400
`

export const GhostButton = tw(BaseButton)`
  bg-transparent hover:bg-green-100 text-green-500
`