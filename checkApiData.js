const mongoose = require('mongoose');
require('dotenv').config();

const ApiData = require('./models/apidata');

async function checkApiData() {
	await mongoose.connect(process.env.MONGODB_URI);
	const latest = await ApiData.findOne().sort({ _id: -1 }).lean();
	if (latest) {
		console.log('Latest apidata document:');
		console.log(latest);
	} else {
		console.log('No apidata documents found.');
	}
	await mongoose.disconnect();
}

checkApiData();
