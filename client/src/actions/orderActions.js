import axios from "axios";
import { PLACE_ORDER_FAIL, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "../constants/orderConstants";


export const placeOrder= (token, subtotal) =>async (dispatch, getState)=>{
    dispatch({type:PLACE_ORDER_REQUEST})
    const currentUser = getState().userLoginReducer.currentUser

    const cartItems = getState().cartReducer.cartItems
    try{
        const response = await axios.post('/api/orders/placeOrder', {token, subtotal, currentUser, cartItems})
       dispatch({type:PLACE_ORDER_SUCCESS})
        console.log(response);
    }catch(error){

        dispatch({type:PLACE_ORDER_FAIL})
    }
}




export const getUserOrders=()=>async (dispatch,getState)=>{

  const currentUser = getState().userLoginReducer.currentUser
  console.log(currentUser.name, "HAHHAH");
  dispatch({type:'GET_USER_ORDERS_REQUEST'})
  
  try {
      const response = await axios.post('/api/orders/getUserOrders' , {userid : currentUser._id})

      
      console.log(response);
      
      dispatch({type:'GET_USER_ORDERS_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_USER_ORDERS_FAILED' , payload : error})
  }

}

export const getAllOrders=()=>async (dispatch,getState)=>{

  const currentUser = getState().userLoginReducer.currentUser
  dispatch({type:'GET_ALLORDERS_REQUEST'})
  
  try {
      const response = await axios.get('/api/orders/getAllOrders')

      
      console.log(response);
      
      dispatch({type:'GET_ALLORDERS_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_ALLORDERS_FAILED' , payload : error})
  }

}

export const deliverOrder=(orderid)=>async dispatch=>{



    try {
      const response = await axios.post('/api/orders/deliverOrder' , {orderid})
      console.log(response);
      alert('Order Delivered')
      const orders = await axios.get('/api/orders/getAllOrders')
      dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
      console.log(error);
    }


}
