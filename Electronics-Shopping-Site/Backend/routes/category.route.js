const express = require("express");
const { CategoryModel } = require("../model/category.model");
const {auth} = require("../middleware/auth.middleware")
const {isAdmin} = require("../middleware/isAdmin.middleware")

const categoryRouter = express.Router();


// create category --------------

categoryRouter.post("/admin/createCategory",auth,isAdmin,async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(401).json({ msg: "name is require" });
      }
      const existCategory = await CategoryModel.findOne({ name });
      if (existCategory) {
        return res.status(201).json({ msg: "category already exists" });
      }

      const category = new CategoryModel({
        name,
      });
      await category.save();
      return res.status(201).json({ msg: "new category created" , category });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "error in category" });
    }
  }
);



// get category -------------------------

categoryRouter.get("/product-category",async (req, res) => {
  try{
      const category = await CategoryModel.find()
      return res.status(201).json({ msg: "All Category" , category });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "error in fetching category" });
    }
  }
);


categoryRouter.delete("/admin/delete-category/:id",auth,isAdmin,async(req, res) => {
  try{
      const category = await CategoryModel.findByIdAndDelete(req.params.id)
      return res.status(200).json({ msg: "Category Deleted" , category });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "error in deleting category" });
    }
  }
);



module.exports = { categoryRouter };
