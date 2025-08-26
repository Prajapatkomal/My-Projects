const { UserModel } = require("../model/user.model")


const isAdmin = async(req,res,next) => {
try {
      const user = await UserModel.findById(req.userId)
 if(user.role !== 1){
    return res.status(401).json({msg:"Unauthorized access"})
 }else{
    next()
 }
} catch (error) {
    console.log(error)
    return res.status(401).json({msg:"Error in Admin middleware"})
}          
}


module.exports ={isAdmin}     
       