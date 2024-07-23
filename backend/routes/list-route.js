const express=require('express');
const route=express.Router();
const listController=require('../controllers/list-controller')

route.get("/",listController.getList);
route.post("/item",listController.createItem);
route.get("/post/:id",listController.getUserJourney);
route.delete("/delete/:id",listController.deleteItem);
route.put("/update/:id",listController.updateItem);

module.exports=route;