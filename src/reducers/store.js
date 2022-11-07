import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Sign from './sign/reducer'
import CreateMachine from './createMachine/reducer'

const reducer = combineReducers({
    Sign: Sign,
    Machine: CreateMachine
})

const store = configureStore({
    reducer,
})

export default store;