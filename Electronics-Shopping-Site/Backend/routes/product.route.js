const express = require("express");
const { ProductModel } = require("../model/product.model");
const fs = require("fs");
const { auth } = require("../middleware/auth.middleware");
const { isAdmin } = require("../middleware/isAdmin.middleware");
const formidable = require("express-formidable");

const productRouter = express.Router();

// create product----------------------

productRouter.post(
  "/admin/createProduct",
  auth,
  isAdmin,
  formidable(),
  async (req, res) => {
    try {
      const { name, description, price, quantity, category, shipping } =
        req.fields;
      const { photo } = req.files;
      console.log("FIELDS:", req.fields);
      console.log("FILES:", req.files);

      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "name is require" });
        case !description:
          return res.status(500).send({ error: "description is require" });
        case !price:
          return res.status(500).send({ error: "price is require" });
        case !quantity:
          return res.status(500).send({ error: "quantity is require" });
        case !category:
          return res.status(500).send({ error: "category is require" });
        case !photo:
          return res.status(500).send({ error: "photo is required" });

        case photo && photo.size > 1024 * 1024:
          return res
            .status(500)
            .send({ error: "photo should be less than 1 MB" });
      }

      const product = new ProductModel({...req.fields });
      if (photo) {
        product.photo.data = fs.readFileSync(photo.path);
        product.photo.contentType = photo.type;
      }
      await product.save();
      return res
        .status(201)
        .json({ msg: "product created successfully", product });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "error in creating product" });
    }
  }
);

// get All products -----------------

productRouter.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find()
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    return res.status(200).json({ msg: "All products", products ,totalProducts: products.length});
  } catch (error) {
    console.log(error);
    res.status(500).json("error in getting product");
  }
});

// get product by id ----------------------

productRouter.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findOne({ _id: req.params.id })
      .select("-photo")
      .populate("category");
    return res.status(200).send({ msg: "single product fetched", product });
  } catch (error) {
    console.log(error);
    res.status(500).json("msg:error in getting single product");
  }
});

// get product photo ------------------------

productRouter.get("/product-photo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id).select("photo");
    console.log(product);
    if (product && product.photo && product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    } else {
      return res.status(404).json({ error: "Photo not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "error in getting photo" });
  }
});

// delete  product-----------------

productRouter.delete(
  "/admin/delete-product/:id",
  auth,
  isAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByIdAndDelete(id);

      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      return res
        .status(200)
        .json({ msg: "product deletd successfully", product });
    } catch (error) {
      return res.status(500).json({ msg: "error in deleting product" });
    }
  }
);

// upadte product ----------------

productRouter.put(
  "/admin/update-product/:id",
  auth,
  isAdmin,
  formidable(),
  async (req, res) => {
    const { id } = req.params;

    try {
      const { name, description, price, quantity, category, shipping } =
        req.fields;
      const { photo } = req.files;

      if (photo && photo.size > 1024 * 1024) {
        return res
          .status(500)
          .send({ error: "photo should be less than 1 MB" });
      }

      const product = await ProductModel.findById(id);

      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }

      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;
      product.category = category || product.category;
      product.shipping = shipping || product.shipping;

      if (photo) {
        product.photo.data = fs.readFileSync(photo.path);
        product.photo.contentType = photo.type;
      }

      await product.save()
      
      return res
        .status(200)
        .json({ msg: "product updated successfully", product });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "error in updating product" });
    }
  }
);

module.exports = { productRouter };
