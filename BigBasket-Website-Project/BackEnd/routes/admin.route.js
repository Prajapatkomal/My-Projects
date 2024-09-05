import express from "express";
import { ProductModel } from "../model/product.model.js";
const adminRoute = express.Router();

adminRoute.post("/addProduct", async(req,res)=> {
  const { image_url, brand, category, title, price } = req.body;
 
  try {
    const products = new ProductModel({
      image_url,
      brand,
      category,
      title,
      price,
    });
    
    await products.save();
    res.status(200).json({ message: " Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "error in adding Product", error: error.message});
  }
});




adminRoute.patch("/update/:id",async(req,res)=>{
  const productId = req.params.id
  try { 
     const product = await  ProductModel.findOne({_id:productId})
     if(!product){
      return  res.status(400).json({message:"product not found"})
     }

     if(product){
          await ProductModel.findByIdAndUpdate({_id:productId},req.body)
          return  res.status(200).json({message:"product upadted successfully",product:product})
     }else{
         return res.status(400).json({message:"error in updating product, unauthorized",error:error})
     }
  } catch (error) {
     res.status(500).json({message:"error in updating product",error:error})
  }
})


adminRoute.delete("/delete/:id",async(req,res)=>{
  const productId = req.params.id
  try { 
     const product = await ProductModel.findOne({_id:productId})
     if(!product){
      return  res.status(400).json({message:"product not found"})
     }
     if(product){
          await ProductModel.findByIdAndDelete({_id:productId})
           return  res.status(200).json({message:"product Deleted successfully",product:product})
     }else{
        return res.status(500).json({message:"error in Deleting product,unauthorized",error:error})
     }  
  } catch (error) {
     res.status(500).json({message:"error in Deleting product",error:error})
  }
})



export { adminRoute};
