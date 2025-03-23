const router = router("express").Router();
const User = require("../models/user");
const {authenticationToken} = require("./userAuth");


//add book to fav
router.put("/add-book-to-favourite", authenticationToken, async(req,res)=>{
try{
const {bookid, id} = req.headers;
const userData = await User.findById(id);
const isBookFav = userData.favourites.includes(bookid);
if(isBookFav){
return res.status(200).json({message : " Book is already added"});
}
await User.findByIdAndUpdate(id, {$push :{favourites : bookid}});
return res.status(200).json({message : "Book added to favourites"});

}
catch(error){
    res.status(500).json({message : "Internal server error"});

}
});

//remove book from fav
router.put("/remove-book-from-favourite/:bookid", authenticationToken, async(req,res)=>{
    try{
    const {bookid, id} = req.headers;
    const userData = await User.findById(id);
    const isBookFav = userData.favourites.includes(bookid);
    if(isBookFav){
        await User.findByIdAndUpdate(id, {$pull :{favourites : bookid}});

    }
    return res.status(200).json({message : "Book added to favourites"});
    
    }
    catch(error){
        res.status(500).json({message : "Internal server error"});
    
    }
    });


//get fav books of particular user
router.get("/get-favourite-books", authenticationToken, async(req,res)=>{
try{
const {id} = req.headers;
const userData = await User.findById(id).populate("favourites");
const favouriteBooks = userData.favourites;
return res.json({
    status : "Success",
    data : favouriteBooks,
});
}
catch(error){
    console.log(error);
    res.status(500).json({message : "Internal server error"});

}
});



module.exports = router;