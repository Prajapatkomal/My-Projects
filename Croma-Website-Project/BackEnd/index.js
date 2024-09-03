import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
import multer from "multer"
import path from"path"

import dotenv from "dotenv"
dotenv.config()

import {connection} from "./config/db.js"
import {adminRoute} from "./routes/admin.route.js"
import {userRoute} from "./routes/user.route.js"
import { productRoute } from "./routes/product.route.js"
import {auth} from "./middleware/auth.middleware.js"
import {Role} from "./middleware/role.middleware.js"

const PORT = process.env.PORT || 3000

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/admin",adminRoute)
app.use("/product",productRoute)
app.use("/user",userRoute)



app.get("/",(req,res)=>{
    res.send("server is running fine")
})


// Image strorage engine

const storage  = multer.diskStorage({
     destination : "./upload/images" ,
     filename : (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
     }
})

const upload = multer({storage:storage})

//creating upload Endpoint for images
app.use("/images",express.static("upload/images"))
app.post("/upload",upload.single("product"),(req,res)=>{
    res.json({
         success: 1,
         image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


app.listen(PORT,async (error)=>{
    await connection
    if(!error){
    console.log("server is running on port",PORT)
    }else{
        console.log("error" ,error)
    }
})