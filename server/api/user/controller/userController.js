const UserModel = require("../models/userModel");


exports.createUser = async (req, res) => {
 try {
   const { firstName, lastName, gender } = req.body;


   /* This is responsible for Insert the data. for SQL, Insert query */
   const data = await UserModel.create({ firstName, lastName, gender });
   return res
     .status(201)
     .json({ data, msg: "User Created Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};


exports.getAll = async (req, res) => {
 try {
   /* This is responsible for SQL select query */
   const data = await UserModel.find();
   return res
     .status(200)
     .json({ data, msg: "Data fetch Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};


exports.getDataByName = async (req, res) => {
 try {
   const { firstName } = req.query;
   /* This is responsible for SQL select query by name */
   /* SELECT *FROM users where firstName= */
   const data = await UserModel.find({ firstName });
   return res
     .status(200)
     .json({ data, msg: "Data fetch Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};


/* Fetch the user data by userId */
exports.getDataById = async (req, res) => {
 try {
   const { userId } = req.query;
   /* SELECT *FROM users where id= xyz*/


   const data = await UserModel.findById(userId);
   return res
     .status(200)
     .json({ data, msg: "Data fetch Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};


/* Update the user data by userId */
exports.updateUserData = async (req, res) => {
 try {
   const { firstName, lastName, userId } = req.body;
   /* SQL =>  `UPDATE User set firstName=${firstName}, lastName=${lastName} WHERE userId=${userId}` */
   const data = await UserModel.findByIdAndUpdate(userId, {
     $set: { firstName, lastName },
   });
   return res
     .status(200)
     .json({ data, msg: "Data Update Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};


/* Delete the data */
exports.deleteUserById = async (req, res) => {
 try {
   const { userId } = req.body;
   /* This is responsible for SQL select query by name */
   /* DELETE FROM users where firstName= */
  await UserModel.findByIdAndDelete(userId);
   return res
     .status(200)
     .json({ msg: "Data Deleted Successfully", success: true });
 } catch (err) {
   console.log("Error is : ", err);
 }
};
