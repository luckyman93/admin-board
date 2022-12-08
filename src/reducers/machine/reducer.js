import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify'

// Slice
const Machine = createSlice({
  name: 'machine',
  initialState: {
    isMachineLoading: false,
    isSuccessPopup : false,
    arrMachineList : [],
    objMachineDetail : {},
    objMCLocation : {},
    objMcHealth : {},
    arrImageList : [],
    arrMachineType : [],
    objSuccessData : {}
  },
  reducers: {
    LoadingRequest: (state) => {
      state.isMachineLoading = true
    },
    LoadingCrtMachinSuccess: (state) => {
      state.isMachineLoading = false
    },
    LoadingGetMcListSuccess: (state, action) => {
      state.isMachineLoading = false
      state.arrMachineList = action.payload
    },
    LoadingGetMcDetailSuccess: (state, action) => {
      state.isMachineLoading = false
      state.objMachineDetail = action.payload
    },
    LoadingUpdateMcByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.objMachineDetail = action.payload
    },
    LoadingGetMcLocationByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.objMCLocation = action.payload
    },
    LoadingCrtMcLocationByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.isSuccessPopup = true
      state.objSuccessData = action.payload
    },
    LoadingUpdMcLocationByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.objMCLocation = action.payload
    },
    LoadingGetMcHealthByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.objMcHealth = action.payload
    },
    LoadingGetMcImagesByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.arrImageList = action.payload
    },
    LoadingGetMcTypeByIdSuccess: (state, action) => {
      state.isMachineLoading = false
      state.arrMachineType = action.payload
    },
    LoadingCrMcProByIdSuccess: (state) => {
      state.isMachineLoading = false
    },    
    LoadingMachineBySiteOrZoneSuccess: (state, action) => {
      state.isMachineLoading = false
      state.arrMachineList = action.payload
    },
    LoadingFailure: (state, action) => {
      state.isMachineLoading = false
      switch(action.payload) {
        case 'health':
          state.objMcHealth = {}
          break
        case 'machine':
          state.arrMachineList = []
          break
        case 'image':
          state.arrImageList = []
          break
        case 'machineDetail':
          state.objMachineDetail = {}
          break
        case 'updatingMachine':
          state.objMachineDetail = {}
          break
        case 'location':
          state.objMCLocation = {}
          break
        case 'machineType':
          state.arrMachineType = []
          break
        case 'isSuccessPopup':
          state.isSuccessPopup = false
        break
        default:
          break
      }
    }
  },
});

// Actions
const { 
  LoadingRequest,
  LoadingFailure,
  LoadingCrtMachinSuccess,
  LoadingGetMcListSuccess,
  LoadingGetMcDetailSuccess,
  LoadingUpdateMcByIdSuccess,
  LoadingGetMcLocationByIdSuccess,
  LoadingCrtMcLocationByIdSuccess,
  LoadingUpdMcLocationByIdSuccess,
  LoadingGetMcHealthByIdSuccess,
  LoadingGetMcImagesByIdSuccess,
  LoadingGetMcTypeByIdSuccess,
  LoadingCrMcProByIdSuccess,
  LoadingMachineBySiteOrZoneSuccess
} = Machine.actions

// create new machine
export const createNewMachine = (groupId) => async dispatch => {
  //validation groupId
  if (groupId === 0) return toast.error('Please select a group!')

  const data = {
    "groupId": groupId,
    "registeredAt": new Date().toJSON(),
  }
  try {
    dispatch(LoadingRequest())
    apiClient.createNewMachine(data)
      .then((response)=>{
        if (response.status === 200) {
          //store new creating state in localstorage
          let item = {
            "creation_statue": 1,
            "machine_id": response.data.id
          }
          localStorage.setItem('Machine Creating Status', JSON.stringify(item))
          //..end
          toast.success('New machine created successfully!')
          dispatch(LoadingCrtMachinSuccess())
        }
      })
      .catch((error) => {
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure())
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message)
  }
}

// get all machine list..
export const getMachineList = () => async dispatch => {  
  try {
    dispatch(LoadingRequest())
    apiClient.getMachineList()
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcListSuccess(response.data))
        } else {
          dispatch(LoadingFailure())
        }
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('machine'))
      })
  } catch (e) {
    console.error(e.message)
  }
}

// get machine detail by id..
export const getMcDetailById = (id) => async dispatch => {  
  try {
    dispatch(LoadingRequest())
    apiClient.getMcDetailById(id)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcDetailSuccess(response.data))
        } 
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('machineDetail'))
      })
  } catch (e) {
    console.error(e.message)
  }
}

//update machine by id
export const upDateSvOrderCode = (id, code, activeAt) => async dispatch => {
  //validation
  if (!valid(code)) return toast.error('Please enter the Server code!')
  if (!valid(activeAt)) return toast.error('Please enter the Server Activated Date!')

  let data = {
    "serverOrderCode": code,
    "serverOrderActiveDate": activeAt + ":00.00Z",
  }
  
  try {
    dispatch(LoadingRequest())
    apiClient.upDateSvOrderCode(id, data)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingUpdateMcByIdSuccess(response.data))
          toast.success('updated successfully!')
        } 
      })
  } catch (e) {
    console.error(e.message)
  }
}

