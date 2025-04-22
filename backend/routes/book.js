const express = require("express");
const router = express.Router(); 
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {authenticationToken} = require("./userAuth");
const Book = require("../models/books");



//add book - admin
router.post("/add-book", authenticationToken , async(req,res)=>{
try{
const {id} = req.headers;
const user = await User.findById(id);

if(user.role !== "admin"){
    return res.status(500).json({message : "Access denied, you are not the admin"});
}

const book = new Book({
url :req.body.url,
title : req.body.title,
author : req.body.author,
price :req.body.price,
desc :req.body.desc,
language : req.body.language,
});

await book.save();


}catch(error){
    res.status(500).json({message : "Internal server error"});
}
});


//update book
router.put("/update-book", authenticationToken,async (req,res)=>{
try{
const {bookid} = req.headers;
await Book.findByIdAndUpdate(bookid,{

   
        url :req.body.url,
        title : req.body.title,
        author : req.body.author,
        price :req.body.price,
        desc :req.body.desc,
        language : req.body.language,
              
});
}catch(error){
    res.status(500).json({message : "Internal server error"});

}

});

//delete book
router.delete("/delete-book", authenticationToken, async(req,res)=>{
    try{
const {bookid} = req.headers;
await Book.findByIdAndDelete(bookid);
return res.status(200).json({message : "Book del success"});
    }catch(error){
        res.status(500).json({message : "Internal server error"});

    }
});


//get all books
router.get("/get-all-books", async(req,res)=>{
    try{
const books = await Book.find().sort({createdAt : -1});
return res.json({
    status : "Success",
    data : books,
});
    }catch(error){
        res.status(500).json({message : "Internal server error"});

    }
});

//get recent added books limit 4
router.get("/get-recent-books", async(req,res)=>{
    try{
    const books = await Book.find().sort({createdAt : -1}).limit(4);
    return res.json({
    status : "Success",
    data : books,
});
    }catch(error){
        res.status(500).json({message : "error occured"});

    }
});

//get a book by id
router.get("/get-book-by-id/:id", async(req,res)=>{try{
const {id} = req.params;
const book = await Book.findById(id);
return res.json({
status : "Success",
data : book,
});
}
catch(error){
 res.status(500).json({message : "Internal server error"}) 
}
});

module.exports = router; 