const list=require('../models/list-model');
const profile=require('../models/profile-model');

exports.getList=async (req,res,next)=>{

    try{
        const display=await list.find();
        res.status(200).json(display);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.createItem=async (req,res,next)=>{
    try{
        const {name,email,company,type,exps,experience,img}=req.body;
        const existedProfile=await profile.findOne({email:email});
        console.log(existedProfile);
        const item=await list.create({
            id:existedProfile._id,
            name:name,
            email:email,
            company:company,
            type:type,
            exps:exps,
            experience:experience,
            img:img});

        res.status(200).json({message: "Item created successfully", item:item});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }

}

exports.getUserJourney=async (req,res,next)=>{
    try{    
        const display=await list.findById(req.params.id);
        res.status(200).json({message: "Journey fetched successfully", display:display});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.deleteItem=async(req,res)=>{

    try{
    const id=req.params.id;
    const deleteUser=await list.findByIdAndDelete(id);
    if(!deleteUser){
        return res.status(404).json({message: "Item not found"});
    }
    res.status(200).json({message: "Item deleted successfully"});
    }
    catch(error)
    {
        res.status(500).json({message: "Internal server error"});
    }
}

exports.updateItem=async(req,res)=>{
    try{
        const id=req.params.id;
        const {name,email,company,type,exps,experience,img}=req.body;
        const existedItem=await list.findOne({email:email});
        const item=await list.findByIdAndUpdate(id,{
            id:existedItem._id,
            name:name,
            email:email,
            company:company,
            type:type,
            exps:exps,
            experience:experience,
            img:img
        },{new:true});
        res.status(200).json({message: "Item updated successfully", item:item});
    }
    catch(error)
    {
        res.status(500).json({message: "Internal server error"});
    }
}
