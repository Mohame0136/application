const admin = require('../models/admin')

exports.addAdmins = async (req,res) => {
    try{
        const findContact = await admin.findOne({name:req.body.name})
        if(findContact){
            return res.status(400).send({msg:`the admin : ${req.body.name} already exists`})
        }
        const newContact= new admin(req.body)
        await newContact.save() 
        res.status(200).send({msg:`admin : ${req.body} added succesfully`})
    }
    catch(err){
        res.status(500).send(err)
    }
}



exports.getAllAdmins = async (req,res) => {
    try{
        const allusers = await admin.find()
        res.status(200).send({msg:'all admins : ',allusers})
    }
    catch(err){
        res.status(500).send(err)
    }
}



exports.updateAdmin = async (req,res)=> {

    try{
        const editeduser = await admin.updateOne({_id:req.params.id},{$set:{...req.body}})
        res.status(200).send({msg:'admin edited ',editeduser})    }
    catch(err){
        res.status(500).send(err)
    }

}


exports.deleteAdmins = async (req,res)=> {

    try{
        const deletedcontact = await admin.deleteOne({_id:req.params.id})
        res.status(200).send({msg:'admin deleted ',deletedcontact})

    }
    catch(err){
        res.status(500).send(err)
    }

}



exports.getOneAdmin = async (req,res)=> {

    try{
        const oneContact = await admin.findById(req.params.id)
        res.status(200).send({msg:'admin found ',oneContact})
    }
    catch(err){
        res.status(500).send(err)
    }

}