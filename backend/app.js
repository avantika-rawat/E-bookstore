const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
app.use(express.json());
const Order = require("./routes/order");

//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);








app.get("/", (req,res)=>{
    res.send("hello from back");
});


//creating port
app.listen(process.env.PORT,()=>{
console.log("sever started");
});