var express = require('express');
const {setupLogging} = require("../logging.js");
var router = express.Router();
const {getStatus} = require('../Controllers/indexController');

setupLogging(router);

/* GET home page. */
router.get('/', getStatus);

module.exports = router;
