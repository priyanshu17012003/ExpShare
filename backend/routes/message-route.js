const express=require('express');
const route=express.Router();
const messageController=require('../controllers/message-controller');
const secureRoute=require('../middleware/secureRoute');

route.post('/send/:id',secureRoute,messageController.sendMessage);
route.get('/get/:id',secureRoute,messageController.getMessage);

module.exports=route;