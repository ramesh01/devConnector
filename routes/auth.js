const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");
// @route GET api/users
// @desc test route
// @access public
router.get('/', auth, async (req, res) => {
   try {
    const user = await User.findById(req.user.id).select("-password");
    return res.json(user);
   } catch (error) {
    res.status(500).json({msg: "Server Error"});
   }
});

module.exports = router;