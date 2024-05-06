const express = require('express')
const router = express.Router()
const addstudentschema = require('../Model/addstudentschema')
const Addphotoschema = require('../Model/addphotoschema')
const multer = require('multer')


const { post_studata, upload} = require('./operations') 


router.post('/addStudent', upload.single('file'), post_studata)



module.exports = router