import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/InputText'
import { Link } from '../../components/molecules/Link'
import { SidebarHero } from '../../components/organism/SidebarHero'
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from '../../components/templates'

export const Register = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SidebarHero />
                <TemplateMainHeroSection>
                    <h1 className='font-bold text-3xl'>Crie sua conta</h1>
                    <form className='flex flex-col w-full gap-4 max-w-xs'>
                        <InputText label="Email:" type="email" />
                        <InputText label="Senha:" type="password" />
                        <Button>Criar conta</Button>
                    </form>
                    <div className='flex justify-between w-1/2'>
                        <Link href='/'>Já possuo uma conta</Link>
                        <Link target="_blank" href="https://www.gustavovitor.info">Criador</Link>
                    </div>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    )
}
