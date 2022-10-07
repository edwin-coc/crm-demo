import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'

import useStates from '../hooks/useStates'

export default function ListStatusLead ({ checked, submitToogleChecked, dataId }) {

    const { states } = useStates()

    return (
        <>
            <Typography variant="h6" component="h6" align="center">Status</Typography>
            <List sx={{ minWidth: '100%', bgcolor: 'background.paper' }}>
                {states.map(element => (
                    <ListItem key={element}>
                        {checked && <ListItemButton onClick={() => submitToogleChecked({ element, _id: dataId })} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked[element]}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={element} primary={element} />
                        </ListItemButton>}
                    </ListItem>
                ))}
            </List>
        </>
    )
}