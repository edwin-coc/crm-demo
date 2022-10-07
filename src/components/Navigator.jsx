import { NavLink, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'

import PersonIcon from '@mui/icons-material/Person'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import PublicIcon from '@mui/icons-material/Public'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import TimerIcon from '@mui/icons-material/Timer'
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup'
import HomeIcon from '@mui/icons-material/Home'

import useRole from '../hooks/useRoles'
import './style.css'

const categories = [
  {
    id: 'Services',
    children: [
      { id: 'Database / canal', icon: <PersonIcon />, to: '/dashboard/hairtransplant' },
      { id: 'Database / canal', icon: <InsertEmoticonIcon />, to: '/dashboard/hollywoodsmile' },
      { id: 'Database / canal', icon: <AccessibilityNewIcon />, to: '/dashboard/aesthetictreatments' },
      { id: 'Database / canal', icon: <PublicIcon />, to: '/dashboard/conciergeservices' },
      { id: 'Database / canal', icon: <SettingsEthernetIcon />, to: '/dashboard/advicesupport' },
    ],
  },
  {
    id: 'Management',
    children: [
      { id: 'Users', icon: <GroupIcon /> },
      { id: 'Settings', icon: <SettingsIcon /> },
      { id: 'Email Templates', icon: <AttachEmailIcon /> },
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
//      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
]

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': { bgcolor: 'rgba(255, 255, 255, 0.08)' }
}

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
}


export default function Navigator(props) {

  const { ...other } = props
  const { role } = useRole()
  const { pathname } = useLocation()

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>Ishim Hub</ListItem>
        <NavLink to="/dashboard">
          <ListItem sx={{ ...item, ...itemCategory }} selected={pathname === '/dashboard'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Project Overview</ListItemText>
          </ListItem>
        </NavLink>
        <Box>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: '#fff' }}>Services</ListItemText>
          </ListItem>
          {
            categories[0].children.map(({ id: childId, icon, to }) => (
              <NavLink to={to} key={to}>
                <ListItem disablePadding key={ childId }>
                  <ListItemButton selected={pathname === to} sx={ item }>
                    <ListItemIcon>{ icon }</ListItemIcon>
                    <ListItemText>{ childId }</ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))
          }
        </Box>
        {
          (role === 'admin' || role === 'collaborator') && <Box>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>Management</ListItemText>
            </ListItem>
            {
              categories[1].children.map(({ id: childId, icon, active }) => (
                <ListItem disablePadding key={ childId }>
                  <ListItemButton selected={active} sx={ item }>
                    <ListItemIcon>{ icon }</ListItemIcon>
                    <ListItemText>{ childId }</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </Box>
        }
      </List>
    </Drawer>
  )
}