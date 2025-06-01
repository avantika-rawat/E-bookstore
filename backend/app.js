const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const cors = require("cors");
const user = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
app.use(express.json());
const Order = require("./routes/order");
app.use(
  cors({
    origin: "https://voluble-cupcake-885cc3.netlify.app",
    credentials: true,
  })
);

//routes
app.use("/api/v1", user);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

//creating port
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
