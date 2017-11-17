const mongoose = require('mongoose');
const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
const express = require('express');
const router = express.Router();
const data = require('../models/apidata');

mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

var db = mongoose.connection;

router.get('/data', function(req, res) {
	console.log('Requesting data...');
	data.findOne()
		.sort({"_id": -1})
		.exec(function(err, data) {
			if (err) {
				console.log('Error getting data..');
			} else {
				res.json(data);
				// console.log(data);
			}
		});
});

module.exports = router;