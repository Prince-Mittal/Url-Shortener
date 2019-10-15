const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortID = require('shortid');
const config = require('config');

const Url = require('../models/url');

// @type    POST
// @route   /api/url/shorten
// @desc    route for creating short url
// @access  PUBLIC
router.post('/shorten',async (req,res) => {
    const longUrl = req.body.longUrl;

    

    //Check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({ longUrl });
            if(url){
                res.json(url);
            }else{
                //Create url code
                const baseUrl = "http://localhost:3000/"
                const urlCode = shortID.generate();
                const shortUrl = baseUrl + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date : new Date()
                });

                await url.save();

                res.json(url);
            }
        }catch(err){
            console.log(err);
            res.status(500).json('Server error');
        }
    }else{
        res.status(401).json('Invalid long URL');
    }

});


module.exports = router;