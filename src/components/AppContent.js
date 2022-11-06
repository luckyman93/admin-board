import React, { Suspense } from 'react'
import PropTypes from 'prop-types';

const CreateProfile = React.lazy(() => import('../views/createProfile/CreateProfile'))
const CreateZone = React.lazy(() => import('../views/createZone/CreateZone'))
const GroupView = React.lazy(() => import('../views/groupView/GroupView'))
const ApiSettings = React.lazy(() => import('../views/apiSettings/ApiSettings'))
const MachineView = React.lazy(() => import('../views/machineView/MachineView'))

const AppContent = ({ subChild }) => {
  
  return (
    <Suspense>
      {
        subChild === "CreateProfile" && <CreateProfile /> || 
        subChild === "ApiSettings" && <ApiSettings /> ||
        subChild === "CreateZone" && <CreateZone /> ||
        subChild === "GroupView" && <GroupView /> ||
        subChild === "MachineView" && <MachineView />
      }
    </Suspense>
  )
}

AppContent.propTypes = {
  subChild: PropTypes.any,
};

export default React.memo(AppContent)