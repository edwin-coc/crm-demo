import Dashboard from '../../components/Dashboard'

const tabs = [
    {
        label: 'usage',
        component: <></>
    }
]

export default function ProyectOverview() {
    return (
        <Dashboard headerTitle="Project Overview" tabs={tabs}>
            <></>
        </Dashboard>
    )
}