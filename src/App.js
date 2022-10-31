import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
// import { PrivateRoute } from './privateRoute';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
// const Layout = React.lazy(() => import('./layout/Layout'))
const SingIn = React.lazy(() => import('./views/signIn/SingIn'))


function App() {
  
  return (
    // <Suspense fallback={loading}>
      <Routes>
        <Route path="/signin" name="signin" element={<SingIn />} />
        {/* <Route path="/login" name="Login" element={<Login />} />
        <Route path="/" name="Dashboard" element={<PrivateRoute><Layout child={'Genre'} /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/genre" name="Genre" element={<PrivateRoute><Layout child={'Genre'} /></PrivateRoute>} />
        <Route path="/urls" name="Urls" element={<PrivateRoute><Layout child={'Urls'} /></PrivateRoute>} />
        <Route path="/blogs" name="Blogs" element={<PrivateRoute><Layout child={'Blog'} /></PrivateRoute>} />
        <Route path="/setting" name="Settings" element={<PrivateRoute><Layout child={'Setting'} /></PrivateRoute>} /> */}
      </Routes>
    // </Suspense>
  )
}

export default App

