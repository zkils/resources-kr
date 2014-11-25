/**
 * Created by Administrator on 11/3/2014.
 */
var express = require('express');
var router = express.Router();
//var url = require("url");

router.get('/', function(req, res) {
    //var id = req.param.pageid;
    //var pathName = url.parse(req.url).pathname;
    //var id = pathName.split("=");

    console.log("originalUrl " + req.originalUrl);

    res.render('services.ejs', { title: 'Re:Sources Korea' });
});

module.exports = router;
