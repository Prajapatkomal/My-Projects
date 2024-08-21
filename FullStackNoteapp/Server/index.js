import express from "express"
import {connection} from "./config/db.js"
import {userRouter} from "./router/user.router.js"
import {notesRouter} from "./router/notes.router.js"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use("/user",userRouter)
app.use("/notes",notesRouter)




app.listen(PORT,async()=>{
    try {
         await connection
         console.log(`server started at ${PORT},server connected to DB`) 
    } catch (error) {
        console.log("error in server connection",error)
    }
})