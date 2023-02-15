
import { combineReducers, applyMiddleware, createStore} from 'redux'
import{configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {getAllFoodReducer} from './reducers/foodReducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const finalReducer = combineReducers({
    getAllFoodReducer: getAllFoodReducer
})

const initialState = {}
const composeEnhancers=composeWithDevTools({})
const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store
