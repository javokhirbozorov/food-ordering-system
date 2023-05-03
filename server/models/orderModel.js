import mongoose from "mongoose"
mongoose.set('strictQuery', false);
const orderSchema= mongoose.Schema({
    name : {type: String , required:true},
    email: { type: String, require: true, index:true, unique:false,sparse:true},
    userid : {type: String , required:true},
    orderItems : [],
    shippingAddress : {type:Object},
    orderAmount : {type:Number , required:true},
    isDelivered : {type:Boolean , required:true , default: false},
    transactionId : {type:String , required:true}
},{
    timestamps : true
})


const Order = mongoose.model("orders", orderSchema)

export default Order
