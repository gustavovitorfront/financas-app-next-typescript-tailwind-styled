import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.div`
    w-screen h-screen bg-gray-50 flex items-center flex-col
`

export const TemplateContent = tw.div`
    w-full max-w-screen-lg h-full grid grid-cols-1 md:grid-cols-2
`

export const TemplateMainHeroSection = tw.main`
    flex flex-col justify-center items-center gap-16
`