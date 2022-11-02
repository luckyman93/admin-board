import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/sb-admin.css'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//containers
const SingIn = React.lazy(() => import('./views/signIn/SignIn'))
const Layout = React.lazy(() => import('./layout/Layout'))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/signin" name="SignIn" element={<SingIn />} ></Route>
        <Route path="/createmachine" name="CreateMachine" element={<Layout child={'CreateMachine'} />} />
      </Routes>
    </Suspense>
  )
}

export default App

