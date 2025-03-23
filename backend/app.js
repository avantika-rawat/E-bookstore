const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");



//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);






app.get("/", (req,res)=>{
    res.send("hello from back");
});


//creating port
app.listen(process.env.PORT,()=>{
console.log("sever started");
});