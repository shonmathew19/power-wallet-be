const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    accountType:{
        type:String,
        require:true,
        default:"user"
    }
})

const users = mongoose.model('users',userSchema);
module.exports=users;