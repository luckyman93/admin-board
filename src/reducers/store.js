import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Sign from './Sign/reducer'

const reducer = combineReducers({
    Sign,
})

const store = configureStore({
    reducer,
})

export default store;