const UserModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, gender } = req.body;

    /* This is responsible for Insert the data */
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
