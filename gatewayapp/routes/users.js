var express = require('express');
var router = express.Router();
const {getUsers} = require('../controllers/usersController');

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
