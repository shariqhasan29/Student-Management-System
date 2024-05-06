const addstudentschema = require('../Model/addstudentschema')
const Addphotoschema = require('../Model/addphotoschema')
const path = require('path')
const multer = require('multer')

const post_studata = async(req, res)=>{

    

    const addstudent = new addstudentschema({
        ...req.body
    })

    const addstudentdata = await addstudent.save()
    res.json(addstudentdata)

    const photo = Addphotoschema.create({photo: req.file})


    

}

const mystorage = multer.diskStorage({
    destination:(req, file, callback)=>{

        callback(null, "images")

    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + "" + Date.now()+" "+ path.extname(file.originalname))
    }
})

const upload = multer({

    storage: mystorage
})


module.exports = {upload, post_studata}