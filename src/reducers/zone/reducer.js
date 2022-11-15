import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify'

// Slice
const Zone = createSlice({
    name: 'zone',
    initialState: {
        isZoneLoading: false,
        arrZoneList : [],
    },
    reducers: {
        LoadingRequest: (state) => {
            console.log('llllllll')
            state.isZoneLoading = true
        },
        LoadingZoneListSuccess: (state, action) => {
            state.isZoneLoading = false
            state.arrZoneList = action.payload
        },
        LoadingCreateNewSuccess: (state) => {
            state.isZoneLoading = false
        },
        LoadingFailure: (state) => {
            state.isZoneLoading = false
            state.arrZoneList = []
        }
    },
});

// Actions
const {LoadingRequest, LoadingFailure, LoadingZoneListSuccess, LoadingCreateNewSuccess } = Zone.actions

// get zone list..
export const getZonetList = () => async dispatch => {
    try {
        dispatch(LoadingRequest())
        apiClient.getZonetList()
        .then((response)=>{
            if (response.status === 200) {
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

//create new zone
export const createNewZone = (data) => async dispatch => {
    if (!valid(data.id)) return toast.error('Please input the id!')
    if (!valid(data.region)) return toast.error('Please input the region!')
    if (!valid(data.site)) return toast.error('Please input the site!')
    if (data.groupIds.site > 3) return toast.error('The maximum character length must be less than 3.')
    if (!valid(data.area)) return toast.error('Please input the area!')
    if (!valid(data.fbxName)) return toast.error('Please input the fbxName!')
    if (!valid(data.groupIds)) return toast.error('Please select the groupIds!')
    if (data.groupIds.length > 3) return toast.error('The maximum character length must be less than 3.')
    if (!valid(data.locationTags)) return toast.error('Please input the locationTags!')

    try {
        dispatch(LoadingRequest())
        apiClient.createNewZone(data)
        .then((response)=>{
            if (response.status === 200) {
                toast.success('Zone created successfully!')
                dispatch(LoadingCreateNewSuccess())
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

//validation
const valid = (value) => {
    if (value.length === 0) return false
    return true
}

export default Zone.reducer