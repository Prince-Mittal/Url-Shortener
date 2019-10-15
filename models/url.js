const mongoose = require('mongoose');

let urlSchema = new mongoose.Schema({
    urlCode : String,
    longUrl : String,
    shortUrl : String,
    date : {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("Url",urlSchema);