import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {

    return (
        <div>
            <h1>Home</h1>
            <Link to={'/signin'}>SignIn</Link>
        </div>
    )
}

export default NotFound
