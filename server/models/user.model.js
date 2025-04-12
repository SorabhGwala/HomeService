import mongoose from "mongoose";

const userSchcema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    service:{
        type:String,
        enum:["plumber","electrician","cleaner","carpenter"],
    },

    
    photoUrl:{
        type:String,
        default:""
    }

},{timestamps:true})

export const User =mongoose.model("User",userSchcema);
