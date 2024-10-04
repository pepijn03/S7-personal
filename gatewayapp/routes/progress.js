var express = require('express');
var router = express.Router();
const {getAllProgress} = require('../controllers/progressController');

/* GET home page. */
router.get('/', getAllProgress);

module.exports = router;
