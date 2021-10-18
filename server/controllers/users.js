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
            res.render('businessContacts', {title: 'Business Contacts', contactList: contactList, username: req.user ? req.user.username : '' })           
        }
  });
};

module.exports.processDeleteOption = (req, res, next) => {
  let id = req.params.id;
  
  contact.deleteOne({_id: id}, (err) => {
    if(err)
    {
      return console.error(err);
    }
    else
    {
      res.redirect("/users/business-contacts")
    }
  })
}

/* GET/POST updateBusinessContact page. */
module.exports.displayUpdatePage = (req, res, next) => {
  let id = req.params.id;
  contact.findById(id, (err, contactToUpdate) => {
    if(err)
        {
            return console.error(err);
        }
        else
        {
          res.render('updateBusinessContact', { title: 'Update', contact: contactToUpdate, username: req.user ? req.user.username : '', id: req.params.id });        
        }
  });
};
module.exports.processUpdatePage = (req, res, next) => {
  let id = req.params.id;

  let updatedContact = contact({
    "_id": id,
    "name": req.body.contactName,
    "email": req.body.contactEmail,
    "number": req.body.contactNumber
  });

  contact.updateOne({_id: id}, updatedContact, (err) => {
    if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
          res.redirect("/users/business-contacts")           ;
        }
  });
};
