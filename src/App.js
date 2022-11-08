import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './router/privateRoute'
import { Spin } from 'antd'
import './assets/css/sb-admin.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

//containers
const Splash = React.lazy(() => import('./views/Splash'))
const SingIn = React.lazy(() => import('./views/SignIn'))
const Layout = React.lazy(() => import('./layout/Layout'))
const NotFound = React.lazy(() => import('./views/NotFound'))

function App() {
  return (
    <Suspense fallback={<Spin/>}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Splash />} />
        <Route path="/signin" name="SignIn" element={<SingIn />} />
        <Route path="/createmachine" name="CreateMachine" element={<PrivateRoute><Layout child={'CreateMachine'} /></PrivateRoute>} />
        <Route path="/createmachine/profilecreation" name="CreateProfile" element={<PrivateRoute><Layout child={'CreateProfile'} /></PrivateRoute>} />
        <Route path="/createmachine/profilecreation" name="CreateProfile" element={<PrivateRoute><Layout child={'CreateProfile'} /></PrivateRoute>} />
        <Route path="/createmachine/locationsetting" name="LocationSetting" element={<PrivateRoute><Layout child={'LocationSetting'} /></PrivateRoute>} />
        <Route path="/updatemachine" name="UpdateMachine" element={<PrivateRoute><Layout child={'UpdateMachine'} /></PrivateRoute>} />
        <Route path="/createzone" name="CreateZone" element={<PrivateRoute><Layout child={'CreateZone'} /></PrivateRoute>} />
        <Route path="/updatezone" name="UpdateZone" element={<PrivateRoute><Layout child={'UpdateZone'} /></PrivateRoute>} />
        <Route path="/apisettings" name="ApiSettings" element={<PrivateRoute><Layout child={'ApiSettings'} /></PrivateRoute>} />
        <Route path="/groupview" name="GroupView" element={<PrivateRoute><Layout child={'GroupView'} /></PrivateRoute>} />
        <Route path="/machineview" name="MachineView" element={<PrivateRoute><Layout child={'MachineView'} /></PrivateRoute>} />
      </Routes>
    </Suspense>
  )
}

export default App