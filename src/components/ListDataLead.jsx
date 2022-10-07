import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ListItemText from '@mui/material/ListItemText'

export default function ListDataLead({ primary, data }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <CheckCircleIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={data} />
        </ListItem>
    )
}