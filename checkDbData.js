// Script to check current MongoDB data
const mongoose = require('mongoose');
const ApiData = require('./models/apidata');
require('dotenv').config();

async function checkData() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, { dbName: 'koi' });
		console.log('Connected to MongoDB');
		console.log('Database name:', mongoose.connection.db.databaseName);
		console.log('Connection ready state:', mongoose.connection.readyState);

		const db = mongoose.connection.db;
		const collections = await db.listCollections().toArray();
		console.log(
			'All collections:',
			collections.map((c) => c.name)
		);

		// Check apidatas collection specifically
		const apidatasCollection = db.collection('apidatas');
		const count = await apidatasCollection.countDocuments();
		console.log('apidatas collection count:', count);

		const docs = await apidatasCollection.find({}).toArray();
		console.log('apidatas documents found:', docs.length);

		if (docs.length > 0) {
			docs.forEach((doc, index) => {
				console.log(`\nDocument ${index + 1} (_id: ${doc._id}):`);
				console.log('Fields:', Object.keys(doc).length);
				console.log('Sample fields:', Object.keys(doc).slice(0, 10));
			});
		}

		await mongoose.disconnect();
	} catch (err) {
		console.error('Error:', err);
	}
}

checkData();
