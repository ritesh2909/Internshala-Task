const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../verifyToken");


// update user details
router.put("/:id", verifyTokenAndAuthorization,  async(req,res)=>{
    if(req.body.password)
    {
           const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
    }
    try {
        const updatedUser = User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,                
            },
            {new : true}
        );

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete an account
router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account Deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

// get a user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res, next) => {

    try {
        const user = await User.findById(req, params.id);

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others });
    } catch (error) {
        return res.status(500).json(error);
    }

})

// get all users with queries 
router.get("/", verifyTokenAndAdmin, async (req, res, next) => {


    const query = req.query.new;

    try {

        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json(error);
    }

})


module.exports = router;