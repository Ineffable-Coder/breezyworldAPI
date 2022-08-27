const router = require("express").Router();

//router.put("/:id", verifyToken)

router.post("userrposttest", (req,res)=>{
    const username = req.body.username
    console.log(username);
});

module.exports = router