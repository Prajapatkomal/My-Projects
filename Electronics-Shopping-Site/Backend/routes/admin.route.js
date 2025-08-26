const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const{isAdmin} = require("../middleware/isAdmin.middleware")


const adminRouter = express.Router();





module.exports = { adminRouter };