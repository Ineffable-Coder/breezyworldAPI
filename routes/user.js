
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
 
const router = require("express").Router();

//Update
router.put("/:id", verifyTokenAndAuthorization, async(req, res) =>{
     if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
     }

     try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
            $set: req.body,
        },
        {new: true }
     );
     res.status(200).json(updatedUser);
     } catch (err) {
        res.status(500).json(err);
     }
});

router.post("userrposttest", (req,res)=>{
    const username = req.body.username
    console.log(username);

});

module.exports = router