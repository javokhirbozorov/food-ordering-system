import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import { default as Stripe } from 'stripe';
const orderRouter = express.Router();

import {v4 as uuidv4} from 'uuid'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
import Order from '../models/orderModel.js';
import expressAsyncHandler from 'express-async-handler';


orderRouter.post("/placeOrder", async(req, res) => {
  
  const {token , subtotal , currentUser , cartItems} = req.body

  try {
      const customer = await stripe.customers.create({
          email : token.email,
          source:token.id
      })

      const payment = await stripe.charges.create({
          amount:subtotal*100,
          currency:'gbp',
          customer : customer.id,
          receipt_email : token.email
      }, {
          idempotencyKey : uuidv4()
      })

      if(payment)
      {
         
          const neworder = new Order({
              name : currentUser.name,
              email : currentUser.email ,
              userid : currentUser._id ,
              orderItems : cartItems , 
              orderAmount : subtotal,
              shippingAddress : {
                  street : token.card.address_line1,
                  city : token.card.address_city,
                  country : token.card.address_country,
                  pincode : token.card.address_zip
              },
              transactionId : payment.source.id
          })
          
          neworder.save()

          res.send('Order placed successfully')
      }
      else{
          res.send('Payment failed')
      }

  } catch (error) {
      return res.status(400).json({ message: 'Something went wrong' + error});
  }

});


orderRouter.post("/getUserOrders", expressAsyncHandler (async(req, res) => {
  const {userid} = req.body
  try {
      const orders = await Order.find({userid : userid}).sort({_id : -1})
      res.send(orders)
  } catch (error) {
      return res.status(400).json({ message: error.message });
  }
}));

orderRouter.get("/getAllOrders", async(req, res) => {

     try {
         const orders = await Order.find({})
         res.send(orders)
     } catch (error) {
         return res.status(400).json({ message: error});
     }

});

orderRouter.post("/deliverOrder", expressAsyncHandler(  async(req, res) => {

    const orderid = req.body.orderid
    try {
        const order = await Order.findOne({_id : orderid})
        order.isDelivered = true
        await order.save()
        res.send('Order Delivered Successfully')
    } catch (error) {

        return res.status(400).json({ message: error});
        
    }
  
}));



export default orderRouter
