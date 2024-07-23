const mongoose=require('mongoose');
const User=require('./user-model');

const schema=mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId, ref:User},//id of the user
    name:{type:String, required:true,},
    email:{type:String, required:true, unique:true},
    pronouns:{type:String, required:true},
    Llink:{type:String, required:true},
    bio:{type:String, required:true},
    img:{type:String, required:true},
})

const profile=mongoose.model("profile",schema);

module.exports=profile;