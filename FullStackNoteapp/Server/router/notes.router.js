import express from "express"
import {Notemodel} from "../model/notes.model.js"
import { Router } from "express"
const notesRouter= express.Router()
import {auth} from "../middlewares/auth.middleware.js"

notesRouter.get("/get",auth,async(req,res)=>{
   const userId = req.user[0]._id

   try {
      const notes = await Notemodel.find({userId:userId})
      res.status(200).json({message:"here are the notes",notes:notes})
   } catch (error) {
      res.status(500).json({ message: "Error retrieving notes", error });
   }
})

notesRouter.post("/create",auth,async(req,res)=>{
  
   const {title,content,status} = req.body
   const userId = req.user[0]._id

     try {
        const notes = new Notemodel({
         title,content,status,userId
        })
        await notes.save()
        res.status(200).json({ message: "Note created successfully" });

     } catch (error) {
      res.status(500).json({ message: "Error creating note", error });
     }
   
})


notesRouter.patch("/update/:id",auth,async(req,res)=>{
   const noteId = req.params.id
   const userId = req.user[0]._id
   try { 
      const notes = await  Notemodel.findOne({_id:noteId})
      if(notes.userId.toString() === userId.toString()){
         await Notemodel.findByIdAndUpdate({_id:noteId},req.body)
         return   res.status(200).json({message:"note upadted successfully",notes:notes})
      }else{
         res.status(400).json({message:"error in updating notes, unauthorized",error:error})
      }
   } catch (error) {
      res.status(500).json({message:"error in updating notes",error:error})
   }
})


notesRouter.delete("/delete/:id",auth,async(req,res)=>{
   const noteId = req.params.id
   const userId = req.user[0]._id
   try { 
      const notes = await  Notemodel.findOne({_id:noteId})
      if(notes.userId.toString() === userId.toString()){
          await Notemodel.findByIdAndDelete({_id:noteId})
          res.status(200).json({message:"note Deleted successfully",notes:notes})
      }else{
         res.status(500).json({message:"error in Deleting notes,unauthorized",error:error})
      }  
   } catch (error) {
      res.status(500).json({message:"error in Deleting notes",error:error})
   }
})


export{notesRouter}