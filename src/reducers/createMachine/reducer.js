import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'

// Slice
const CreateMachine = createSlice({
  name: 'createMachine',
  initialState: {
    isLoading: false,
    arrGroupList : []
  },
  reducers: {
    //createmachine
    LoadGetGpListRequest: (state) => {
      state.isLoading = true
    },
    LoadGetGpListSuccess: (state, action) => {
      state.isLoading = false
      state.arrGroupList = action.payload.map((info) => (
        { 'groupId': info.id, 'groupName': info.name }
      ))
    },
    LoadGetGpListFailure: (state) => {
      state.isLoading = false
      state.arrGroupList = []
    }
  },
});

// Actions
const { LoadGetGpListSuccess, LoadGetGpListFailure, LoadGetGpListRequest } = CreateMachine.actions

// get group list..
export const getGroupList = (token) => async dispatch => {  
  try {
    dispatch(LoadGetGpListRequest())
    apiClient.getGroupList(token)
      .then((response)=>{
        if (response.status === 200 ) {
          dispatch(LoadGetGpListSuccess(response.data.groups))
        }
      })
  } catch (e) {
    dispatch(LoadGetGpListFailure())
    console.error(e.message);
  }
}

export default CreateMachine.reducer