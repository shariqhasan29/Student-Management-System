const mongoose = require('mongoose')

const addstudentschema = new mongoose.Schema({
    fullname:String,
    fathername:String,
    mothername:String,
    email:String,
    address:String,
    dob:Date,
    phone:Number,
    fphone:Number,
    cgpa:Number,
    passedout:Number,
    amount:Number,
    photo:String
})

module.exports = mongoose.model('addstudents', addstudentschema)