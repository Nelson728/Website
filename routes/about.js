var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let activeDir = "homeDir"
  res.render('profolio/home', {activeDir: activeDir});
  
});
router.get('/:request', function(req,res, next) {
  let request = req.params.request;
  let activeDir = request+"Dir"
  console.log(request)
  res.render('profolio/' + request, {activeDir: activeDir})
});

module.exports = router;