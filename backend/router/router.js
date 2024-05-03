const express = require('express')
const router = express.Router()


const {post_studata, upload} = require('./operations') 



router.post('/addStudent', upload.single('file'), post_studata)


module.exports = router