import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

import Panel from './panel'
import SendEmailModal from './SendEmailModal'

import useStates from '../../../../hooks/useStates'
import useTags from '../../../../hooks/useTags'
import useTagsHairTransplant from '../hooks/useTagsHairTransplant'

import { searchByStatusHairTransplant, searchByTagsHairTransplant, searchByStatusTagsHairTransplant } from '../../../../requests/search'
import { postHairTransplantEmailingStatus, postHairTransplantEmailingTags, postHairTransplantEmailingStatusTags } from '../../../../requests/emails'

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

export default function Actions() {

    const [myStates, setMyStates] = useState([])
    const [searchType, setSearchType] = useState('')
    const [panel, setPanel] = useState(false)
    const [leads, setLeads] = useState([])
    const [modalEmail, setModalEmail] = useState(false)
    const [progress, setProgress] = useState(false)
    const [emailingSuccess, setEmailingSucceess] = useState(false)

    const handleOpenModalEmail = () => setModalEmail(true)
    const handleCloseModalEmail = () => {
        setProgress(false)
        setEmailingSucceess(false)
        setModalEmail(false)
    }

    const { states } = useStates()
    const { tags } = useTags()
    const { myTags, handleChangeTags } = useTagsHairTransplant()

    const handleChangeSearchType = event => setSearchType(event.target.value)
    const handleChange = event => {
      const { target: { value } } = event
      setMyStates(typeof value === 'string' ? value.split(',') : value)
    }

    const search = async () => {
        if(searchType === 'Search By Status') {
            const result = await searchByStatusHairTransplant({ myStates })
            setLeads(result.data)
            setPanel(true)
            return
        }
        if(searchType === 'Search By Tags') {
            const result = await searchByTagsHairTransplant({ myTags })
            setLeads(result.data)
            setPanel(true)
            return
        }
        if(searchType === 'Search By Status and Tags') {
            const result = await searchByStatusTagsHairTransplant({ myStates, myTags })
            setLeads(result.data)
            setPanel(true)
            return
        }
        setPanel(false)
        return
    }

    const [myEmail, setMyEmail] = useState('')

    const handleChangeEmail = event => {
        const { target: { value } } = event
        setMyEmail(value)
    }

    const sendEmails = async () => {
        try {
            setProgress(true)
            if(searchType === 'Search By Status') {
                await postHairTransplantEmailingStatus({ myStates, _idTemplate: myEmail })
                setEmailingSucceess(true)
                return
            }
            if(searchType === 'Search By Tags') {
                await postHairTransplantEmailingTags({ tags: myTags, _idTemplate: myEmail })
                setEmailingSucceess(true)
                return
            }
            if(searchType === 'Search By Status and Tags') {
                await postHairTransplantEmailingStatusTags({ application, survey, photos, payment, tags: myTags, _idTemplate: myEmail })
                setEmailingSucceess(true)
                return
            }
        } catch (error) {
            setProgress(false)
            setEmailingSucceess(false)
            alert(error.message)
        }
    }

    return (
        <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={0.4}>
                            <SearchIcon color="inherit" />
                        </Grid>
                        <Grid item xs={3.1}>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="search-type">Search Type</InputLabel>
                                    <Select
                                        labelId="search-type"
                                        id="type-select"
                                        value={searchType}
                                        label="Search Type"
                                        onChange={handleChangeSearchType}
                                    >
                                        <MenuItem value={'Search By Status'}>Search By Status</MenuItem>
                                        <MenuItem value={'Search By Tags'}>Search By Tags</MenuItem>
                                        <MenuItem value={'Search By Status and Tags'}>Search By Status and Tags</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6.7}>
                            {(searchType === 'Search By Status' || searchType === 'Search By Status and Tags') && (
                                <FormControl sx={{ my: 1, width: '100%' }}>
                                    <InputLabel id="checkbox-status">Status</InputLabel>
                                    <Select
                                        labelId="checkbox-status"
                                        id="multiple-checkbox"
                                        multiple
                                        value={myStates}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Status" />}
                                        renderValue={selected => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {states.map(state => (
                                            <MenuItem key={state} value={state}>
                                                <Checkbox checked={myStates.indexOf(state) > -1} />
                                                <ListItemText primary={state} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                            {(searchType === 'Search By Tags' || searchType === 'Search By Status and Tags') && (
                                <FormControl sx={{ my: 1, width: '100%' }}>
                                    <InputLabel id="checkbox-tags-actions">Tags</InputLabel>
                                    <Select
                                        labelId="checkbox-tags-actions"
                                        id="multiple-tags-actions"
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
                            )}
                        </Grid>
                        <Grid item xs={1.8}>
                            <Button variant="contained" onClick={search}>Search</Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {panel && <Panel leads={leads} handleOpenModalEmail={handleOpenModalEmail}/>}
            {modalEmail && <SendEmailModal
                open={modalEmail}
                onClose={handleCloseModalEmail}
                handleChange={handleChangeEmail}
                myEmail={myEmail}
                send={sendEmails}
                progress={progress}
                emailingSuccess={emailingSuccess}
            />}
        </Paper>
    )
}