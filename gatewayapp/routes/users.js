var express = require('express');
var router = express.Router();
const {getUsers} = require('../Controllers/usersController');

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
