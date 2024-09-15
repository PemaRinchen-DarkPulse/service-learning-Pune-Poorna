const mongoose=require("mongoose");

const registerationSchema=new mongoose.Schema({
    email:String,
    password:String,
})

const registerationModel=mongoose.model("user",registerationSchema);
module.exports = registerationModel;