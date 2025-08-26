const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signUp", async (req, res) => {
  const { userName, email, password } = req.body;
   try {
  if (!userName || !email || !password) {
    return res.status(400).json({ msg: "Provide sufficient data" });

  }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({ msg: "User already exist" });
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        return res.status(404).json("error in hashing password");
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
  try {
    if (!email || !password) {
    return res.status(400).json({ msg: "Provide sufficient data" });
  }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    } else {

      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user.userName },
            process.env.SECRET_KEY
          );
          return res.status(200).json({ msg: "User logged in Succesfully", token });
        } else {
          return res.status(400).json({ msg: "Invalid Credential" });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
  const user = await UserModel.findOne({ email });
});

module.exports = { userRouter };
