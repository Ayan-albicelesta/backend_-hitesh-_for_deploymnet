import mongoose from "mongoose";

const medcalRedcordSchema= new mongoose.Schema({

}, {timestamps:true})

export const MedicalRecord=mongoose.model('MedicalRecord',medcalRedcordSchema)