import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
// import { toast } from 'react-toastify';

// Slice
const Zone = createSlice({
    name: 'createMachine',
    initialState: {
        isZoneLoading: false,
        arrZoneList : [],
    },
    reducers: {
        LoadingRequest: (state) => {
        state.isZoneLoading = true
        },
        LoadingZoneListSuccess: (state, action) => {
        state.isZoneLoading = false
        state.arrZoneList = action.payload
        },
        LoadingFailure: (state) => {
        state.isZoneLoading = false
        state.arrZoneList = []
        }
    },
});

// Actions
const {LoadingRequest, LoadingFailure, LoadingZoneListSuccess } = Zone.actions

// get zone list..
export const getZonetList = () => async dispatch => {  
    try {
        dispatch(LoadingRequest())
        apiClient.getZonetList()
        .then((response)=>{
            console.log(response)
            if (response.status === 200 ) {
            dispatch(LoadingZoneListSuccess(response.data))
            } 
        })
        .catch((error)=>{
            let errorInfo = error.response.data
            toast.error(errorInfo.message)
            dispatch(LoadingFailure())
        })
    } catch (e) {
        dispatch(LoadingFailure())
        console.error(e.message);
    }
}

export default Zone.reducer