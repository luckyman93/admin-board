import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import Auth from './auth/reducer'
import Group from './group/reducer'
import Machine from './machine/reducer'

const reducer = combineReducers({
    Auth,
    Group,
    Machine,
})

const store = configureStore({
    reducer,
})

export default store;