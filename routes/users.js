var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
