var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res) {
  
    // DB

    var responseJson = {success: true, message: 'Login Failed', user: null };
    res.json(responseJson);
});

module.exports = router;
