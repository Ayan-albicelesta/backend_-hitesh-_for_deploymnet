import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    quantitiy:{
        type:Number,
        required:true
    }
})

const  orderSchema=new mongoose.Schema(
    {
       orderPrice:{
         type:Number,
         required:true
       },
       customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       },

       orderItems:{
        type:[orderItemSchema]//we have created a schema seperatly and integrated it inside orderItems
       },

       address:{
        type:String,
        required:true
       },

       status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],//enum basically gives choice, user can only choose among this
        default:"PENDING"
       }


    }, {timestamps:true}
)

export const  Order=mongoose.model('Order', orderSchema)