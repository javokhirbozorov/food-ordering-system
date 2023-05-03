import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

import bcrypt from "bcryptjs";




const userRoute = express.Router();

userRoute.post('/register', expressAsyncHandler( async (req, res)=>{
    const {name, email, password} =req.body
    const newUser = new User({name, email, password:bcrypt.hashSync(password)})

    try{
        newUser.save()
        res.status(200).json({ currentUser:newUser})

    } catch(error){
        return res.status(400).json({message:error})
    }
}) )


userRoute.post('/login', expressAsyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    const user = await User.find({email:email})

    if(user){
        if(bcrypt.compareSync(password, user[0].password)){

            console.log(user, 'HERE IS THE 😀😀');
            const currentUser = {
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id,
            }
            res.status(200).json(currentUser)
            return
        } else {
            res.status(400).json({message:"Wrong Password"})
        }
    } else{

    return res.status(400).json({message:'Invalid User'})
    }


}))
export default userRoute


