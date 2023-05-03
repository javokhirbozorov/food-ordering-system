import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';

function Checkout({subtotal}) {
    const dispatch = useDispatch()
    const tokenHandler = (token)=>{
       console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
  return (
    <div>
        <StripeCheckout 
        amount={subtotal *100}
        shippingAddress
        token={tokenHandler}
        currency='GBP'
        stripeKey='pk_test_51N3j0RBb9ikIZMUqQHJpEZAlqI9kFyVindANi632arrVxXp9gipRvk2xfsQ3AtGwUablwAwQUB4LghqqnwwwhNs900G7S9DMQQ'
        >
            <button className='btn cart__pay-btn'> Pay now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout
