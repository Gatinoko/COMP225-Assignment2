var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//Connection to the contact model.
let contact = require('../models/contact');

/* GET businessContacts page. */
module.exports.displayBusinessContactsPage = (req, res, next) => {
  contact.find((err, contactList) => {
    if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContacts', {title: 'Business Contacts', contactList: contactList})           
        }
  });
};

module.exports.displayUpdatePage = (req, res, next) => {
  res.render('updateBusinessContact', {title: 'Update', contactList: contactList})  
};

