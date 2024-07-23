const express=require('express');
const route=express.Router();
const profileController=require('../controllers/profile-controller');
const secureRoute=require('../middleware/secureRoute')

route.post('/createProfile',secureRoute,profileController.createProfile);
route.get('/getProfile',secureRoute,profileController.getProfile);
route.get('/showOtherProfile/:id',profileController.showOtherProfile);

module.exports=route;