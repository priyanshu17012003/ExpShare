const express=require('express');
const route=express.Router();
const userController=require('../controllers/user-controller')

route.post('/signup',userController.signUp)
route.post('/login',userController.login)
route.post('/logout',userController.logout)

module.exports=route;