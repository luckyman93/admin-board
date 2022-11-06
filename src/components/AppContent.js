import React, { Suspense } from 'react'
import PropTypes from 'prop-types';

const CreateMachine = React.lazy(() => import('../views/createMachine/CreateMachine'))
const CreateProfile = React.lazy(() => import('../views/createProfile/CreateProfile'))
const LocationSetting = React.lazy(() => import('../views/locationSetting/LocationSetting'))
const UpdateMachine = React.lazy(() => import('../views/updateMachine/UpdateMachine'))
const CreateZone = React.lazy(() => import('../views/createZone/CreateZone'))
const UpdateZone = React.lazy(() => import('../views/updateZone/UpdateZone'))
const ApiSettings = React.lazy(() => import('../views/apiSettings/ApiSettings'))
const GroupView = React.lazy(() => import('../views/groupView/GroupView'))
const MachineView = React.lazy(() => import('../views/machineView/MachineView'))

const AppContent = ({ subChild }) => {
  
  return (
    <Suspense>
      {
        subChild === "CreateMachine" && <CreateMachine /> ||
        subChild === "CreateProfile" && <CreateProfile /> || 
        subChild === "LocationSetting" && <LocationSetting /> ||
        subChild === "UpdateMachine" && <UpdateMachine /> ||
        subChild === "CreateZone" && <CreateZone /> ||
        subChild === "UpdateZone" && <UpdateZone /> ||
        subChild === "ApiSettings" && <ApiSettings /> ||
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