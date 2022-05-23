const express = require('express')
const { getOneAdmin,getAllAdmins,addAdmins,updateAdmin,deleteAdmins } = require('../controllers/controllersAdmin.js')
const router1 = express.Router()
require('../controllers/controllersAdmin.js')

//get
router1.get('/allAdmins',getAllAdmins)

router1.get('/oneAdmin/:id',getOneAdmin)

//post
router1.post('/addAdmin',addAdmins)

//Put
router1.put('/editAdmins/:id',updateAdmin)

//delete
router1.delete('/deleteAdmins/:id',deleteAdmins)


module.exports = router1