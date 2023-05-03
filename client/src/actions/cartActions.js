export const addToCartAction = (food, quantity, size)=>(dispatch, getState)=>{

    let cartItem = {
        name:food.name,
        _id: food._id,
        image:food.image,
        size:size,
        quantity: Number(quantity),
        prices:food.prices,
        price: food.prices[0][size]*quantity

    }

    dispatch({type:'ADD_TO_CART', payload:cartItem})
    const cartItems = getState().cartReducer.cartItems
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
}


export const deleteFromCartAction = (food)=>(dispatch, getState)=>{
    dispatch({type:'DELETE_FROM_CART', payload:food})
    const cartItems = getState().cartReducer.cartItems
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems))

}
