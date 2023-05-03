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
