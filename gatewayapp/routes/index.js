var express = require('express');
var router = express.Router();
const {getStatus} = require('../Controllers/indexController');

/* GET home page. */
router.get('/', getStatus);

module.exports = router;
