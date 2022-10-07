import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete'
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import ColorizeIcon from '@mui/icons-material/Colorize'

import LeadTable from '../../../../components/LeadTable'

export default function Panel({ leads = [], handleOpenModalEmail }) {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography component="div" variant="h5">{leads.length}</Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">Leads</Typography>
        </Box>
      </Grid>
      <Grid item xs={8} sx={{ my: 2, px: 2 }}>
        { leads.length === 0 ? (<Alert severity="info">no leads found!</Alert>) : (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MarkEmailReadIcon />}
                onClick={handleOpenModalEmail}
              >Send Emails</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="error" startIcon={<AutoDeleteIcon />}>Delete</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="info" startIcon={<SecurityUpdateGoodIcon />}>Update Status</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="warning" startIcon={<ClearAllIcon />}>Clear Tags</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="success" startIcon={<ColorizeIcon />}>Extract</Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
    <LeadTable
        applications={leads}
      >{/*
        {spinner && <CircularProgress sx={{ display: 'flex', mx: 'auto', mt: 2 }} />}
      {MyAlert && <Alert severity="error" sx={{ mt: 2 }}>{MyAlert}</Alert>}*/}
      </LeadTable>
    </>
  )
}