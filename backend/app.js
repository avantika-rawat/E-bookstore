const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");




//routes
app.use("/api/v1", user);





app.get("/", (req,res)=>{
    res.send("hello from back");
});


//creating port
app.listen(process.env.PORT,()=>{
console.log("sever started");
});