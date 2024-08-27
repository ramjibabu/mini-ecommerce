const express=require("express")
const app=express()
const dotenv=require("dotenv")
const path=require("path")
const cors=require("cors")
// db connection
const connectDatabase=require("./config/dbconnection")
// router
const productRoute = require("./routes/productRoute")
const orderRoute= require("./routes/orderRoute")
app.use(express.json())

dotenv.config({path:path.join(__dirname,'config','config.env')})

connectDatabase()

app.use(cors())

app.use(productRoute)
app.use(orderRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server listening at port ${process.env.PORT} and ${process.env.NODE_ENV}`)
})







