import mongoose from "mongoose";

const  hospitalSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  address:{

  },
  city:{

  },
  pincode:{

  },
  specializedIn:[
    {
        type:String
    }
  ]
}, {timestamps:true})

export const  Hospital=mongoose.model('Hospital', hospitalSchema)