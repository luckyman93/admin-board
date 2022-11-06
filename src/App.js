import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './router/privateRoute'
import { ToastContainer } from 'react-toastify'
import './assets/css/sb-admin.css'
import './assets/css/style.css'
import './assets/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

//containers
const Splash = React.lazy(() => import('./views/splash/Splash'))
const SingIn = React.lazy(() => import('./views/signIn/SignIn'))
const Layout = React.lazy(() => import('./layout/Layout'))
const NotFound = React.lazy(() => import('./views/NotFound'))

function App() {
  return (
    <Suspense>
      <ToastContainer/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Splash />} />
        <Route path="/signin" name="SignIn" element={<SingIn />} />
        <Route path="/createprofile" name="CreateProfile" element={<PrivateRoute><Layout child={'CreateProfile'} /></PrivateRoute>} />
        <Route path="/updatemachine" name="UpdateMachine" element={<PrivateRoute><Layout child={'UpdateMachine'} /></PrivateRoute>} />
        <Route path="/createzone" name="CreateZone" element={<PrivateRoute><Layout child={'CreateZone'} /></PrivateRoute>} />
        <Route path="/apisettings" name="ApiSettings" element={<PrivateRoute><Layout child={'ApiSettings'} /></PrivateRoute>} />
        <Route path="/groupview" name="GroupView" element={<PrivateRoute><Layout child={'GroupView'} /></PrivateRoute>} />
        <Route path="/machineview" name="MachineView" element={<PrivateRoute><Layout child={'MachineView'} /></PrivateRoute>} />
      </Routes>
    </Suspense>
  )
}

export default App