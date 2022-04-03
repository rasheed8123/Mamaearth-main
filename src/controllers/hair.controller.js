const express = require("express")
const app = express();
const baby = require("../models/hair.model")
// console.log(happy just checking)
app.get("",
async(req,res)=>{
    try{
     const data = await baby.find({})
     return res.send(data)
    }catch(err){
        console.log(err.meassge)
        return res.send(err.message)
    }
})
module.exports = app;