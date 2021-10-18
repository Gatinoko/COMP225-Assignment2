var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET/POST login page. */
router.get('/login', indexController.displayLoginPage);
router.post('/login', indexController.processLoginPage);

/* GET logout */
router.get('/logout', indexController.performLogout);

//router.get('/register', indexController.displayRegisterPage)
//router.post('/register', indexController.processRegisterPage)

module.exports = router;
