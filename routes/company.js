/**
 * Created by Administrator on 11/3/2014.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    //res.send('respond with a resource');
    res.render('company.ejs', { title: 'Re:Sources Korea' });
});

module.exports = router;
