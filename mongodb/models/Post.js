import mongoose from "mongoose";


const schema=new mongoose.Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
    photo:{type:String,required:true},
})

export const Post=mongoose.model("Post",schema);

