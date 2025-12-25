const moment = require('moment');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ApiData = require('../models/apidata');
require('dotenv').config();

// MongoDB
router.get('/data', async (_req, res) => {
	console.log('Requesting data...');
	console.log('Using DYNAMIC mock data for development...');

	try {
		await mongoose.connect(process.env.MONGODB_URI, { dbName: 'koi' });
		console.log('Connected to database:', mongoose.connection.db ? mongoose.connection.db.databaseName : 'unknown');

		// Find all documents and return the most recent one with the most fields
		const allDocs = await ApiData.find().lean().sort({ _id: -1 }); // Sort by _id descending (most recent first)
		console.log('Found', allDocs.length, 'documents');

		if (allDocs.length === 0) {
			return res.status(404).json({ error: 'No data found' });
		}

		const docWithMostFields = allDocs.reduce((max, doc) => {
			const maxFields = Object.keys(max).length;
			const docFields = Object.keys(doc).length;
			if (docFields > maxFields) {
				return doc;
			} else if (docFields === maxFields) {
				// If same number of fields, prefer the more recent one (higher _id)
				return doc._id > max._id ? doc : max;
			}
			return max;
		});
		console.log('Returning MongoDB data to client - document has', Object.keys(docWithMostFields).length, 'fields');
		res.json(docWithMostFields);
	} catch (err) {
		console.log('Error getting data:');
		console.log(err);
		res.status(500).json({ error: 'Error fetching data' });
	}
});

module.exports = router;
