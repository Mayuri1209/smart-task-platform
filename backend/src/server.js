require("dotenv").config();

const app = require("./app");

const connectDB =
 require("./config/db");

const PORT =
 process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {

 console.log(
   `Server Running On Port ${PORT}`
 );
});



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app =  require("./app");

// app.use(cors());
// app.use(express.json());

// mongoose.connect(
// "mongodb://mongodb:27017/employeedb"
// )
// .then(()=>{

// console.log("Mongo Connected");

// app.listen(5000,()=>{
// console.log("Server Started");
// });

// })
// .catch(err=>{
// console.log(err);
// });
