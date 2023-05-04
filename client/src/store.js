

import {applyMiddleware, combineReducers, compose, createStore} from 'redux'

import thunk from 'redux-thunk'
import {getAllFoodReducer} from './reducers/foodReducers'

import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { getAllOrdersReducer, getUserOrdersReducer, placeOrderReducer } from './reducers/orderReducers'


const finalReducer = combineReducers({
    getAllFoodReducer: getAllFoodReducer,
    cartReducer:cartReducer,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    getAllUserReducer: getAllUsersReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    devTools:false
})


const initialState = {
    userLoginReducer: {
      currentUser: sessionStorage.getItem("currentUser")
        ? JSON.parse(sessionStorage.getItem("currentUser"))
        : null,
    }, 
    cartReducer:{
        cartItems:sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []
    },


  };
  



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers=composeWithDevTools({})
const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))


export default store
