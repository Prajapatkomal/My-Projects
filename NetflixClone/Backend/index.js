const express = require("express")
const connection = require("./db.js")
const app = express()
const {userRouter} = require("./routes/user.route")
const {movieRouter} = require("./routes/movie.route.js")
const dotenv = require("dotenv")
app.use(express.json())
dotenv.config()
const cors = require("cors")
app.use(cors());

PORT = process.env.PORT || 3000

app.use("/",userRouter)
app.use("/movie",movieRouter)



app.listen(PORT,async()=>{
     await connection
     console.log(`server in running on port ${PORT}`)
})