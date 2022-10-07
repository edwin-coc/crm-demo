import Dashboard from '../../../components/Dashboard'
import Leads from './leads/Leads'
import Actions from './actions/Actions'

const tabs = [
    {
        label: 'leads',
        component: <Leads />
    },
    {
        label: 'actions',
        component: <Actions />
    },
    {
        label: 'performace',
        component: <></>
    },
    {
        label: 'usage',
        component: <></>
    },
]

export default function HairTransplant() {
    return (
        <Dashboard title="Database / canal" tabs={tabs}></Dashboard>
    )
}