const mongoose=require("mongoose");
const profile=require("./profile-model");

const schema=mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId, ref:profile},
    name:{type:String, required:true},
    email:{type:String, required:true},
    company:{type:String, required:true},
    type:{type:String, required:true},
    exps:{type:String, required:true},
    experience:{type:String, required:true},
    img:{type:String, required:true},
},
{
    timestaps:true,
}
)

const list=mongoose.model("list",schema);

module.exports=list;