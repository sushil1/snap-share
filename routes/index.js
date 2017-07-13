var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/:page', function(req, res, next) {
  res.render(req.params.page, {});
});

module.exports = router;
