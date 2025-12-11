var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Message = require('../models/message');

router.get('/', async (_req, res, _next) => {
	try {
		const messages = await Message.find().populate('user', 'firstName').exec();

		res.status(200).json({
			message: 'Success',
			obj: messages,
		});
	} catch (err) {
		return res.status(500).json({
			title: 'An error occurred',
			error: err,
		});
	}
});

router.use('/', (req, res, next) => {
	jwt.verify(req.query.token, 'secret', (err, _decoded) => {
		if (err) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: err,
			});
		}
		next();
	});
});

router.post('/', (req, res, _next) => {
	var decoded = jwt.decode(req.query.token);
	User.findById(decoded.user._id, (err, user) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}
		var message = new Message({
			content: req.body.content,
			user: user,
		});
		message.save((err, result) => {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred',
					error: err,
				});
			}
			user.messages.push(result);
			user.save();
			res.status(201).json({
				message: 'Saved message',
				obj: result,
			});
		});
	});
});

router.patch('/:id', (req, res, _next) => {
	var decoded = jwt.decode(req.query.token);
	Message.findById(req.params.id, (err, message) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}
		if (!message) {
			return res.status(500).json({
				title: 'No Message Found!',
				error: { message: 'Message not found' },
			});
		}
		if (message.user !== decoded.user._id) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: { message: 'Users do not match' },
			});
		}
		message.content = req.body.content;
		message.save((err, result) => {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred',
					error: err,
				});
			}
			res.status(200).json({
				message: 'Updated message',
				obj: result,
			});
		});
	});
});

router.delete('/:id', (req, res, _next) => {
	var decoded = jwt.decode(req.query.token);
	Message.findById(req.params.id, (err, message) => {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred',
				error: err,
			});
		}
		if (!message) {
			return res.status(500).json({
				title: 'No Message Found!',
				error: { message: 'Message not found' },
			});
		}
		if (message.user !== decoded.user._id) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: { message: 'Users do not match' },
			});
		}
		message.remove((err, result) => {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred',
					error: err,
				});
			}
			res.status(200).json({
				message: 'Deleted message',
				obj: result,
			});
		});
	});
});

module.exports = router;
