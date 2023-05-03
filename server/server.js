
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
import menuRoute from "./routers/menuRoute.js";
import userRoute from './routers/userRoute.js'
import orderRouter from "./routers/ordersRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/menu/", menuRoute)
app.use('/api/user/', userRoute)
app.use('/api/orders/' , orderRouter)


mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/food-ordering-app",
  {}
); 
const PORT = process.env.PORT || 8000
app.listen(PORT, () =>{
 console.log("server is running on port:"+PORT);
})


