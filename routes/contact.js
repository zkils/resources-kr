/**
 * Created by Administrator on 11/3/2014.
 */
var express = require('express');
var router = express.Router();

/* get contact page. */
router.get('/', function(req, res) {
    res.render('contact.ejs', { title: 'Re:Sources Korea' });
});

module.exports = router;
