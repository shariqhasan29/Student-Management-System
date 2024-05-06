const mongoose = require('mongoose')

const addphotoschema = new mongoose.Schema({
    photo:String
})

module.exports = mongoose.model('addphoto', addphotoschema)