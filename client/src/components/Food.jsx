import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToCartAction } from "../actions/cartActions";

export default function Food({food}){

  const cartState = useSelector(state =>state.cartReducer)
  const [size, setSize] = useState('medium')
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

const dispatch = useDispatch()
  function addToCart(){
    dispatch(addToCartAction(food, quantity, size))

  }
  return(

    <div className="foodCard">
      <div onClick={handleShow} className="foodCard__top">

      <h2 className="foodCard__header">{food.name}</h2>
      <img  src={food.image} alt=""  />
      </div>

      <div className="foodCard__params">
        <div className="foodCard_size">
          <p>Size</p>
          <select key={food._id} value={size} onChange={e => setSize(e.target.value)}>
            {food.sizes.map(size =>{
              return <option value={size}>{size}</option>
            })}
          </select>
        </div>

        <div className="foodCard__quantity">
          <p>Qty</p>
          <select key={food._id} value={quantity} onChange={e => setQuantity(e.target.value)} name="" id="">

            {
              [...Array(10).keys()].map((x,i) => {
                return <option value={i+1}>{i+1}</option>
              })
            }
          </select>
        </div>
      </div>


 


      <div className="foodCard__bottom">
        <div className="price">
          <p>Price: £{food.prices[0][size] * quantity}</p>
        </div>

        <button onClick={()=>{addToCart()}} className="add-to-cart-btn"> ADD TO CART</button>
      </div>



    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
     { show ?  <Modal show={show} onHide={handleClose} >
        <Modal.Header  closeButton>
          <Modal.Title className="foodCard__modal-header">{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="foodCard__modal">
          <img src={food.image} alt="" srcset="" />
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
      :
      " "}
    </div>
  



    </div>
  )
}
