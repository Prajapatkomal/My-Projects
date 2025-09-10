const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName:{type:String},
    email: { type: String, required: true, unique: true },
    password: { type:String, required: true },
    address: { type:String},
    phone: { type:Number},
    profile:String,
    role:{type:Number,default:0}
  },
    {
    versionKey: false,
    timestamps: true
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
