const express=require("express")
const { ToorModel} =require("../model/toor.Model")
const toorRoute=express.Router();



toorRoute.get("/toor",async(req,res)=>{

const data=await ToorModel.find()
res.send(data)


})




toorRoute.post("/create",async(req,res)=>{
   const payload=req.body;
   try {
     const new_toor=new ToorModel(payload)
     await new_toor.save()
     res.send("New Toor Registerd .....")



   } catch (error) {
    console.log(error)
    res.send("Failed To Register new Toor")
   }
    const data=await ToorModel.find()
    res.send(data)
    
    
})



module.exports={
    toorRoute
}