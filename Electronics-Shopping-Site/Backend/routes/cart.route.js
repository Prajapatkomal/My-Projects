const express = require("express");
const {auth} = require("../middleware/auth.middleware");
const { CartModel } = require("../model/cart.model");
const mongoose = require("mongoose")

const cartRouter = express.Router();


// add product to cart
cartRouter.post("/addCart", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    let cart = await CartModel.findOne({ buyer: userId });
    if (!cart) {
      cart = new CartModel({ buyer: userId, products: [productId] });
    } else {
      cart.products.push(productId);
    }

    await cart.save();
    res.status(200).json({ msg: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error while adding product to cart" });
  }
});




// get cart products:-
cartRouter.get("/cart", auth, async (req, res) => {
  try {
    const cart = await CartModel.findOne({ buyer: req.userId })
      .populate("products"); // load All cart products
      res.status(200).json({msg:"products from cart",cart});
  } catch (error) {
    res.status(500).json({ msg: "Error fetching cart" });
  }
});




// delete product from cart:-
cartRouter.delete("/deleteCart/:productId", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ msg: "Invalid product ID" });
    }

    const cart = await CartModel.findOneAndUpdate(
      { buyer: userId },
      { $pull: { products: productId } }, // keep as string if your schema stores strings
      { new: true }
    ).populate("products");

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    res.status(200).json({ msg: "Product deleted from cart", cart });
  } catch (error) {
    console.error("Delete cart error:", error);
    res.status(500).json({ msg: "Error deleting cart" });
  }
});

  


module.exports = { cartRouter };