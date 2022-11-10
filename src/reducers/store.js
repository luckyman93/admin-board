import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Sign from './sign/reducer'
import CreateMachine from './createMachine/reducer'
import UpdateMachine from './updateMachine/reducer'

const reducer = combineReducers({
    Sign,
    CreateMachine,
    UpdateMachine,
})

const store = configureStore({
    reducer,
})

export default store;