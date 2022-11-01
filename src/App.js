import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import './assets/css/sb-admin.css'

const SingIn = React.lazy(() => import('./views/signIn/SignIn'))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/signin" name="SignIn" element={<SingIn />} ></Route>
      </Routes>
    </Suspense>
  )
}

export default App

