const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
    buyer: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "user",
     }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
