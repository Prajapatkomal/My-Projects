import express from "express"
import {UserModel} from "../model/user.model.js"
const userRoute= express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


userRoute.post("/register",async(req,res)=>{
    const {email,password,role} = req.body
    try {
         const user = await UserModel.find({email})
         if(user.length!==0){
            return res.json({message:"user has already registerd"})
         }
         bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
               res.status(500).send("Error in hashing password")
            }else{
                const newUser  = new UserModel({
                    email,password:hash,role
                })
                await newUser.save()
               res.status(200).json({message:"user registerd successfully,Please login to continue"})
            }
         })

    } catch (error) {
        res.status(400).json({message:"error in registering user",Error:error})
    }
})


userRoute.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user =  await UserModel.findOne({email})
        if(!user){
          return  res.status(400).json({message:'user not found'})
        }
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(err){
                    return res.status(500).json({message:"internal server error"})
                }  
                if(result){
                    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY)
                    return res.status(200).json({message:"user logged successfully" ,token:token})
                }else{
                    return res.status(500).json({message:"Invalid password "})
                }
                
            })
        }
        
    } catch (error) {
        res.status(400).json({message:"invalid credential",Error:error})
    }
    

})

export{userRoute}