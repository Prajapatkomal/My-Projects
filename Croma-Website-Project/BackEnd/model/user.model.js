import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    "email":{type:String,required:true},
    "password":{type:String,required:true},
    "role":{type:String,Enum:["admin","user"],require:true,default:'user'}
},{
    versionKey: false
})

const UserModel = mongoose.model("user",userSchema)

export{UserModel}