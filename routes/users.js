const express = require('express');
const router = express.Router();

const User = require('../models/User'); 

// @route   GET api/v1/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
    res.send('register');
})
     
module.exports = router;