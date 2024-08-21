import jwt from "jsonwebtoken"
import {Usermodel} from "../model/user.model.js"

const auth = async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({message:"token not found"})
    }
    const token = req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({message:"token not found"})
    }
 try {
      const decoded = jwt.verify(token,'masai')
      if(!decoded){
        return res.status(401).json({message:"Invalid token please login again"})
      }
     const userId = decoded.id
      const user = await Usermodel.find({_id:userId})
      req.user = user
      next()
 } catch (error) {
    res.status(400).json({message:"error in token",error:error})
 }
        
}   
         

export{auth}