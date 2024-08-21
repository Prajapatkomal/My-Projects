import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    "name":{type:String,required:true}, 
    "email":{type:String,required:true},
    "password":{type:String,required:true},
    "age":{type:Number,required:true},
    "gender":{type:String,Enum:["male","female"],required:true},
},{
    versionKey: false
})

const Usermodel = mongoose.model("user",userSchema)

export{Usermodel}