/*
    File name: contact.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 21-Oct-21
*/

let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name:
    {
        type: String,
        default: '',
        required: 'Password is required.'
    },

    email:
    {
        type: String,
        default: '',
        required: 'Email is required.'
    },

    number:
    {
        type: String,
        default: '000-000-000',
        required: 'Number is required.'
    }
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);