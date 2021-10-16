let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);