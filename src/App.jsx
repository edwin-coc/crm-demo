import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './app/login/Login'
import ProyectOverview from './app/dashboard/ProjectOverview'
import HairTransplant from './app/dashboard/hairTranplant/HairTransplant'

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<ProyectOverview />} />
        <Route path='/dashboard/hairtransplant' element={<HairTransplant />} />
        <Route path='/dashboard/hollywoodsmile' element={<></>} />
        <Route path='/dashboard/aesthetictreatments' element={<></>} />
        <Route path='/dashboard/conciergeservices' element={<></>} />
        <Route path='/dashboard/advicesupport' element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}