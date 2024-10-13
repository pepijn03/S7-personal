var express = require('express');
var router = express.Router();
const {getAllProgress} = require('../Controllers/progressController');

/* GET home page. */
router.get('/', getAllProgress);

module.exports = router;
