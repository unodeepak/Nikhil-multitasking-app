const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nikhil-db");
    console.log("=====> DB is connected <============");
  } catch (err) {
    console.log("error in mongoose : ", err);
  }
};

module.exports = connect;
