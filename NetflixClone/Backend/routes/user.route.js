const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { userName, email, password } = req.body;

  // Check if any required field is missing
  if (!userName || !email || !password) {
    return res.status(400).json({ msg: "Insufficient data" });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(200).json({ msg: "User has already Registered" });
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        return res.status(404).json({msg:"error in hashing password"});
      } else {
        const user = new UserModel({ userName, email, password: hash });
        await user.save();
        return res.status(200).json({ msg: "User Registered Succesfully" });
      }
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if any required field is missing
  if ( !email || !password) {
    return res.status(400).json({ msg: "Insufficient data" });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user.userName },
            process.env.SECRETKEY
          );
          return res.status(200).json({ msg: "User logged in", token });
        } else {
          return res.status(400).json({ msg: "Invalid Credential" });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

});

module.exports = { userRouter };
