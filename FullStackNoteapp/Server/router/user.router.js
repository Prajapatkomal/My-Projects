import express from "express"
import {Usermodel} from "../model/user.model.js"
const userRouter= express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


userRouter.post("/register",async(req,res)=>{
    const {name,email,age,gender,password} = req.body
    try {
         const user = await Usermodel.find({email})
         console.log(user)
         if(user.length!==0){
            return res.json({message:"user already registerd"})
         }
         bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
               res.status(500).send("Error in hashing password")
            }else{
                const newUser  = new Usermodel({
                    name,email,age,gender,password:hash
                })
                await newUser.save()
               res.status(200).json({message:"user registerd successfully"})
            }
         })

    } catch (error) {
        res.status(500).json({message:"error in registering"})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user =  await Usermodel.findOne({email})
        if(!user){
          return  res.status(404).send('user not found')
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
                    return res.status(500).json({message:"password incorrect"})
                }
                
            })
        }
        
    } catch (error) {
        res.status(401).send("invalid credential")
    }
    

})

export{userRouter}