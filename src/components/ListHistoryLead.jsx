import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import HistoryIcon from '@mui/icons-material/History'

export default function ListHistoryLead({ history }) {
    return (
        <List sx={{
            width: '60%',
            m: 'auto',
            bgcolor: 'background.paper',
            overflow: 'auto',
            maxHeight: 300,
        }}>
            {history.map((element, index) => (
                <ListItem sx={{ maxWidth: '50%' }} key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <HistoryIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={element} />
                </ListItem>
            ))}
        </List>
    )
}