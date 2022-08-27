const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//REGISTER
router.post("register", async (req,res)=>{
  const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
  });

   /*   const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin, 
        }, process.env.JWT_SEC
        {expiresIn:"3d"}
        );
*/
  try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUse);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;