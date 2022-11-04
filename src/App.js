import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './router/privateRoute';
import { ToastContainer } from 'react-toastify';
import './assets/css/sb-admin.css'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//containers
const Splash = React.lazy(() => import('./views/splash/Splash'))
const SingIn = React.lazy(() => import('./views/signIn/SignIn'))
const Layout = React.lazy(() => import('./layout/Layout'))
const NotFound = React.lazy(() => import('./views/NotFound'))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Splash />} />
        <Route path="/signin" name="SignIn" element={<SingIn />} />
        <Route path="/createmachine" name="CreateMachine" element={<PrivateRoute><Layout child={'CreateMachine'} /></PrivateRoute>} />
        <Route path="/createzone" name="CreateZone" element={<PrivateRoute><Layout child={'CreateZone'} /></PrivateRoute>} />
        <Route path="/groupview" name="GroupView" element={<PrivateRoute><Layout child={'GroupView'} /></PrivateRoute>} />
      </Routes>
      <ToastContainer/>
    </Suspense>
  )
}

export default App

