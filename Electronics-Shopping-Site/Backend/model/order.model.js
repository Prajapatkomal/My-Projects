const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
    payment: {
      success: { type: Boolean, default: false },
      transactionId: String,
    },
    buyer: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
      userName: { type: String, required: true },
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: ["Not Processed", "Processing", "Shipped", "Delivered", "Cancel"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
