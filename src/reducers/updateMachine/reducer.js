import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify';

// Slice
const UpdateMachine = createSlice({
  name: 'updateMachine',
  initialState: {
    isLoading: false,
    arrMachineList : []
  },
  reducers: {
    //createmachine
    LoadingRequest: (state) => {
      state.isLoading = true
    },
    LoadingMcListSuccess: (state, action) => {
      state.isLoading = false
      state.arrMachineList = action.payload
    },
    LoadingFailure: (state) => {
      state.isLoading = false
      state.arrMachineList = []
    }
  },
});

// Actions
const {LoadingRequest, LoadingFailure, LoadingMcListSuccess } = UpdateMachine.actions

// get machine list..
export const getMachineList = () => async dispatch => {  
  try {
    dispatch(LoadingRequest())
    apiClient.getMachineList()
      .then((response)=>{
        if (response.status === 200 ) {
          dispatch(LoadingMcListSuccess(response.data))
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}

export default UpdateMachine.reducer