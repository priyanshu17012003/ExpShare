const mongoose=require('mongoose');
const user = require('./user-model');
const message = require('./message-model');

const conversationSchema=mongoose.Schema({
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:user,
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:message,
            default:[],
        }
    ]
},{timestamps:true});

const conversation=mongoose.model("conversation",conversationSchema);

module.exports=conversation