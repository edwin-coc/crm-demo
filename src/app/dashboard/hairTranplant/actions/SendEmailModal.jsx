import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import { modalTheme } from '../../../../theme/modalTheme'

import useEmails from '../../../../hooks/useEmails'

export default function sendEmailModal({ open, onClose, myEmail, handleChange, send, progress, emailingSuccess }) {

    const { emails } = useEmails()

    const sizeModal = () => {
        const size = emailingSuccess ? ({ width: '20%' }) : ({})
        return { ...modalTheme, ...size }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={sizeModal}>
                {emailingSuccess ? <>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <CheckCircleOutlineIcon color="success" />
                        <Typography component="div" variant="h5">OK!</Typography>
                    </Box>
                </> : <>
                    <Typography component="div" variant="h5">Select an email template</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <FormControl fullWidth>
                                <InputLabel id="emails-select-label">Email Templeate</InputLabel>
                                <Select
                                    labelId="emails-select-label"
                                    id="emails-select"
                                    value={myEmail}
                                    label="Email Templeate"
                                    onChange={handleChange}
                                >
                                    {emails.map(element => <MenuItem value={element._id} key={element._id}>{element.name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Button variant="contained" onClick={send}>Continue</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </>}
                {progress && !emailingSuccess && <Box sx={{ width: '100%', m: 2 }}>
                    <LinearProgress />
                </Box>}
            </Box>
        </Modal>
    )
}