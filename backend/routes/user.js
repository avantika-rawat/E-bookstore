const router = router("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {authenticationToken} = require("./userAuth");







//sign Up
router.post("/sign-up" , async(res,req)=>{
    try{
        const {username, email, password,address} = req.body;
//check username length is more than 3 
if(username.length < 3){
    return res.status(400).json({message : "Username length should be greater than 3"})
}

//check username exists
const existingUsername = await User.findOne({username : username});
if(existingUsername){
    return res.status(400).json({message : "username already exists"});
}


    //check email exists
const existingEmail = await User.findOne({email : email});
if(existingEmail){
    return res.status(400).json({message : "Email already exists"});
}

//check pass len
if(password.length<= 5){
    return res.status(400).json({message :"Password length must be greater than 5"});
}

const hashPass = await bcrypt.hash(password,10);


const newUser = new User({
    username : username,
    email : email,
    password : hashPass,
    address : address,
});
await newUser.save();
return res.status(200).json({message : "SignUp Sucessfully"});
    }catch(error){
res.status(500).json({message : "Internal server error"})
    }

});

//sign in

router.post("/sign-in" , async(res,req)=>{
    try{
     const {username, password} = req.body;
     const existingUser = await User.findOne({username});
     if(!existingUser){
     res.status(400).
     json({message : "Invalid credentials"});
     }

     await bcrypt.compare(password, existingUser,(err,data)=>{
        if(data){
            const authClaims = {
                name: existingUser.username,
                role: existingUser.role,
            };
            
            const token = jwt.sign({authClaims}, "bookStore123",{expiresIn : "30d"});
            res.status(200).
            json({id : existingUser._id,
                role : existingUser.role,
                token : token,
            }); 
        }
        else{
            res.status(400).
     json({message : "Invalid credentials"});
        }
     });
     }catch(error){
     res.status(500).json({message : "Internal server error"})
    }

});

//get-user-info
router.get("/get-user-information", authenticationToken, async(req,res)=>{
    try{
     const {id} = req.headers;
     const data = await User.findById(id).select('-password'); //removes the password from the data
     return res.status(200).json(data);
    }catch(error){
     res.status(500).json({message : "Internal server error"});
    }
})






module.exports = router;