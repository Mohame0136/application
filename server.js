const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const router = require('./routes/contact')
const router1 = require('./routes/admin')


require("dotenv").config({path:"./config/.env",});

app.use(express.json())
app.use('/api/contacts',router)
app.use('/api/admins',router1)

connectDB()

app.listen(6000,(err) => err ? console.log('error!',err) : console.log(`server is running on port : 6000`))

