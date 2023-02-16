
import { combineReducers, applyMiddleware, createStore} from 'redux'
import{configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {getAllFoodReducer} from './reducers/foodReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer'

const finalReducer = combineReducers({
    getAllFoodReducer: getAllFoodReducer,
    cartReducer:cartReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cartReducer:{
        cartItems:cartItems
    }
}
const composeEnhancers=composeWithDevTools({})
const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store
