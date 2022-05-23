const mongoose = require('mongoose')

const {Schema,model} = mongoose
const adminSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    adminCode:{
        type:Number,
        required:true
    },
    email:{
        type:String,
    }
})

module.exports = User = model('admin', adminSchema)