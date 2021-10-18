let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userModel = mongoose.Schema({
    //email: String,
    username: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    //password: String
},
{
    collection: "users"
});

let options = ({ missingPasswordError: 'Wrong / Missing Password' });

userModel.plugin(passportLocalMongoose, options);

module.exports.userModel = mongoose.model('user', userModel);