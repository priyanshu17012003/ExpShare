const User = require("../models/user-model");
const bcryptjs = require('bcryptjs');
const jwt=require('jsonwebtoken');
const key="SECRET";

exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists", user:{
                name: userCreated.name,
                email: userCreated.email,
            }  });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const userCreated = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const token=jwt.sign({email:userCreated.email,name:userCreated.name,_id:userCreated._id},key,{expiresIn:'7d'});
        res.cookie("uid", token, { httpOnly: true, maxAge: 8640000 /*1 day*/ , sameSite: "strict", secure: true });

         res.status(200).json({ message: "User created successfully", user:{
            _id: userCreated._id,
            name: userCreated.name,
            email: userCreated.email,
        },token });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userLoginExists = await User.findOne({ email });

        if (!userLoginExists) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcryptjs.compare(password, userLoginExists.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token=jwt.sign({email:userLoginExists.email,name:userLoginExists.name,_id:userLoginExists._id},key,{expiresIn:'7d'});
        res.cookie("uid", token, { httpOnly: true, maxAge: 8640000/*1 day*/ , sameSite: "strict", secure: true });

        res.status(200).json({
            message: "Login successfully",
            user: {
                _id: userLoginExists._id,
                name: userLoginExists.name,
                email: userLoginExists.email,
            },token
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.logout=async(req,res,next)=>{
    try {
        res.clearCookie("uid");
        res.status(200).json({message:"Logout successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}