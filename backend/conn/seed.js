// conn/seed.js
require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const User = require("../models/user");

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");

    const sampleUsers = [
      {
        username: "avantika01",
        email: "avantika@example.com",
        password: "password123",
        address: "Dehradun, India",
        avatar: "",
        role: "user",
        favourites: [],
        cart: [],
        orders: [],
      },
      {
        username: "admin123",
        email: "admin@example.com",
        password: "adminsecurepass",
        address: "Delhi, India",
        avatar: "",
        role: "admin",
        favourites: [],
        cart: [],
        orders: [],
      },
    ];

    await User.deleteMany(); // Optional: Clear old data
    await User.insertMany(sampleUsers); // Use actual array here
    console.log(" Users seeded successfully");

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedUsers(); //Call the function
