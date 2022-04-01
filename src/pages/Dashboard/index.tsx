import Router from "next/router";
import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "./components/Card"

export const Dashboard = () => {

    const array = [
        { id: '0', title: 'Netflix', category: 'streaming', cost: 39.99 },
        { id: '1', title: 'Spotify', category: 'streaming', cost: 19.99 },
        { id: '2', title: 'Amazon', category: 'streaming', cost: 29.99 },
        { id: '3', title: 'Internet', category: 'web', cost: 49.99 }
    ];

    const handleNavigationToAddNewExpense = () => {
        Router.push('/dashboard/add')
    }

    return (
        <TemplateContainer>
            <header className="w-full max-w-screen-lg max-w-sreen-lg flex justify-between h-1/6 items-center">
                <span className="font-bold text-2xl">Controlador de Gastos</span>

                <nav className="flex gap-4">
                    <Button onClick={handleNavigationToAddNewExpense}>Adicionar Nova Conta</Button>
                    <Button variant="ghost">Sair</Button>
                </nav>
            </header>

            <main className="w-full max-w-screen-lg h-5/6 grid overflow-y-scroll content-start grid-cols-3 bg-green-50 gap-4 p-4">

                {array?.map(item => (
                    <Card key={item.id} title={item.title} category={item.category} price={item.cost}></Card>
                ))}

            </main>
        </TemplateContainer>
    )
}