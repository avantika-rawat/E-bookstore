const mongoose = require("mongoose");
const Book = require("./models/books");
const books = require("./data/book.js");

mongoose
  .connect(
    "mongodb+srv://avantikarawat:26122003@cluster0.ajaxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("✅ 10 books seeded!");
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
