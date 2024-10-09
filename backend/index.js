const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const path=require("path");
const cookieParser=require("cookie-parser");
const routeList=require("./routes/list-route")
const routeUser=require('./routes/user-route');
const routeProfile=require('./routes/profile-route');
const routeMessage=require('./routes/message-route');
const routeMembers=require('./routes/conversation-route');
const dotenv=require("dotenv");
const {app,server}=require('./socketIO/server');
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


const url=process.env.url;
const port=process.env.port;

try{
    mongoose.connect(url);

    console.log("Successfully connected");
}
catch(error){

    console.log(error);
}

app.use("/api/list",routeList);
app.use("/api/user",routeUser);
app.use("/api/profile",routeProfile);
app.use("/api/message",routeMessage);
app.use("/api/conversation",routeMembers);

//-----------------------code for deployment------------------------------------
if(process.env.NODE_ENV==='production'){
    const dirPath=path.resolve();

    app.use(express.static('./frontend/dist'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,'./frontend/dist','index.html'));
    })
}

server.listen(port,()=>(
    console.log(`Running on ${port}`)
))