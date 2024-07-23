const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const routeList=require("./routes/list-route")
const routeUser=require('./routes/user-route');
const routeProfile=require('./routes/profile-route');
const routeMessage=require('./routes/message-route');
const dotenv=require("dotenv");
const {app,server}=require('./socketIO/server');
dotenv.config();

//middleware
app.use(cors());
app.use(express.json())
app.use(cookieParser());


const url=process.env.url||"mongodb://localhost:27017/exps";
const port=process.env.port||5000;

try{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Successfully connected");
}
catch(error){

    console.log(error);
}

app.use("/api/list",routeList);
app.use("/api/user",routeUser);
app.use("/api/profile",routeProfile);
app.use("/api/message",routeMessage);


server.listen(port,()=>(
    console.log(`Running on ${port}`)
))