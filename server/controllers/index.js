var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
}

/* GET about page. */
module.exports.displayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About' });
}

/* GET projects page. */
module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects', { title: 'Projects' });
}

/* GET services page. */
module.exports.displayServicesPage = (req, res, next) => {
  res.render('services', { title: 'Services' });
}

/* GET contact page. */
module.exports.displayContactPage = (req, res, next) => {
  res.render('contact', { title: 'Contact' });
}

/* GET login page. */
module.exports.displayLoginPage = (req, res, next) => {
  res.render('login', { title: 'Login' });
}