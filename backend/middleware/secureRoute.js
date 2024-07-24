const jwt=require("jsonwebtoken");
const User=require("../models/user-model");
const key=process.env.key||"SECRET";

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.uid;
        if(!token)
        {
            return res.status(401).json({ error: "No token, Unauthorized" });
        }
        const decoded = jwt.verify(token, key);
        if(!decoded)
        {
            return res.status(401).json({ error: "Invalid token, Unauthorized" });
        }
        const user = await User.findById({ _id: decoded._id});
        if(!user)
        {
            return res.status(401).json({ error: "No user found, Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = secureRoute;