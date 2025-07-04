const express = require("express");
const userController = require("./api/user/controller/userController");


const route = express.Router();


route.post("/create", userController.createUser);
route.get("/getAll", userController.getAll);
route.get("/getDataByName", userController.getDataByName);
route.get("/getDataById", userController.getDataById);
route.put("/updateUserData", userController.updateUserData);
route.delete("/deleteUserById", userController.deleteUserById);


module.exports = route;
