import express from "express";
import expressAsyncHandler from "express-async-handler";
import Menu from "../models/foodModel.js";
import data from "../data.js" 

const menuRoute = express.Router();

menuRoute.get("/getfood",expressAsyncHandler(async(req,res)=>{
    const menu = await Menu.find({})
    res.send(menu)
}))

menuRoute.get("/postmenu", expressAsyncHandler(async(req,res)=>{
    await Menu.remove({});
    const createMenu = await Menu.insertMany(data.menu);
    res.send({createMenu})
}))

export default menuRoute
