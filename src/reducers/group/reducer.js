import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify';

// Slice
const Group = createSlice({
  name: 'createMachine',
  initialState: {
    isGroupLoading: false,
    arrGroupList : [],
    objMachinDetail : {}
  },
  reducers: {
    LoadingRequest: (state) => {
      state.isGroupLoading = true
    },
    LoadingGrpListSuccess: (state, action) => {
      state.isGroupLoading = false
      state.arrGroupList = action.payload
    },
    LoadingGrpDtlByIdSuccess: (state, action) => {
      state.isGroupLoading = false
      state.objMachinDetail = action.payload
    },
    LoadingFailure: (state) => {
      state.isGroupLoading = false
      state.arrGroupList = []
    }
  },
});

// Actions
const {LoadingRequest, LoadingFailure, LoadingGrpListSuccess, LoadingGrpDtlByIdSuccess } = Group.actions

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

// get machine detail by id..
export const getGrpDetailById = (id) => async dispatch => {  
  try {
    dispatch(LoadingRequest())
    apiClient.getGrpDetailById(id)
      .then((response)=>{
        if (response.status === 200 ) {
          dispatch(LoadingGrpDtlByIdSuccess(response.data.group))
        } else {
          dispatch(LoadingFailure())
        }
      })
  } catch (e) {
    dispatch(LoadingFailure())
    console.error(e.message);
  }
}


export default Group.reducer