//get machine location by id
export const getMcLocationById = (id) => async dispatch => {
  
  try {
    dispatch(LoadingRequest())
    apiClient.getMcLocationById(id)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcLocationByIdSuccess(response.data))
        }
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('location'))
      })
  } catch (e) {
    console.error(e.message)
  }
}

//create machine location by id
export const createMcLocationById = (data) => async dispatch => {
  let id = JSON.parse(localStorage.getItem('Machine Creating Status')).machine_id
  try {
    dispatch(LoadingRequest())
    apiClient.createMcLocationById(id, data)
      .then((response)=>{
        if (response.status === 200) {
          toast.success('Create machine location successfully!')
          dispatch(LoadingCrtMcLocationByIdSuccess(response.data))
        }
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure())
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message)
  }
}

// intitial successPopup state
export const intitialIsSuccessPopup = () => async dispatch => {
  dispatch(LoadingFailure('isSuccessPopup'))
}

//update machine location by Id
export const updateMachineLocationById = (re, la, lo, zo, id) => async dispatch => {

  if (re.length >= 3) return toast.error('The maximum character length must be less than 3.')
  let data = {
    region: re,
    zone: zo,
    latitude: la,
    longitude: lo
  }

  try {
    dispatch(LoadingRequest())
    apiClient.updateMcLocationById(data, id)
      .then((response)=>{
        if (response.status === 200) {
          toast.success('Update successfully')
          dispatch(LoadingUpdMcLocationByIdSuccess(response.data))
        } 
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('updatingMachine'))
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message)
  }
}

//get machine Health by id
export const getMcHealthById = (id) => async dispatch => {
  
  try {
    dispatch(LoadingRequest())
    apiClient.getMcHealthById(id)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcHealthByIdSuccess(response.data))
        } 
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('health'))
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message)
  }
}

//get machine image by id
export const getGetMcImageById = (id) => async dispatch => {
  
  try {
    dispatch(LoadingRequest())
    apiClient.getGetMcImageById(id)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcImagesByIdSuccess(response.data))
        } 
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('image'))
      })
  } catch (e) {
    console.error(e.message)
  }
}

//get machine type by id
export const getMachineTypeList = () => async dispatch => {
  
  try {
    dispatch(LoadingRequest())
    apiClient.getMachineTypeList()
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingGetMcTypeByIdSuccess(response.data))
        } 
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure('machineType'))
      })
  } catch (e) {
    dispatch(LoadingFailure('machineType'))
    console.error(e.message)
  }
}

//create new machine profile by id
export const createMcProfileById = (info) => async dispatch => {

  if (!valid(info.name)) return toast.error('Please enter machine name!')
  if (!valid(info.activeSince)) return toast.error('Please enter ACTIVE SINCE!')
  if (info.type === 'none') return toast.error('Please select a machine type!')

  let id = JSON.parse(localStorage.getItem('Machine Creating Status')).machine_id
  let data = {
    "name": info.name,
    "type": info.type,
    "priorityScore": parseInt(info.priorityScore),
    "activeSince": info.activeSince + ":00.00Z",
    "minPeople": parseInt(info.minPeople),
    "maxPeople": parseInt(info.maxPeople),
    "requiredScoreH": parseInt(info.requiredScoreH),
    "requiredScoreE": parseInt(info.requiredScoreE),
    "requiredScoreC": parseInt(info.requiredScoreC),
    "requiredScoreA": parseInt(info.requiredScoreA),
    "genderEquality": info.genderEquality.toLocaleLowerCase(),
    "genderOptions": info.genderOptions.toLocaleLowerCase(),
  }
  try {
    dispatch(LoadingRequest())
    apiClient.createMcProfileById(id, data)
      .then((response)=>{
        if (response.status === 200) {
          toast.success('put seccessfully!')
          let item = {
            "creation_statue": 2,
            "machine_id": id
          }
          localStorage.setItem('Machine Creating Status', JSON.stringify(item))
          dispatch(LoadingCrMcProByIdSuccess(response.data))
        }
      })
      .catch((error)=>{
        let errorInfo = error.response.data
        toast.error(errorInfo.message)
        dispatch(LoadingFailure())
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message)
  }
}

// // search Machine list by site
// export const searchMachineBySite = (key) => async dispatch => {
//   try {
//     dispatch(LoadingRequest())
//     apiClient.searchMachineBySite(key)
//       .then((response)=>{
//         if (response.status === 200) {
//           console.log(response)
//           dispatch(LoadingMachineBySiteOrZoneSuccess(response.data))
//         }
//       })
//       .catch((error)=>{
//         let errorInfo = error.response.data
//         toast.error(errorInfo.message)
//         dispatch(LoadingFailure())
//       })
//   } catch (e) {
//     dispatch(LoadingFailure())
//     console.error(e.message)
//   }
// }

// // search Machine list by zone
// export const searchMachineByZone = (key) => async dispatch => {
//   try {
//     dispatch(LoadingRequest())
//     apiClient.searchMachineByZone(key)
//       .then((response)=>{
//         if (response.status === 200) {
//           dispatch(LoadingMachineBySiteOrZoneSuccess(response.data))
//         }
//       })
//       .catch((error)=>{
//         let errorInfo = error.response.data
//         toast.error(errorInfo.message)
//         dispatch(LoadingFailure())
//       })
//   } catch (e) {
//     dispatch(LoadingFailure())
//     console.error(e.message)
//   }
// }

//validation
const valid = (value) => {
  if (value.length === 0) return false
  return true
}

export default Machine.reducer