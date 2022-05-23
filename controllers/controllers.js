const user = require('../models/User')

exports.addUser = async (req,res) => {
    try{
        const findContact = await User.findOne({name:req.body.name})
        if(findContact){
            return res.status(400).send({msg:`the name : ${req.body.name} already exists`})
        }
        const newContact= new User(req.body)
        await newContact.save() 
        res.status(200).send({msg:`user : ${req.body} added succesfully`})
    }
    catch(err){
        res.status(500).send(err)
    }
}



exports.getAllUsers = async (req,res) => {
    try{
        const allusers = await User.find()
        res.status(200).send({msg:'all users : ',allusers})
    }
    catch(err){
        res.status(500).send(err)
    }
}



exports.updateUsers = async (req,res)=> {

    try{
        const editeduser = await User.updateOne({_id:req.params.id},{$set:{...req.body}})
        res.status(200).send({msg:'user edited ',editeduser})    }
    catch(err){
        res.status(500).send(err)
    }

}


exports.deleteUsers = async (req,res)=> {

    try{
        const deletedcontact = await User.deleteOne({_id:req.params.id})
        res.status(200).send({msg:'contact deleted ',deletedcontact})

    }
    catch(err){
        res.status(500).send(err)
    }

}



exports.getOneUser = async (req,res)=> {

    try{
        const oneContact = await User.findById(req.params.id)
        res.status(200).send({msg:'contact found ',oneContact})
    }
    catch(err){
        res.status(500).send(err)
    }

}
