/*
    File name: users.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 21-Oct-21
*/

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let contact = require('../models/contact');

/* GET businessContacts page controller. */
module.exports.displayBusinessContactsPage = (req, res, next) => {

  // Searches for all the database's contacts.
  contact.find((err, contactList) => {

    // If error.
    if(err)
      {
          return console.error(err);
      }
    
    // If no error happens, render the businessContacts page with contactsList as a parameter.
    else
      {
          res.render('businessContacts', {title: 'Business Contacts', 
                                          contactList: contactList, 
                                          username: req.user ? req.user.username : ''})           
      }
  }).sort({name: 1});
};

/* GET/POST updateBusinessContact page controller. */
module.exports.displayUpdatePage = (req, res, next) => {

  // Gets the URL's id parameter.
  let id = req.params.id;

  // Finds a specific contact through the fetched id.
  contact.findById(id, (err, contactToUpdate) => {

    // If error.
    if(err)
      {
          return console.error(err);
      }

    // If no error happens, render the updateBusinessContact page.
    else
      {
        res.render('updateBusinessContact', { title: 'Update', contact: contactToUpdate, username: req.user ? req.user.username : '', id: req.params.id });        
      }
  });
};
module.exports.processUpdatePage = (req, res, next) => {

  // Gets the URL's id parameter.
  let id = req.params.id;

  // Contact type variable which holds the user input.
  let updatedContact = contact({
    "_id": id,
    "name": req.body.contactName,
    "email": req.body.contactEmail,
    "number": req.body.contactNumber
  });

  // Updates one contact record in the database.
  contact.updateOne({_id: id}, updatedContact, (err) => {

    // If error.
    if(err)
      {
          console.log(err);
          res.end(err);
      }
    
    // If no error happens, redirect the user to the businessContacts page.
    else
      {
        res.redirect("/users/business-contacts")           ;
      }
  });
};

/* GET delete option controller. */
module.exports.processDeleteOption = (req, res, next) => {

  // Gets the URL's id parameter.
  let id = req.params.id;
  
  // Deletes one record of the database.
  contact.deleteOne({_id: id}, (err) => {

    // If error.
    if(err)
    {
      return console.error(err);
    }

    // If no error happens, redirect the user back to the business contacts page.
    else
    {
      res.redirect("/users/business-contacts")
    }
  })
}