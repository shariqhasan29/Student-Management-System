const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const router = require('./router/router')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI)
.then(()=> console.log('db is connected'))
.catch(()=> console.log('db is not connected'))

app.use('/', router)

app.listen(process.env.PORT, ()=>console.log('server running'))