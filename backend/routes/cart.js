const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { authenticationToken } = require("./userAuth");

//put book to cart
router.put("/add-to-cart", authenticationToken, async (req, res) => {
  // console.log("headers from front: " + JSON.stringify(headers));

  try {
    const { bookid, id } = req.headers;
    // const userData = await User.findById(id);
    const userData = await User.findById(id).populate({
      path: "cart",
      model: "Book", // replace "Book" with your actual book model name if different
    });

    const bookinCart = userData.cart.includes(bookid);
    if (bookinCart) {
      return res.status(200).json({ message: " Book is already in cart" });
    }
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    console.log("User cart after update:", userData.cart);

    return res.status(200).json({ message: "Book added to favourites" });
  } catch (error) {
    console.error("Error in /add-book-to-cart:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

//delete cart from cart
router.put(
  "/remove-book-from-cart/:bookid",
  authenticationToken,
  async (req, res) => {
    try {
      const { bookid } = req.params;
      const { id } = req.headers;
      await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
      return res.json({
        status: "Success",
        message: "Book removed from cart",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

//get cart of particular user
router.get("/get-user-cart", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart");
    const cart = userData.cart.reverse();
    return res.json({
      status: "Success",
      data: cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
