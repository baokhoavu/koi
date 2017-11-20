var mongoose = require('mongoose');
const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var express = require('express');
var router = express.Router();
const ApiData = require('../models/apidata');

// mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

// var db = mongoose.connection;

router.get('/', function (req, res, next) {
    res.render('index');
}); 

module.exports = router;
