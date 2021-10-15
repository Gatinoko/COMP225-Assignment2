var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

/* GET users listing. */
router.get('/ass', function(req, res, next) {
  res.send('ASSHOLE');
});

module.exports = router;
