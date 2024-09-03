import express from "express";
import { ProductModel } from "../model/product.model.js";
import { Router } from "express";
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

export { adminRoute};
