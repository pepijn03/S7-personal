var express = require('express');
var router = express.Router();
const {getUsers} = require('../controllers/usersController');

/* GET status of service. */
router.get('/', function(req, res, next) {
  res.send("Welcome to User Service");
});

/* GET all users. */
router.get('/All', getUsers);


module.exports = router;
