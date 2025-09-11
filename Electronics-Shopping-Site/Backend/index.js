const express = require("express")
const app = express()
const {userRouter} = require("./routes/user.route")
const {connection} = require("./config/db")
const dotenv = require("dotenv")
app.use(express.json())
dotenv.config()
const cors = require("cors")
const { categoryRouter } = require("./routes/category.route")
const {productRouter} = require("./routes/product.route")
const { orderRouter } = require("./routes/order.route")
const { cartRouter } = require("./routes/cart.route")


app.use(cors({
  origin: "*", // or specific domains
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false // 
}));

PORT = process.env.PORT || 8080

app.use("/user",userRouter)
app.use("/",categoryRouter)
app.use("/",productRouter)
app.use("/",orderRouter)
app.use("/",cartRouter)


app.get("/",(req,res)=>{
  res.send("server is running fine")
})


app.listen(PORT,async()=>{
     await connection
     console.log(`server in running on port ${PORT}`)
})