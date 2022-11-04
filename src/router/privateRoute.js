import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history } from '../history';

export { PrivateRoute };

function PrivateRoute({ children }) {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/signin" state={{ from: history.location }} /> 
    }

    // authorized so return child components
    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.any,
};