const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const{isAdmin} = require("../middleware/isAdmin.middleware")
const {OrderModel} = require("../model/order.model")
const braintree = require("braintree");

const orderRouter = express.Router();


var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});




// get all orders data by Admin:---

orderRouter.get("/admin/orders",auth,isAdmin,async(req,res)=>{
  try{
      const orders =  await OrderModel
      .find()
      .populate("products","-photo")
      .populate("buyer","userName")
      .sort({createdAt:-1})
      res.status(200).json({msg:"All orders fetched",orders})

  }catch(error){
    res.status(500).json({msg:"error while getting orders"})
    console.log(error)
  }
})



// update order status by Admin:-----

orderRouter.put("/admin/order-status/:orderId", auth, isAdmin, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await OrderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    )
      .populate("products", "-photo")
      .populate("buyer", "name");

    res.status(200).json({ msg: "Order status updated", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error updating order status" });
  }
});




// get All orders of user :-
orderRouter.get("/user/orders",auth,async(req,res)=>{
  try{
      const orders =  await OrderModel
      .find({ "buyer.id": req.userId })
      .populate("products","-photo")
       .sort({createdAt:-1})
      res.status(200).json({msg:"All orders fetched",orders})

  }catch(error){
    res.status(500).json({msg:"error while getting orders"})
    console.log(error)
  }
})






// payment routes
//  token 

orderRouter.get("/braintree/token",async(req,res)=>{
   try {
      gateway.clientToken.generate({},function(err, result){
    if (err) {
      res.status(500).send(err);
    }else{
       res.send(result)
    }
  })
   } catch (error) {
     console.log(error)
   }
})


// payment 
orderRouter.post("/braintree/payment",auth,async(req,res)=>{
  try {
      const {cart,nonce} = req.body
      let total =0;
      cart.map((i)=>{
        total+= i.price
      });
      let newTransaction = gateway.transaction.sale({
        amount:total,
        paymentMethodNonce:nonce,
        options:{
          submitForSettlement:true
        }
      },
      function(error,result){
        if(result){
           const order = new OrderModel({
            products:cart,
            payment:result,
           buyer: {
                      id: req.userId,
                      userName: req.userName
                  }
           }).save()
           res.json({ok:true})
           console.log(order)
        }else{
          res.status(500).send(error)
        }
      }
    )
  } catch (error) {
     console.log(error)
  }
})




module.exports = { orderRouter };