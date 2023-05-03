import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loading from './Loading';
import Error from './Error';
import Success from './Success';

function Checkout({subtotal}) {

    const orderState = useSelector((state)=>state.placeOrderReducer)
    const {loading, error, success} = orderState
    const dispatch = useDispatch()
    const tokenHandler = (token)=>{
       console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
  return (
    <div>

             
{loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}
        <StripeCheckout 
        amount={subtotal *100}
        shippingAddress
        token={tokenHandler}
        currency='GBP'
        stripeKey='pk_test_51N3j0RBb9ikIZMUqQHJpEZAlqI9kFyVindANi632arrVxXp9gipRvk2xfsQ3AtGwUablwAwQUB4LghqqnwwwhNs900G7S9DMQQ'
        >
            <button className='btn cart__pay-btn' onClick={()=>sessionStorage.removeItem('cartItems')}> Pay now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout
