var express = require('express');
const {setupLogging} = require("../logging.js");
var router = express.Router();

setupLogging(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Gateway API running!!!');
});

module.exports = router;
