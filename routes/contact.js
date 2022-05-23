const express = require('express')
const { getOneUser,getAllUsers,addUser,updateUsers,deleteUsers } = require('../controllers/controllers')
const router = express.Router()
require('../controllers/controllers.js')

//get
router.get('/allcontacts',getAllUsers)

router.get('/onecontact/:id',getOneUser)


//post
router.post('/addcontact',addUser)

//Put
router.put('/editcontact/:id',updateUsers)

//delete
router.delete('/deletecontact/:id',deleteUsers)



module.exports = router