const Profile=require("../models/profile-model");

exports.createProfile=async(req,res)=>{

    try{
    const {name,email,pronouns,Llink,bio,img}=req.body;
    const profile=await Profile.create({
        id:req.user._id,
        name:name,
        email:email,
        pronouns:pronouns,
        Llink:Llink,
        bio:bio,
        img:img
    })

    res.status(201).json({message:"profile created successfully",profile});
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
        console.log(error);
    }
}

exports.getProfile=async(req,res)=>{
    try{
        const id=req.user.id;
        const profile=await Profile.findOne({id:id});
        res.status(200).json({message:"profile fetched successfully",profile:{
            name:profile.name,
            email:profile.email,
            pronouns:profile.pronouns,
            Llink:profile.Llink,
            bio:profile.bio,
            img:profile.img,
        }}
        );
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
        console.log(error);
    }
}

exports.showOtherProfile=async(req,res)=>{
    try{
        const id=req.params.id;
        const profile=await Profile.findById(id);
        res.status(200).json({message:"profile fetched successfully",profile:{
            _id:profile._id,
            id:profile.id,
            name:profile.name,
            email:profile.email,
            pronouns:profile.pronouns,
            Llink:profile.Llink,
            bio:profile.bio,
            img:profile.img,
        }}
        );
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
        console.log(error);
    }
}
