var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let usersController = require('../controllers/users');

function requireAuth(req, res, next) {
    //Checks if user is logged in.
    if(!req.isAuthenticated())
    {
        res.redirect('/login');
    }
    next();
};

/* GET business contacts page. */
router.get('/business-contacts', requireAuth, usersController.displayBusinessContactsPage);

/* GET/POST edit business contacts page. */
router.get('/business-contacts/update/:id', requireAuth, usersController.displayUpdatePage);
router.post('/business-contacts/update/:id', requireAuth, usersController.processUpdatePage);

module.exports = router;
