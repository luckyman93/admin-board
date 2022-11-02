import React, { Suspense } from 'react'
import PropTypes from 'prop-types';

const CreateProfile = React.lazy(() => import('../views/createProfile/CreateMachine'))

const AppContent = ({ subChild }) => {
  
  return (
    <Suspense>
    {
        subChild==="CreateMachine" && <CreateProfile />
    }
    </Suspense>
  )
}

AppContent.propTypes = {
  subChild: PropTypes.any,
};

export default React.memo(AppContent)