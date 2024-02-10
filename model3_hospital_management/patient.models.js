import mongoose from "mongoose";

const  patientSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagonasedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodgroup:{
        type: String,
        enum: ['A+','A-','B+','B-','o+','o-']
    },
    gender:{
        type:String,
        enum:["male","female","others"]
    },
    addmittedin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps:true})

export const  Patient=mongoose.model('Patient', patientSchema)