import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

import Copyright from './Copyright'
import useLogin from '../../hooks/useLogin'
import logoAbroadcare from '../../assets/logoAbroadcare.svg'
import './login.css'

const theme = createTheme()

export default function Login() {

    const { formik, MyAlert, spinner } = useLogin()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h1>Tu Logo</h1>
                        <Typography component="h1" variant="h5" sx={{ mb: 5 }}>Log in to your account</Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Grid>
                            </Grid>
                            {spinner && <CircularProgress sx={{ display: 'flex', mx: 'auto', mt: 2 }} />}
                            {MyAlert && <Alert severity="error" sx={{ mt: 2 }}>{MyAlert}</Alert>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#C4CDD5', '&:hover': {
                                        backgroundColor: '#C4CDD5'
                                    }
                                }}
                            >
                                Login
                            </Button>
                        </form>
                    </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
}