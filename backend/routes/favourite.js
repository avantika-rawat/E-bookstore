const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const Book = require("../models/books");

const { authenticationToken } = require("./userAuth");

//add book to fav
router.put("/add-book-to-favourite", authenticationToken, async (req, res) => {
  //   console.log("headers got on back: " + JSON.stringify(req.headers));

  try {
    const { bookid, id } = req.headers;
    // const id = req.user.id;
    const userData = await User.findById(id);
    const isBookFav = userData.favourites.includes(bookid);
    if (isBookFav) {
      return res.status(200).json({ message: " Book is already added" });
    }
    // await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
    await User.findByIdAndUpdate(id, {
      $push: { favourites: new mongoose.Types.ObjectId(bookid) },
    });
    return res.status(200).json({ message: "Book added to favourites" });
  } catch (error) {
    console.error("Error in /add-book-to-favourite:", error); // log exact error
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

//remove book from fav
router.put(
  "/remove-book-from-favourite/:bookid",
  authenticationToken,
  async (req, res) => {
    try {
      const { bookid, id } = req.headers;
      const userData = await User.findById(id);
      const isBookFav = userData.favourites.includes(bookid);
      if (isBookFav) {
        await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
      }
      return res.status(200).json({ message: "Book removed from favourites" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// //get fav books of particular user
router.get("/get-favourite-books", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favourites");
    const favouriteBooks = userData.favourites;
    return res.json({
      status: "Success",
      data: favouriteBooks,
    });
  } catch (error) {
    console.error("Error in /get-favourite-books:", error); // More detailed error logging
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
