import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify'

// Slice
const Machine = createSlice({
  name: 'machine',
  initialState: {
    isMachineLoading: false,
    arrMachineList : [],
    objMachineDetail : {},
    objMCLocation : {},
    objMcHealth : {},
    arrImageList : [],
    arrMachineType : []
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
    LoadingFailure: (state) => {
      state.isMachineLoading = false
      state.arrMachineList = []
      state.objMachineDetail = {}
      state.objMcHealth = {}
      state.arrImageList = []
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
  LoadingGetMcHealthByIdSuccess,
  LoadingGetMcImagesByIdSuccess,
  LoadingGetMcTypeByIdSuccess,
  LoadingCrMcProByIdSuccess
} = Machine.actions

// create new machine
export const createNewMachine = (groupId) => async dispatch => {
  //validation groupId
  if (groupId === 0) return toast.error('Please select a group!')

  let userEmail = localStorage.getItem('User Email')

  const data = {
    "groupId": groupId,
    "registeredAt": new Date().toJSON(),
    "serverOrderCode": "string",
    "serverOrderActiveDate": new Date().toJSON(),
    "triggerSub": userEmail
  }
  try {
    dispatch(LoadingRequest())
    apiClient.createNewMachine(data)
      .then((response)=>{
        if (response.status === 200) {

          //store new creating machine in localstorage
          let item = {
            "creation_statue": 1,
            "machine_id": response.data.id
          }
          localStorage.setItem('Machine Creating Status', JSON.stringify(item))
          //..end

          toast.success('New machine created successfully!')
          dispatch(LoadingCrtMachinSuccess())
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
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
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
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
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

//update machine by id
export const upDateSvOrderCode = (id, groupId, code, activeAt) => async dispatch => {
  //validation
  if (!valid(code)) return toast.error('Please enter the Server code!')
  if (!valid(activeAt)) return toast.error('Please enter the Server Activated Date!')

  let userEmail = localStorage.getItem('User Email')
  let data = {
    "groupId": groupId,
    "registeredAt": new Date().toJSON(),
    "serverOrderCode": code,
    "serverOrderActiveDate": activeAt + ":00.00Z",
    "triggerSub": userEmail
  }
  
  try {
    dispatch(LoadingRequest())
    apiClient.upDateSvOrderCode(id, data)
      .then((response)=>{
        if (response.status === 200) {
          dispatch(LoadingUpdateMcByIdSuccess(response.data))
          toast.success('updated successfully!')
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
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
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
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
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

//get machine image by id
export const getGetMcImageById = (id) => async dispatch => {
  
  try {
    dispatch(LoadingRequest())
    apiClient.getGetMcImageById(id)
      .then((response)=>{
        console.log(response)
        if (response.status === 200) {
          dispatch(LoadingGetMcImagesByIdSuccess(response.data))
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
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
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

//create new machine by id
export const createMcProfileById = (info) => async dispatch => {

  if (!valid(info.name)) return toast.error('Please enter machine name!')
  if (info.type === 'none') return toast.error('Please select a machin type!')

  let userEmail = localStorage.getItem('User Email')
  let id = JSON.parse(localStorage.getItem('Machine Creating Status')).machine_id
  let data = {
    "name": info.name,
    "type": info.type,
    "priorityScore": parseInt(info.priorityScore),
    "activeSince": info.activeSince,
    "minPeople": parseInt(info.minPeople),
    "maxPeople": parseInt(info.maxPeople),
    "requiredScoreH": parseInt(info.requiredScoreH),
    "requiredScoreE": parseInt(info.requiredScoreE),
    "requiredScoreC": parseInt(info.requiredScoreC),
    "requiredScoreA": parseInt(info.requiredScoreA),
    "genderEquality": info.genderEquality.toLocaleLowerCase(),
    "genderOptions": info.genderOptions.toLocaleLowerCase(),
    "licensesRequired": [
      0
    ],
    "workRecordRequired": 0,
    "titleRequired": [
      "string"
    ],
    "description": "string",
    "triggerSub": userEmail
  }
  try {
    dispatch(LoadingRequest())
    apiClient.createMcProfileById(id, data)
      .then((response)=>{
        console.log(response)
        if (response.status === 200) {
          toast.success('put seccessfully!')
          let item = {
            "creation_statue": 2,
            "machine_id": id
          }
          localStorage.setItem('Machine Creating Status', JSON.stringify(item))
          dispatch(LoadingCrMcProByIdSuccess(response.data))
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

//validation
const valid = (value) => {
  if (value.length === 0) return false
  return true
}

export default Machine.reducer