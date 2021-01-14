const mongoose = require('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema

const ShortUrlSchama = new Schema({
    url:{
        type: String,
        required:true,
    },
    shortId:{
        type: String,
        required: true
    }
})

const ShortUrl = mongoose.model('shortUrl',ShortUrlSchama)

module.exports = ShortUrl