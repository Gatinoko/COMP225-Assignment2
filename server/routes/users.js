var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users');

/* GET business contacts page. */
router.get('/business-contacts', usersController.displayBusinessContactsPage);

/* GET/POST edit business contacts page. */
router.get('/business-contacts/update/:id', usersController.displayUpdatePage);
router.post('/business-contacts/update/:id', usersController.processUpdatePage);

module.exports = router;
