import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'

import MenuIcon from '@mui/icons-material/Menu'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

import theme from '../theme/dashboardTheme'
import Navigator from './Navigator'

const drawerWidth = 256

export default function ({ title = '', tabs = [] }) {

  const [mobileOpen, setMobileOpen] = useState(false)
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const [value, setValue] = useState(0)
  const handleChange = (_, newValue) => setValue(newValue)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <AppBar color="primary" position="sticky" elevation={ 0 }>
            <Toolbar>
              <Grid container spacing={1} alignItems="center">
                <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item xs>
                        <Typography color="inherit" variant="h5" component="h1">{title}</Typography>
                      </Grid>
                    </Grid>
                  </Toolbar>
                </Grid>
                  <Grid item>
                    <Tooltip title="Alerts • No alerts">
                      <IconButton color="inherit">
                        <NotificationsIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <IconButton color="inherit" sx={{ p: 0.5 }}>
                      <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                    </IconButton>
                  </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Tabs value={value} onChange={handleChange} textColor="inherit">
              {tabs.map(tab => <Tab key={tab.label} label={tab.label} />)}
            </Tabs>
          </AppBar>
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            {tabs[value].component}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}