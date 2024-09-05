import express from "express";
import { ProductModel } from "../model/product.model.js";
const productRoute = express.Router();

productRoute.get("/",async(req,res)=>{
    try {
        let { title, category, q, sortBy, page = 1, limit = 10 } = req.query;
        let query = {};

        if (title) query.title = new RegExp(title, 'i');
        if (category) query.category = new RegExp(category,'i');
        if (q) query.title = new RegExp(q, 'i');

        const products = await ProductModel.find(query)
                                  .sort(sortBy ? { [sortBy]: 1 } : {})
                                  .skip((page - 1) * limit)
                                  .limit(Number(limit));
        res.status(200).json({products:products});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


export { productRoute};