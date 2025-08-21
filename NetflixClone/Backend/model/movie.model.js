const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    title : String,
    poster :String,
    videoKey:String,
    category:String,
    type:String
},
   {versionKey : false}
)

const MovieModel = mongoose.model("movie", movieSchema)

module.exports={MovieModel}

