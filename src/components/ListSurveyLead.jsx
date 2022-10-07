import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function ListSurveyLead({ survey }) {
    return (
        <List sx={{
            width: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {survey.map(element => (
                <ListItem sx={{ maxWidth: '50%' }} key={element._id}>
                    <ListItemAvatar>
                        <Avatar>
                            <HelpOutlineIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={element.question}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >{element.responseOptions}</Typography>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                >{element.responseSpecify}</Typography>
                            </>
                        }
                    />
                </ListItem>
            ))}
        </List>
    )
}