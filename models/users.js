const joi = require('joi');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250,
        unique : true,
    },


    firstname : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250,
    },

    lastname : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250,
    },

    email : {
        type: String,
        required: true,
        unique : true,
        minlength : 3,
        maxlength : 250
    },

    password : {
        type : String,
        required: true,
        minlength : 6,
        maxlength : 250
    },

})



const User = mongoose.model('User', userSchema);

function  validateUser(user) {
    const schema = {
        username : joi.string().min(3).required(),
        email: joi.string().min(6).max(255).required().email(),
        password: joi.string().min(6).max(255).required(),
        password_confirmation: joi.string().valid(joi.ref('password')).required(),
    }

    return joi.validate(user,schema);
}


exports.User = User;
exports.Validate = validateUser;

