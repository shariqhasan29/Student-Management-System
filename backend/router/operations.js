const addstudentschema = require('../Model/addstudentschema')
const multer = require('multer')


const post_studata = async(req, res)=>{

    const addstudent = new addstudentschema({
        ...req.body
    })

    const addstudentdata = await addstudent.save()
    res.json(addstudentdata)


}

const mystorage = multer.diskStorage({
    destination:(req, file, callback)=>{

        callback(null, "images")

    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+" "+ file.originalname)
    }
})

const upload = multer({

    storage: mystorage
})


module.exports = {post_studata, upload}