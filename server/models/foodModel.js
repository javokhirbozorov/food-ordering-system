import mongoose from "mongoose"


const foodSchema = new mongoose.Schema({
    name:{type: String, required:true},
    sizes:[],
    prices:[],
    category:{type: String, required:true},
    image:{type: String, required:true},
    description: {type: String, required:true}
},{
    timestamps:true,
})

const Menu = mongoose.model("menu", foodSchema)

export default Menu
