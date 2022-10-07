
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import useTags from '../hooks/useTags'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

export default function ListTagsLead ({ myTags, handleChangeTags, submitAddTags, dataId, tagsList, deleteTag }) {

    const { tags } = useTags()

    return (
        <>
            <Typography variant="h6" component="h6" align="center">Tags</Typography>
            <Grid container alignItems="center">
                <Grid item xs={8}>
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <InputLabel id="checkbox-tags">Tags</InputLabel>
                        <Select
                            labelId="checkbox-tags"
                            id="multiple-tags"
                            multiple
                            value={myTags}
                            onChange={handleChangeTags}
                            input={<OutlinedInput label="Tags" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {tags.map(tag => (
                                <MenuItem key={tag._id} value={tag.tag}>
                                    <ListItemText primary={tag.tag} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        endIcon={<BookmarkIcon /> }
                        sx={{ mx: 'auto', display: 'flex', flexFlow: 'row nowrap' }}
                        onClick={() => submitAddTags({ _id: dataId })}
                        >Save
                    </Button>
                </Grid>
                <List sx={{ mx: 10, mt: 2, overflow: 'auto', maxHeight: 250, width: '100%', maxWidth: 360, }}>
                    {tagsList && tagsList.map(element => (
                        <ListItem
                            key={element}
                            disableGutters
                            secondaryAction={
                                <IconButton onClick={() => deleteTag({ _id: dataId, tag: element })}>
                                    <RemoveCircleOutlineIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemText primary={element} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </>
    )
}