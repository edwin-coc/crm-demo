import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ListItemText from '@mui/material/ListItemText'

export default function ListUtmsLead({ utms }) {
    return (
        <List sx={{
            width: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {Object.keys(utms).map((element, index) => (
                <ListItem sx={{ maxWidth: '50%' }} key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <HelpOutlineIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={element}
                        secondary={utms[element]}
                    />
                </ListItem>
            ))}
        </List>
    )
}