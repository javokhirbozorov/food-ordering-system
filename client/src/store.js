

import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import{configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {getAllFoodReducer} from './reducers/foodReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer'


const finalReducer = combineReducers({
    getAllFoodReducer: getAllFoodReducer,
    cartReducer:cartReducer,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    getAllUserReducer: getAllUsersReducer
})


const initialState = {
    userLoginReducer: {
      currentUser: sessionStorage.getItem("currentUser")
        ? JSON.parse(sessionStorage.getItem("currentUser"))
        : null,
    }, 
    cartReducer:{
        cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
  };
  



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers=composeWithDevTools({})
const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store
