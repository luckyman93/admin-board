import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify';

// Slice
const CreateMachine = createSlice({
  name: 'createMachine',
  initialState: {
    isLoading: false,
    arrGroupList : []
  },
  reducers: {
    //createmachine
    LoadingRequest: (state) => {
      state.isLoading = true
    },
    LoadingGrpListSuccess: (state, action) => {
      state.isLoading = false
      state.arrGroupList = action.payload
    },
    LoadingCrtMachinSuccess: (state) => {
      state.isLoading = false
    },
    LoadingFailure: (state) => {
      state.isLoading = false
      state.arrGroupList = []
    }
  },
});

// Actions
const {LoadingRequest, LoadingFailure, LoadingGrpListSuccess, LoadingCrtMachinSuccess } = CreateMachine.actions

// get group list..
export const getGroupList = () => async dispatch => {  
  try {
    dispatch(LoadingRequest())
    apiClient.getGroupList()
      .then((response)=>{
        if (response.status === 200 ) {
          dispatch(LoadingGrpListSuccess(response.data.groups))
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

//createNewMachine
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
        console.log(response)
        if (response.status === 200 ) {
          toast.success('New machine created successfully!')
          dispatch(LoadingCrtMachinSuccess())
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadGetGpListFailure())
    console.error(e.message);
  }
}

export default CreateMachine.reducer