const express=require("express")
const {connection }=require("./config/db")
const {toorRoute} =require("./routes/toors.Route")
const mongoose=require("mongoose")
require ("dotenv").config();
const app=express()

app.use(express.json())

app.use("/",toorRoute)


app.listen(process.env.PORT,async()=>{
    try {
      await connection  
      console.log("Connected To DB")
    } catch (error) {
        console.log("Connected Failed")
        console.log(error)

    }
})