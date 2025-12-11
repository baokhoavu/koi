var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', (req, res, _next) => {
	var user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: bcrypt.hashSync(req.body.password, 10),
		email: req.body.email,
	});
	user.save((err, result) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}
		res.status(201).json({
			message: 'User created',
			obj: result,
		});
	});
});

router.post('/signin', (req, res, _next) => {
	// Check if using mock authentication (when MongoDB is disabled)
	if (process.env.MOCK_USER_EMAIL && process.env.MOCK_USER_PASSWORD) {
		console.log('Using mock authentication for development...');

		// Validate against mock credentials from .env
		if (req.body.email === process.env.MOCK_USER_EMAIL && req.body.password === process.env.MOCK_USER_PASSWORD) {
			var mockUser = {
				_id: process.env.MOCK_USER_ID || 'mock-user-12345',
				email: process.env.MOCK_USER_EMAIL,
				firstName: process.env.MOCK_USER_FIRSTNAME || 'Koi',
				lastName: process.env.MOCK_USER_LASTNAME || 'Admin',
			};

			var token = jwt.sign({ user: mockUser }, 'secret', { expiresIn: 7200 });
			return res.status(200).json({
				message: 'Successfully logged in (mock mode)',
				token: token,
				userId: mockUser._id,
			});
		} else {
			return res.status(401).json({
				title: 'Login failed',
				error: { message: 'Invalid login credentials' },
			});
		}
	}

	// Original MongoDB authentication (when database is available)
	User.findOne({ email: req.body.email }, (err, user) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}
		if (!user) {
			return res.status(401).json({
				title: 'Login failed',
				error: { message: 'Invalid login credentials' },
			});
		}
		if (!bcrypt.compareSync(req.body.password, user.password)) {
			return res.status(401).json({
				title: 'Login failed',
				error: { message: 'Invalid login credentials' },
			});
		}
		var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
		res.status(200).json({
			message: 'Successfully logged in',
			token: token,
			userId: user._id,
		});
	});
});

module.exports = router;
