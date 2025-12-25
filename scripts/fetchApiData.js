// Script to fetch the latest API data from MongoDB Atlas
const mongoose = require('mongoose');
const ApiData = require('../models/apidata');
require('dotenv').config({ path: '../.env' });

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI not set in .env');
  process.exit(1);
}

async function fetchLatest() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  const latest = await ApiData.findOne().sort({ _id: -1 }).exec();
  if (latest) {
    console.log('Latest API Data:', latest);
  } else {
    console.log('No data found!');
  }
  await mongoose.disconnect();
}

fetchLatest().catch((err) => {
  console.error(err);
  process.exit(1);
});
