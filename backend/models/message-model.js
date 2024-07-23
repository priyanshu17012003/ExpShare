const mongoose=require("mongoose");

const messageSchema=mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},{timestamps:true});

const message=mongoose.model("message",messageSchema);

module.exports=message;