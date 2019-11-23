var db = require("../database")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.body);
});

router.post('/signUp', function (req, res) {
  console.log(req.body);
  uploadData("Users", "normalUser", req.body);
});

router.post('/login', async function (req, res) {
  console.log(req.body);
  res.json(await db.findOneListingByName("Users", "normalUser", "testName"));

});

module.exports = router;
