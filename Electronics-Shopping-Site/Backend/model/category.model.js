const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = { CategoryModel };
