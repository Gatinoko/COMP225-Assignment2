/*
    File name: users.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 21-Oct-21
*/

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let usersController = require('../controllers/users');

// Autenthication function that checks if the user is logged in.
function requireAuth(req, res, next) {

    // If user isn't logged in.
    if(!req.isAuthenticated())
    {
        res.redirect('/login');
    }
    next();
};

/* GET business contacts page and delete option. */
router.get('/business-contacts', requireAuth, usersController.displayBusinessContactsPage);
router.get('/business-contacts/delete/:id', requireAuth, usersController.processDeleteOption);

/* GET/POST edit business contacts page. */
router.get('/business-contacts/update/:id', requireAuth, usersController.displayUpdatePage);
router.post('/business-contacts/update/:id', requireAuth, usersController.processUpdatePage);

module.exports = router;
