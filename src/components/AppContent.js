import React, { Suspense } from 'react'
import PropTypes from 'prop-types';

const CreateProfile = React.lazy(() => import('../views/createProfile/CreateMachine'))
const GroupView = React.lazy(() => import('../views/groupView/GroupView'))
const CreateZone = React.lazy(() => import('../views/createZone/CreateZone'))

const AppContent = ({ subChild }) => {
  
  return (
    <Suspense>
      {
        subChild==="CreateMachine" && <CreateProfile /> || 
        subChild==="GroupView" && <GroupView /> ||
        subChild==="CreateZone" && <CreateZone />
      }
    </Suspense>
  )
}

AppContent.propTypes = {
  subChild: PropTypes.any,
};

export default React.memo(AppContent)