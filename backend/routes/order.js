const express = require("express");
const router = express.Router(); // ✅ Correct way to initialize routerconst User = require("../models/user");
const { authenticationToken } = require("./userAuth");
const Order = require("../models/orders");
const Book = require("../models/books");

//place order
router.post("/place-order", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;
    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFronDb = await newOrder.save();
      //saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFronDb._id },
      });
    }
    //clearing cart
    await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });

    return res.json({
      status: "Success",
      message: "Order placed successfully",
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//get order history of particular user
router.get("/get-order-history", authenticationToken, async (req, res) => {
  try {
    const { id } = res.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const orderData = userData.order.reverse();
    return res.json({
      status: "Success",
      data: orderData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//get all orders ---admin
router.get("/get-all-orders", authenticationToken, async (req, res) => {
  try {
    const userData = await Order.find()
      .populate({
        path: "book",
      })
      .populate({
        path: "user",
      })
      .sort({ createdAt: -1 });
    return res.json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//update order --admin
router.put("/update-status/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { status: req.body.status });
    return res.json({
      status: "Success",
      message: "Status Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
