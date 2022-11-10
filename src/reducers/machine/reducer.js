import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify'

// Slice
const Machine = createSlice({
  name: 'updateMachine',
  initialState: {
    isMachineLoading: false,
    arrMachineList : [],
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
    LoadingFailure: (state) => {
      state.isMachineLoading = false
      state.arrMachineList = []
    }
  },
});

// Actions
const { LoadingRequest, LoadingFailure, LoadingCrtMachinSuccess, LoadingGetMcListSuccess } = Machine.actions

// create new machine
export const createNewMachine = (groupId) => async dispatch => {
  //validation groupId
  if (groupId === 0) return toast.error('Please select a group!')
  let userEmail = sessionStorage.getItem('User Email')

  const data = {
    "groupId": groupId,
    "registeredAt": new Date(),
    "serverOrderCode": "string",
    "serverOrderActiveDate": new Date(),
    "triggerSub": userEmail
  }

  try {
    dispatch(LoadingRequest())
    apiClient.createNewMachine(data)
      .then((response)=>{
        if (response.status === 200) {
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

export default Machine.reducer