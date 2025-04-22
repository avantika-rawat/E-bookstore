// conn/seed.js
require("dotenv").config({ path: "../.env" }); // ✅ Important to add path if seed.js is in /conn

const mongoose = require("mongoose");
const Book = require("../models/books");

// 👇 Optional: Test if URI is being read
console.log("🔍 URI from .env:", process.env.URI);

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("✅ Connected to MongoDB");

    // Add your seed data here
    const books = [
      {
        url: "https://example.com/image1.jpg",
        title: "Book One",
        author: "Author A",
        price: 299,
        desc: "A fascinating story of courage, mystery, and resilience. Follow the journey of a young adventurer as they unravel secrets buried in the past. With twists at every turn, this novel blends emotion and suspense beautifully. Readers will find themselves captivated from start to finish. It's a tale that challenges what we believe about truth and destiny. A perfect blend of character and plot.",
        language: "English",
      },
      {
        url: "https://example.com/image2.jpg",
        title: "Whispers of the Wind",
        author: "Lina Cole",
        price: 350,
        desc: "In a small town nestled by the sea, secrets have a way of surfacing. Lina weaves a tale of love, loss, and the power of memories. As the wind whispers through the trees, the characters confront their deepest fears. The storytelling is gentle yet gripping, with a lyrical prose that lingers. Every chapter leaves you yearning for more. An emotional rollercoaster that stays with you.",
        language: "English",
      },
      {
        url: "https://example.com/image3.jpg",
        title: "Shadows in the Frame",
        author: "Dev Mehta",
        price: 420,
        desc: "An art heist gone wrong sets the stage for a thrilling chase across continents. With dynamic characters and a plot full of surprises, this book is a masterpiece of modern suspense. Dev Mehta explores themes of betrayal and ambition in a fast-paced narrative. The dialogue crackles with wit, and the pace never slows. Readers are pulled deep into a world of intrigue and elegance. A perfect read for thriller lovers.",
        language: "English",
      },
      {
        url: "https://example.com/image4.jpg",
        title: "Beyond the Stars",
        author: "Rhea Thomas",
        price: 390,
        desc: "What lies beyond our galaxy? This science fiction adventure tackles questions of existence and connection through the lens of space exploration. With vivid world-building and emotionally resonant characters, the journey becomes deeply personal. Rhea Thomas writes with heart and imagination, taking us to otherworldly places. Expect breathtaking twists and a profound message. A stellar tale that stays with you long after the last page.",
        language: "English",
      },
      {
        url: "https://example.com/image5.jpg",
        title: "The Forgotten Letters",
        author: "Ishaan Kapoor",
        price: 275,
        desc: "When old letters are discovered in an attic, a decades-old love story begins to unravel. Ishaan Kapoor crafts a tender, time-hopping narrative filled with emotion and nostalgia. The characters are beautifully flawed and deeply human. Through past and present, the story reveals timeless truths about forgiveness and fate. This novel is a moving tribute to love that endures. A heartwarming and heartfelt read.",
        language: "English",
      },
    ];

    await Book.insertMany(books);
    console.log("✅ Data seeded successfully");

    process.exit(0); // Exit after seeding
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedBooks();
