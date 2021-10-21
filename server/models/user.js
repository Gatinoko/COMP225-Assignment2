let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userModel = mongoose.Schema({
    username: 
    {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required.'
    }
},
{
    collection: "users"
});

let options = ({ missingPasswordError: 'Wrong / Missing Password' });

userModel.plugin(passportLocalMongoose, options);

module.exports.userModel = mongoose.model('user', userModel);