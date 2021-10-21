/*
    File name: index.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 21-Oct-21
*/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page routing. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

/* GET about page routing. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page routing. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page routing. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page routing. */
router.get('/contact', indexController.displayContactPage);

/* GET/POST login page routing. */
router.get('/login', indexController.displayLoginPage);
router.post('/login', indexController.processLoginPage);

/* GET logout routing. */
router.get('/logout', indexController.performLogout);

module.exports = router;

/*
router.get('/register', indexController.displayRegisterPage)
router.post('/register', indexController.processRegisterPage)
*/