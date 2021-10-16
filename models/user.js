let mongoose = require('mongoose');

let userModel = mongoose.Schema({
    email: String,
    username: String,
    password: String
},
{
    collection: "users"
});

module.exports = mongoose.model('user', userModel);