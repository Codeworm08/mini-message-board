const messages = [
  {
    text: "Hello!",
    user: "Sid",
    added: new Date()
  },
  {
    text: "Hello There",
    user: "Speed",
    added: new Date()
  },
  {
    text: "Hi!",
    user: "Leo",
    added: new Date()
  }
];
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

/* Form */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Enter'});
});

module.exports = router;
