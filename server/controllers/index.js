var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let userModel = require('../models/user');
let user = userModel.userModel; // alias

/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home', username: req.user ? req.user.username : '' });
}

/* GET about page. */
module.exports.displayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About', username: req.user ? req.user.username : '' });
}

/* GET projects page. */
module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects', { title: 'Projects', username: req.user ? req.user.username : '' });
}

/* GET services page. */
module.exports.displayServicesPage = (req, res, next) => {
  res.render('services', { title: 'Services', username: req.user ? req.user.username : '' });
}

/* GET contact page. */
module.exports.displayContactPage = (req, res, next) => {
  res.render('contact', { title: 'Contact', username: req.user ? req.user.username : '' });
}

/* GET/POST login page. */
module.exports.displayLoginPage = (req, res, next) => {
  //Checks if the user is not already logged in.
  if(!req.user)
  {
    res.render('login', {title: 'Login',
                         messages: req.flash('loginMessage'),
                         username: req.user ? req.user.username : ''
                        });
  }
  else
  {
    return res.redirect('users/business-contacts');
  }
}
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', 
  (err, user, info) => {
    //Server error?
    if(err)
    {
      return next(err);
    }
    //User login error?
    if(!user)
    {
      req.flash('loginMessage', 'Authentication error');
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      //Server error?
      if(err)
      {
        return next(err);
      }
      res.redirect('users/business-contacts');
    });
  })(req, res, next);
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect('/');
}

/*
module.exports.displayRegisterPage = (req, res, next) => {
  //Checks if the user is not already logged in.
  if(!req.user)
  {
    res.render('login copy', {title: 'shitregister',
                         messages: req.flash('loginMessage'),
                         username: req.user ? req.user.username : ''
                        });
  }
  else
  {
    return res.redirect('/home');
  }
}

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new user({
      username: req.body.username,
      //password: req.body.password
      //email: '',
  });

  user.register(newUser, req.body.password, (err) => {
      if(err)
      {
          console.log("Error: Inserting New User");
          if(err.name == "UserExistsError")
          {
              req.flash(
                  'registerMessage',
                  'Registration Error: User Already Exists!'
              );
              console.log('Error: User Already Exists!')
          }
          return res.render('login copy',
          {
              title: 'Register',
              messages: req.flash('registerMessage'),
              displayName: req.user ? req.user.username : ''
          });
      }
      else
      {
          // if no error exists, then registration is successful

          // redirect the user and authenticate them

          // TODO - Getting Ready to convert to API
          //res.json({success: true, msg: 'User Registered Successfully!'});
          

          return passport.authenticate('local')(req, res, () => {
              res.redirect('/home')
          });
      }
  });
}
*/