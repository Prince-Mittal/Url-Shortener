const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// @type    GET
// @route   /:code
// @desc    route for redirecting to original or long URL
// @access  PUBLIC
router.get('/:code', async (req, res) => {
    try{
        const url = await Url.findOne({urlCode: req.params.code});
        
        if(url){
            return res.redirect(url.longUrl);
        }
        else{
            res.status(404).json('No URL found');
        }
    }catch(err){
        res.status(500).json('Server error');
    }

});


module.exports = router;