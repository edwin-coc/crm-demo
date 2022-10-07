import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

import LeadTable from '../../../../components/LeadTable'

import useApplications from '../hooks/useApplications'

import Lead from './Lead'

export default function Content() {

  const { applications, fetchGetApplications, MyAlert, spinner, filter, application, fetchGetApplication } = useApplications()

  const [modal, setModal] = useState(false)

  const handleOpenModal = _idParam => {
    fetchGetApplication(_idParam)
    setModal(true)
  }
  const handleCloseModal = () => setModal(false)
  const handleChangeFilter = event => filter(event.target.value)

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs sx={{ my: 2 }}>
              <TextField
                fullWidth
                label="Search"
                placeholder="Search by email address, phone number, Name , or user UUID"
                InputProps={{ sx: { fontSize: 'default' } }}
                onChange={handleChangeFilter}
              />
            </Grid>
            <Grid item>
              <Tooltip title="Reload">
                <IconButton onClick={fetchGetApplications}>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <LeadTable
          applications={applications}
          actions
          handleOpenModal={handleOpenModal}
        >
          {spinner && <CircularProgress sx={{ display: 'flex', mx: 'auto', mt: 2 }} />}
          {MyAlert && <Alert severity="error" sx={{ mt: 2 }}>{MyAlert}</Alert>}
        </LeadTable>
        {modal && <Lead
          handleCloseModal={handleCloseModal}
          open={modal}
          data={application}
        />}
      </Paper>
    </Paper>
  )
}