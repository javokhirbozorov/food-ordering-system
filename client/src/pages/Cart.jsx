import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAction, deleteFromCartAction } from '../actions/cartActions';

export default function Cart() {

  const cartState = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const cartItems = cartState.cartItems;
  let subtotal = cartItems.reduce((x, item)=>x+item.price, 0)
  console.log(cartItems);



  return (
    <div className='cart'>

    


<h1 className='cart__header'>Cart</h1>
        <div className="cart__main-container">
          

          {
            cartItems.map(item=>{
              return  <div className="cart__list">
        

              <div className="cart__info">
                <p className="food-name">{item.name}</p>
                <p className="price">Price: £ <span>{item.price}</span></p>
                <p className="quantity">Quantity:
                <a  className='plus' onClick={()=> item.quantity < 10 ? dispatch(addToCartAction(item, item.quantity+1, item.size)) : alert('Out of range')}>
                <i className="fa-solid fa-plus"></i> 
                </a>
  
                <span>{item.quantity}</span>
                <a className='minus' onClick={()=>item.quantity >1 ? dispatch(addToCartAction(item, item.quantity-1, item.size)): alert("Minimum reached")} >
                <i className="fa-solid fa-minus"></i>
                </a>
                 </p>
  
                 <p className="size">Size: <span>{item.size}</span></p>
              </div>
  
              <div className="cart__image">
                <img src="https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg" alt="" srcset="" />
  
             <a className="delete-btn" onClick={()=>dispatch(deleteFromCartAction(item))} ><i className="fa-solid fa-trash-can"></i></a>
              </div>
           
  
  
  
             </div>
            })
          }
       
         

        <div className="cart__subtotal">
          <h2>Subtotal: £<span>{subtotal}</span></h2>
          <a className='cart__pay-btn'>Pay</a>
        </div>
        </div>




    </div>
  )
}
