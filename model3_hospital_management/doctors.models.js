import mongoose from "mongoose";

const workSchedule= new mongoose.Schema({
     workingHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true
     },
     workingTime:[//array as a doctor can work in different times in different places
        {
            type:String,
            required:true
        }
     ]
})

const  doctorSchema= new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     salary:{
        type:Number,
        required:true
     },
     qualification:{
        type:String,
        required:true
     },
     experienceInYears:{
        type:Number,
        default:true
     },

     /*
     worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
     ]
     */
    //here we have mention one field inside, if we had other fields like working time we can creat that field seperatly but we can also creat another schema and 
    //attach that field alongside workingHospital(list of hospitals where doctors work)  and at last we just intigrate the schema here
    worksInHospital:{
        type:[workSchedule]
    }

}, {timestamps:true})

export const  Doctor=mongoose.model('Doctor', doctorSchema)