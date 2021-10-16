var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users');

/* GET business contacts page. */
router.get('/business-contacts', usersController.displayBusinessContactsPage);

/* GET edit business contacts page. */
router.get('/business-contacts/update', usersController.displayUpdatePage);

module.exports = router;
