import mongoose, { Types } from "mongoose"

const todoSChema=new mongoose.Schema(
    {
        content:{
            type:String,
            required:true
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

        /*
        subTodos:{
            type:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"SubTodo"
                }
            ]
        }
        */

        subTodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"SubTodo"
            }
        ]
    },{timestamps:true}
)

export const Todo=mongoose.model('Todo',todoSChema)