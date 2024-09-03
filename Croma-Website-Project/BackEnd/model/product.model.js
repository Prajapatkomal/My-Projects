import mongoose from"mongoose"

const productSchema = new mongoose.Schema({
    "image_url": {type:"String",required:true},
   "brand": {type:"String"},
   "category":{type:"String",required:true},
   "title":{type:"String",required:true},
   "price":{type:"String",required:true}
},{
    versionKey: false
})


const ProductModel = mongoose.model("product",productSchema)

export{ProductModel}