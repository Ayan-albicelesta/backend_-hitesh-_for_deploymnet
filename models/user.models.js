import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
       username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
       },
       email:{
        type:String,
        required: true,
        unique: true,
        lowercase:true
       },
       password:{
        type:String,
        required:[true,'password is required']//we can also pass custom messeges
       }
    },
    {timestamps:true}//this second object refres to the timestamps
    
)

export const User=mongoose.model('User',UserSchema)