/**
 * API Routes for Koi Application
 *
 * This file handles data endpoints for the application.
 * Currently configured to use mock data for development purposes.
 *
 * ORIGINAL APPROACH (MongoDB with Real-time API Integration):
 * The original implementation queried MongoDB to compare yesterday's data with today's data,
 * calculated daily deltas, made real API calls to external services, and saved results back to MongoDB.
 * This approach was ideal for production with a live database and real-time data tracking.
 *
 * CURRENT APPROACH (Mock Data for Development):
 * Using static mock data to enable development and testing without requiring:
 * - MongoDB database connection
 * - External API credentials and access
 * - Complex data processing and calculations
 *
 * TO RESTORE ORIGINAL APPROACH:
 * 1. Uncomment the mongoose imports and connection code
 * 2. Uncomment the original route implementation below
 * 3. Comment out or remove the current mock data implementation
 * 4. Ensure MongoDB is running and MONGODB_URI is set in .env
 * 5. Verify external API credentials are configured
 * 6. Update Mongoose queries to use async/await instead of callbacks (Mongoose 8.x requirement)
 */

var express = require('express');
var moment = require('moment');
var router = express.Router();
var { mockApiData, localeMetadata, getCurrentDynamicData, getDailyIncrements } = require('./mockData');

// ============================================================================
// ORIGINAL DATABASE APPROACH (COMMENTED OUT)
// ============================================================================
// This section contains the original implementation that used MongoDB and
// external API calls to fetch, process, and store live data with daily calculations.
//
// var mongoose = require('mongoose');
// var axios = require('axios');
// var data = require('../models/apidata');
//
// // MongoDB Configuration
// mongoose.Promise = require('bluebird');
// const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/koi-test';
// mongoose.connect(mongodbUri)
// 	.then(() => console.log('MongoDB connected'))
// 	.catch(err => console.error('MongoDB error:', err));
//
// router.get('/data', async function (req, res) {
// 	console.log('Requesting data...');
// 	try {
// 		// Step 1: Fetch yesterday's data from MongoDB for comparison
// 		const yesterday = await data
// 			.find({ updated: moment().subtract(1, 'days').format('L') })
// 			.exec();
//
// 		if (!yesterday || yesterday.length < 1) {
// 			console.log('Error getting data... It does not exist');
// 		}
//
// 		if (yesterday && yesterday.length > 0) {
// 			console.log("Pulling yesterday's data! Date: " + yesterday[0].updated);
//
// 			// Step 2: Make external API calls to fetch current data
// 			// const conquercancerResponse = await axios.get(CONQUERCANCER_API_URL);
// 			// const onewalkResponse = await axios.get(ONEWALK_API_URL);
// 			// const conquercancerAUResponse = await axios.get(CONQUERCANCER_AU_API_URL);
// 			// const onedayAUResponse = await axios.get(ONEDAY_AU_API_URL);
// 			//
// 			// var locals = conquercancerResponse.data;
// 			// var locals2 = onewalkResponse.data;
// 			// var locals3 = conquercancerAUResponse.data;
// 			// var locals4 = onedayAUResponse.data;
//
// 			try {
// 				// Step 3: Find or create today's data entry
// 				const latestdata = await data
// 					.findOne({ updated: moment().format('L') })
// 					.exec();
//
// 				if (latestdata) {
// 					console.log('Getting latest data! Date: ' + latestdata);
//
// 					// Step 4: Extract values from both datasets for comparison
// 					// Example: Toronto 2020 data extraction
// 					// var removeDollarTo20v1 = latestdata.to20Donations;
// 					// var removeDollarTo20v2 = yesterday[0].to20Donations;
// 					// var removeRegTo20v1 = latestdata.to20RegFee;
// 					// var removeRegTo20v2 = yesterday[0].to20RegFee;
// 					// ... (repeat for all events and years)
//
// 					// Step 5: Convert currency strings to numbers for calculations
// 					// var numberTo20v1 = Number(removeDollarTo20v1.replace(/[^0-9\.-]+/g, ''));
// 					// var numberTo20v2 = Number(removeDollarTo20v2.replace(/[^0-9\.-]+/g, ''));
// 					// ... (repeat for all monetary values)
//
// 					// Step 6: Calculate daily deltas (today minus yesterday)
// 					// var to20DonationSub = numberTo20v1 - numberTo20v2;
// 					// var to20RfiSub = locals.getEventTotal.toronto.to20.rfi - yesterday[0].to20RFI;
// 					// var to20CrewSub = locals.getEventTotal.toronto.to20.crews - yesterday[0].to20Crews;
// 					// var to20RiderSub = locals.getEventTotal.toronto.to20.riders - yesterday[0].to20Riders;
// 					// ... (repeat for all metrics and events)
//
// 					// Step 7: Format calculated values back to currency strings
// 					// var newTo20DonDaily = '$' + to20DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
// 					// ... (repeat for all monetary calculations)
//
// 					// Step 8: Update latestdata object with all new values
// 					// latestdata.updated = moment().format('L');
// 					// latestdata.to20Donations = locals.getEventTotal.toronto.to20.totalDonation;
// 					// latestdata.to20RegFee = locals.getEventTotal.toronto.to20.regFee;
// 					// latestdata.to20DonDaily = newTo20DonDaily;
// 					// latestdata.to20RFIDaily = to20RfiSub;
// 					// ... (repeat for hundreds of fields across all events)
//
// 					// Step 9: Save updated data back to MongoDB
// 					// await latestdata.save();
// 					// console.log('Data saved to MongoDB!');
// 				}
// 			} catch (err) {
// 				console.log("There was an error getting Today's data:");
// 				console.log(err);
// 			}
// 		}
//
// 		// Step 10: Fetch and return the latest data to the client
// 		const latestData = await data
// 			.findOne()
// 			.sort({ _id: -1 })
// 			.exec();
//
// 		if (latestData) {
// 			res.json(latestData);
// 		} else {
// 			console.log('No data found!');
// 			res.json({});
// 		}
// 	} catch (err) {
// 		console.log('Error getting data:');
// 		console.log(err);
// 		res.status(500).json({ error: 'Error fetching data' });
// 	}
// });
//
// Key differences in original approach:
// - Required active MongoDB connection
// - Fetched historical data for comparison
// - Performed complex calculations for daily deltas
// - Made external API calls to live services
// - Stored processed results back to database
// - Handled data for 15+ events across multiple years
// - Calculated totals, participants, and various metrics
// ============================================================================

// ============================================================================
// CURRENT IMPLEMENTATION (Mock Data)
// ============================================================================
router.get('/data', (_req, res) => {
	console.log('Requesting data...');
	console.log('Using DYNAMIC mock data for development...');

	try {
		// Using DYNAMIC mock data instead of database queries
		// This data updates in real-time with random increments every 3-7 seconds
		const dynamicData = getCurrentDynamicData();
		const dailyIncrements = getDailyIncrements();

		var locals = dynamicData.conquercancer;
		var locals2 = dynamicData.onewalk;
		var locals3 = dynamicData.conquercancerAU;
		var locals4 = dynamicData.onedayAU;

		console.log('Dynamic mock data loaded successfully (live updates active)');

		// Create a mock data object with all the expected fields
		// All daily values come from the dynamic increment tracker (updates in real-time)
		const mockResponse = {
			updated: moment().format('L'),
			// Toronto data
			to20Donations: locals.getEventTotal.toronto.to20.donations,
			to20RegFee: locals.getEventTotal.toronto.to20.regfee,
			to20RFI: locals.getEventTotal.toronto.to20.rfi,
			to20Crews: locals.getEventTotal.toronto.to20.crews,
			to20Riders: locals.getEventTotal.toronto.to20.riders,
			to20VR: locals.getEventTotal.toronto.to20.virtual,
			to20TotalParticipants:
				locals.getEventTotal.toronto.to20.riders +
				locals.getEventTotal.toronto.to20.virtual +
				locals.getEventTotal.toronto.to20.crews,
			to20RFIDaily: dailyIncrements.to20RFIDaily,
			to20RidersDaily: dailyIncrements.to20RidersDaily,
			to20VRDaily: dailyIncrements.to20VRDaily,
			to20CrewDaily: dailyIncrements.to20CrewDaily,
			to20DonDaily: dailyIncrements.to20DonDaily,
			to20RegFeeDaily: dailyIncrements.to20RegFeeDaily,

			to19Donations: locals.getEventTotal.toronto.to19.donations,
			to19RegFee: locals.getEventTotal.toronto.to19.regfee,
			to19RFI: locals.getEventTotal.toronto.to19.rfi,
			to19Crews: locals.getEventTotal.toronto.to19.crews,
			to19Riders: locals.getEventTotal.toronto.to19.riders,
			to19VR: locals.getEventTotal.toronto.to19.virtual,
			to19TotalParticipants:
				locals.getEventTotal.toronto.to19.riders +
				locals.getEventTotal.toronto.to19.virtual +
				locals.getEventTotal.toronto.to19.crews,
			to19RFIDaily: dailyIncrements.to19RFIDaily,
			to19RidersDaily: dailyIncrements.to19RidersDaily,
			to19VRDaily: dailyIncrements.to19VRDaily,
			to19CrewDaily: dailyIncrements.to19CrewDaily,
			to19DonDaily: dailyIncrements.to19DonDaily,
			to19RegFeeDaily: dailyIncrements.to19RegFeeDaily,

			to18Donations: locals.getEventTotal.toronto.to18.donations,
			to18RegFee: locals.getEventTotal.toronto.to18.regfee,
			to18RFI: locals.getEventTotal.toronto.to18.rfi,
			to18Crews: locals.getEventTotal.toronto.to18.crews,
			to18Riders: locals.getEventTotal.toronto.to18.riders,
			to18VR: locals.getEventTotal.toronto.to18.virtual,
			to18TotalParticipants:
				locals.getEventTotal.toronto.to18.riders +
				locals.getEventTotal.toronto.to18.virtual +
				locals.getEventTotal.toronto.to18.crews,
			to18RFIDaily: dailyIncrements.to18RFIDaily,
			to18RidersDaily: dailyIncrements.to18RidersDaily,
			to18VRDaily: dailyIncrements.to18VRDaily,
			to18CrewDaily: dailyIncrements.to18CrewDaily,
			to18DonDaily: dailyIncrements.to18DonDaily,
			to18RegFeeDaily: dailyIncrements.to18RegFeeDaily,

			to17Donations: locals.getEventTotal.toronto.to17.donations,
			to17RegFee: locals.getEventTotal.toronto.to17.regfee,
			to17RFI: locals.getEventTotal.toronto.to17.rfi,
			to17Crews: locals.getEventTotal.toronto.to17.crews,
			to17Riders: locals.getEventTotal.toronto.to17.riders,
			to17VR: locals.getEventTotal.toronto.to17.virtual,
			to17TotalParticipants:
				locals.getEventTotal.toronto.to17.riders +
				locals.getEventTotal.toronto.to17.virtual +
				locals.getEventTotal.toronto.to17.crews,
			to17DonDaily: dailyIncrements.to17DonDaily,

			// Montreal data
			mo20Donations: locals.getEventTotal.montreal.mo20.donations,
			mo20RegFee: locals.getEventTotal.montreal.mo20.regfee,
			mo20RFI: locals.getEventTotal.montreal.mo20.rfi,
			mo20Crews: locals.getEventTotal.montreal.mo20.crews,
			mo20Riders: locals.getEventTotal.montreal.mo20.riders,
			mo20VR: locals.getEventTotal.montreal.mo20.virtual,
			mo20TotalParticipants:
				locals.getEventTotal.montreal.mo20.riders +
				locals.getEventTotal.montreal.mo20.virtual +
				locals.getEventTotal.montreal.mo20.crews,
			mo20RFIDaily: dailyIncrements.mo20RFIDaily,
			mo20RidersDaily: dailyIncrements.mo20RidersDaily,
			mo20VRDaily: dailyIncrements.mo20VRDaily,
			mo20CrewDaily: dailyIncrements.mo20CrewDaily,
			mo20DonDaily: dailyIncrements.mo20DonDaily,
			mo20RegFeeDaily: dailyIncrements.mo20RegFeeDaily,

			mo19Donations: locals.getEventTotal.montreal.mo19.donations,
			mo19RegFee: locals.getEventTotal.montreal.mo19.regfee,
			mo19RFI: locals.getEventTotal.montreal.mo19.rfi,
			mo19Crews: locals.getEventTotal.montreal.mo19.crews,
			mo19Riders: locals.getEventTotal.montreal.mo19.riders,
			mo19VR: locals.getEventTotal.montreal.mo19.virtual,
			mo19TotalParticipants:
				locals.getEventTotal.montreal.mo19.riders +
				locals.getEventTotal.montreal.mo19.virtual +
				locals.getEventTotal.montreal.mo19.crews,
			mo19RFIDaily: dailyIncrements.mo19RFIDaily,
			mo19RidersDaily: dailyIncrements.mo19RidersDaily,
			mo19VRDaily: dailyIncrements.mo19VRDaily,
			mo19CrewDaily: dailyIncrements.mo19CrewDaily,
			mo19DonDaily: dailyIncrements.mo19DonDaily,
			mo19RegFeeDaily: dailyIncrements.mo19RegFeeDaily,

			mo18Donations: locals.getEventTotal.montreal.mo18.donations,
			mo18RegFee: locals.getEventTotal.montreal.mo18.regfee,
			mo18RFI: locals.getEventTotal.montreal.mo18.rfi,
			mo18Crews: locals.getEventTotal.montreal.mo18.crews,
			mo18Riders: locals.getEventTotal.montreal.mo18.riders,
			mo18VR: locals.getEventTotal.montreal.mo18.virtual,
			mo18TotalParticipants:
				locals.getEventTotal.montreal.mo18.riders +
				locals.getEventTotal.montreal.mo18.virtual +
				locals.getEventTotal.montreal.mo18.crews,
			mo18RFIDaily: dailyIncrements.mo18RFIDaily,
			mo18RidersDaily: dailyIncrements.mo18RidersDaily,
			mo18VRDaily: dailyIncrements.mo18VRDaily,
			mo18CrewDaily: dailyIncrements.mo18CrewDaily,
			mo18DonDaily: dailyIncrements.mo18DonDaily,
			mo18RegFeeDaily: dailyIncrements.mo18RegFeeDaily,

			mo17Donations: locals.getEventTotal.montreal.mo17.donations,
			mo17RegFee: locals.getEventTotal.montreal.mo17.regfee,
			mo17RFI: locals.getEventTotal.montreal.mo17.rfi,
			mo17Crews: locals.getEventTotal.montreal.mo17.crews,
			mo17Riders: locals.getEventTotal.montreal.mo17.riders,
			mo17VR: locals.getEventTotal.montreal.mo17.virtual,
			mo17TotalParticipants:
				locals.getEventTotal.montreal.mo17.riders +
				locals.getEventTotal.montreal.mo17.virtual +
				locals.getEventTotal.montreal.mo17.crews,
			mo17DonDaily: dailyIncrements.mo17DonDaily,

			// Alberta data
			ab20Donations: locals.getEventTotal.alberta.ab20.donations,
			ab20RegFee: locals.getEventTotal.alberta.ab20.regfee,
			ab20RFI: locals.getEventTotal.alberta.ab20.rfi,
			ab20Crews: locals.getEventTotal.alberta.ab20.crews,
			ab20Riders: locals.getEventTotal.alberta.ab20.riders,
			ab20VR: locals.getEventTotal.alberta.ab20.virtual,
			ab20TotalParticipants:
				locals.getEventTotal.alberta.ab20.riders +
				locals.getEventTotal.alberta.ab20.virtual +
				locals.getEventTotal.alberta.ab20.crews,
			ab20RFIDaily: dailyIncrements.ab20RFIDaily,
			ab20RidersDaily: dailyIncrements.ab20RidersDaily,
			ab20VRDaily: dailyIncrements.ab20VRDaily,
			ab20CrewDaily: dailyIncrements.ab20CrewDaily,
			ab20DonDaily: dailyIncrements.ab20DonDaily,
			ab20RegFeeDaily: dailyIncrements.ab20RegFeeDaily,

			ab19Donations: locals.getEventTotal.alberta.ab19.donations,
			ab19RegFee: locals.getEventTotal.alberta.ab19.regfee,
			ab19RFI: locals.getEventTotal.alberta.ab19.rfi,
			ab19Crews: locals.getEventTotal.alberta.ab19.crews,
			ab19Riders: locals.getEventTotal.alberta.ab19.riders,
			ab19VR: locals.getEventTotal.alberta.ab19.virtual,
			ab19TotalParticipants:
				locals.getEventTotal.alberta.ab19.riders +
				locals.getEventTotal.alberta.ab19.virtual +
				locals.getEventTotal.alberta.ab19.crews,
			ab19RFIDaily: dailyIncrements.ab19RFIDaily,
			ab19RidersDaily: dailyIncrements.ab19RidersDaily,
			ab19VRDaily: dailyIncrements.ab19VRDaily,
			ab19CrewDaily: dailyIncrements.ab19CrewDaily,
			ab19DonDaily: dailyIncrements.ab19DonDaily,
			ab19RegFeeDaily: dailyIncrements.ab19RegFeeDaily,

			ab18Donations: locals.getEventTotal.alberta.ab18.donations,
			ab18RegFee: locals.getEventTotal.alberta.ab18.regfee,
			ab18RFI: locals.getEventTotal.alberta.ab18.rfi,
			ab18Crews: locals.getEventTotal.alberta.ab18.crews,
			ab18Riders: locals.getEventTotal.alberta.ab18.riders,
			ab18VR: locals.getEventTotal.alberta.ab18.virtual,
			ab18TotalParticipants:
				locals.getEventTotal.alberta.ab18.riders +
				locals.getEventTotal.alberta.ab18.virtual +
				locals.getEventTotal.alberta.ab18.crews,
			ab18RFIDaily: dailyIncrements.ab18RFIDaily,
			ab18RidersDaily: dailyIncrements.ab18RidersDaily,
			ab18VRDaily: dailyIncrements.ab18VRDaily,
			ab18CrewDaily: dailyIncrements.ab18CrewDaily,
			ab18DonDaily: dailyIncrements.ab18DonDaily,
			ab18RegFeeDaily: dailyIncrements.ab18RegFeeDaily,

			ab17Donations: locals.getEventTotal.alberta.ab17.donations,
			ab17RegFee: locals.getEventTotal.alberta.ab17.regfee,
			ab17RFI: locals.getEventTotal.alberta.ab17.rfi,
			ab17Crews: locals.getEventTotal.alberta.ab17.crews,
			ab17Riders: locals.getEventTotal.alberta.ab17.riders,
			ab17VR: locals.getEventTotal.alberta.ab17.virtual,
			ab17TotalParticipants:
				locals.getEventTotal.alberta.ab17.riders +
				locals.getEventTotal.alberta.ab17.virtual +
				locals.getEventTotal.alberta.ab17.crews,
			ab17DonDaily: dailyIncrements.ab17DonDaily,

			// Vancouver data
			va20Donations: locals.getEventTotal.vancouver.va20.donations,
			va20RegFee: locals.getEventTotal.vancouver.va20.regfee,
			va20RFI: locals.getEventTotal.vancouver.va20.rfi,
			va20Crews: locals.getEventTotal.vancouver.va20.crews,
			va20Riders: locals.getEventTotal.vancouver.va20.riders,
			va20VR: locals.getEventTotal.vancouver.va20.virtual,
			va20TotalParticipants:
				locals.getEventTotal.vancouver.va20.riders +
				locals.getEventTotal.vancouver.va20.virtual +
				locals.getEventTotal.vancouver.va20.crews,
			va20RFIDaily: dailyIncrements.va20RFIDaily,
			va20RidersDaily: dailyIncrements.va20RidersDaily,
			va20VRDaily: dailyIncrements.va20VRDaily,
			va20CrewDaily: dailyIncrements.va20CrewDaily,
			va20DonDaily: dailyIncrements.va20DonDaily,
			va20RegFeeDaily: dailyIncrements.va20RegFeeDaily,

			va19Donations: locals.getEventTotal.vancouver.va19.donations,
			va19RegFee: locals.getEventTotal.vancouver.va19.regfee,
			va19RFI: locals.getEventTotal.vancouver.va19.rfi,
			va19Crews: locals.getEventTotal.vancouver.va19.crews,
			va19Riders: locals.getEventTotal.vancouver.va19.riders,
			va19VR: locals.getEventTotal.vancouver.va19.virtual,
			va19TotalParticipants:
				locals.getEventTotal.vancouver.va19.riders +
				locals.getEventTotal.vancouver.va19.virtual +
				locals.getEventTotal.vancouver.va19.crews,
			va19RFIDaily: dailyIncrements.va19RFIDaily,
			va19RidersDaily: dailyIncrements.va19RidersDaily,
			va19VRDaily: dailyIncrements.va19VRDaily,
			va19CrewDaily: dailyIncrements.va19CrewDaily,
			va19DonDaily: dailyIncrements.va19DonDaily,
			va19RegFeeDaily: dailyIncrements.va19RegFeeDaily,

			va18Donations: locals.getEventTotal.vancouver.va18.donations,
			va18RegFee: locals.getEventTotal.vancouver.va18.regfee,
			va18RFI: locals.getEventTotal.vancouver.va18.rfi,
			va18Crews: locals.getEventTotal.vancouver.va18.crews,
			va18Riders: locals.getEventTotal.vancouver.va18.riders,
			va18VR: locals.getEventTotal.vancouver.va18.virtual,
			va18TotalParticipants:
				locals.getEventTotal.vancouver.va18.riders +
				locals.getEventTotal.vancouver.va18.virtual +
				locals.getEventTotal.vancouver.va18.crews,
			va18RFIDaily: dailyIncrements.va18RFIDaily,
			va18RidersDaily: dailyIncrements.va18RidersDaily,
			va18VRDaily: dailyIncrements.va18VRDaily,
			va18CrewDaily: dailyIncrements.va18CrewDaily,
			va18DonDaily: dailyIncrements.va18DonDaily,
			va18RegFeeDaily: dailyIncrements.va18RegFeeDaily,

			va17Donations: locals.getEventTotal.vancouver.va17.donations,
			va17RegFee: locals.getEventTotal.vancouver.va17.regfee,
			va17RFI: locals.getEventTotal.vancouver.va17.rfi,
			va17Crews: locals.getEventTotal.vancouver.va17.crews,
			va17Riders: locals.getEventTotal.vancouver.va17.riders,
			va17VR: locals.getEventTotal.vancouver.va17.virtual,
			va17TotalParticipants:
				locals.getEventTotal.vancouver.va17.riders +
				locals.getEventTotal.vancouver.va17.virtual +
				locals.getEventTotal.vancouver.va17.crews,
			va17DonDaily: dailyIncrements.va17DonDaily,

			// OneWalk Toronto data
			owto20Donations: locals2.getEventTotal.owto20.donations,
			owto20RegFee: locals2.getEventTotal.owto20.regfee,
			owto20RFI: locals2.getEventTotal.owto20.rfi,
			owto20Walkers: locals2.getEventTotal.owto20.walkers,
			owto20Crews: locals2.getEventTotal.owto20.crews,
			owto20VR: locals2.getEventTotal.owto20.virtual,
			owto20TotalParticipants:
				locals2.getEventTotal.owto20.walkers +
				locals2.getEventTotal.owto20.virtual +
				locals2.getEventTotal.owto20.crews,
			owto20RFIDaily: dailyIncrements.owto20RFIDaily,
			owto20WalkersDaily: dailyIncrements.owto20WalkersDaily,
			owto20VRDaily: dailyIncrements.owto20VRDaily,
			owto20CrewsDaily: dailyIncrements.owto20CrewDaily,
			owto20DonDaily: dailyIncrements.owto20DonDaily,
			owto20RegDaily: dailyIncrements.owto20RegFeeDaily,

			owto19Donations: locals2.getEventTotal.owto19.donations,
			owto19RegFee: locals2.getEventTotal.owto19.regfee,
			owto19RFI: locals2.getEventTotal.owto19.rfi,
			owto19Walkers: locals2.getEventTotal.owto19.walkers,
			owto19Crews: locals2.getEventTotal.owto19.crews,
			owto19VR: locals2.getEventTotal.owto19.virtual,
			owto19TotalParticipants:
				locals2.getEventTotal.owto19.walkers +
				locals2.getEventTotal.owto19.virtual +
				locals2.getEventTotal.owto19.crews,
			owto19RFIDaily: dailyIncrements.owto19RFIDaily,
			owto19WalkersDaily: dailyIncrements.owto19WalkersDaily,
			owto19VRDaily: dailyIncrements.owto19VRDaily,
			owto19CrewsDaily: dailyIncrements.owto19CrewDaily,
			owto19DonDaily: dailyIncrements.owto19DonDaily,
			owto19RegDaily: dailyIncrements.owto19RegFeeDaily,

			owto18Donations: locals2.getEventTotal.owto18.donations,
			owto18RegFee: locals2.getEventTotal.owto18.regfee,
			owto18RFI: locals2.getEventTotal.owto18.rfi,
			owto18Walkers: locals2.getEventTotal.owto18.walkers,
			owto18Crews: locals2.getEventTotal.owto18.crews,
			owto18VR: locals2.getEventTotal.owto18.virtual || 0,
			owto18TotalParticipants:
				locals2.getEventTotal.owto18.walkers +
				(locals2.getEventTotal.owto18.virtual || 0) +
				locals2.getEventTotal.owto18.crews,
			owto18RFIDaily: dailyIncrements.owto18RFIDaily,
			owto18WalkersDaily: dailyIncrements.owto18WalkersDaily,
			owto18VRDaily: dailyIncrements.owto18VRDaily,
			owto18CrewsDaily: dailyIncrements.owto18CrewDaily,
			owto18DonDaily: dailyIncrements.owto18DonDaily,
			owto18RegDaily: dailyIncrements.owto18RegFeeDaily,

			owto17Donations: locals2.getEventTotal.owto17.donations,
			owto17RegFee: locals2.getEventTotal.owto17.regfee,
			owto17RFI: locals2.getEventTotal.owto17.rfi,
			owto17Walkers: locals2.getEventTotal.owto17.walkers,
			owto17Crews: locals2.getEventTotal.owto17.crews,
			owto17VR: locals2.getEventTotal.owto17.virtual,
			owto17TotalParticipants:
				locals2.getEventTotal.owto17.walkers +
				locals2.getEventTotal.owto17.virtual +
				locals2.getEventTotal.owto17.crews,
			owto17DonDaily: dailyIncrements.owto17DonDaily,

			// Perth data
			pr18Donations: locals3.getEventTotal.perth.pr18.donations,
			pr18RegFee: locals3.getEventTotal.perth.pr18.regfee,
			pr18RFI: locals3.getEventTotal.perth.pr18.rfi,
			pr18Crews: locals3.getEventTotal.perth.pr18.crews,
			pr18Riders: locals3.getEventTotal.perth.pr18.riders,
			pr18VR: locals3.getEventTotal.perth.pr18.virtual,
			pr18TotalParticipants:
				locals3.getEventTotal.perth.pr18.riders +
				locals3.getEventTotal.perth.pr18.virtual +
				locals3.getEventTotal.perth.pr18.crews,
			pr18RFIDaily: dailyIncrements.pr18RFIDaily,
			pr18RidersDaily: dailyIncrements.pr18RidersDaily,
			pr18VRDaily: dailyIncrements.pr18VRDaily,
			pr18CrewDaily: dailyIncrements.pr18CrewDaily,
			pr18DonDaily: dailyIncrements.pr18DonDaily,
			pr18RegFeeDaily: dailyIncrements.pr18RegFeeDaily,

			pr17Donations: locals3.getEventTotal.perth.pr17.donations,
			pr17RegFee: locals3.getEventTotal.perth.pr17.regfee,
			pr17RFI: locals3.getEventTotal.perth.pr17.rfi,
			pr17Crews: locals3.getEventTotal.perth.pr17.crews,
			pr17Riders: locals3.getEventTotal.perth.pr17.riders,
			pr17VR: locals3.getEventTotal.perth.pr17.virtual,
			pr17TotalParticipants:
				locals3.getEventTotal.perth.pr17.riders +
				locals3.getEventTotal.perth.pr17.virtual +
				locals3.getEventTotal.perth.pr17.crews,
			pr17DonDaily: dailyIncrements.pr17DonDaily,

			// Melbourne data
			ml18Donations: locals4.getEventTotal.melbourne.ml18.donations,
			ml18RegFee: locals4.getEventTotal.melbourne.ml18.regfee,
			ml18Walkers: locals4.getEventTotal.melbourne.ml18.walkers,
			ml18Riders: locals4.getEventTotal.melbourne.ml18.riders,
			ml18RFI: locals4.getEventTotal.melbourne.ml18.rfi,
			ml18Crews: locals4.getEventTotal.melbourne.ml18.crews,
			ml18VR: locals4.getEventTotal.melbourne.ml18.virtual,
			ml18TotalParticipants:
				locals4.getEventTotal.melbourne.ml18.walkers +
				locals4.getEventTotal.melbourne.ml18.riders +
				locals4.getEventTotal.melbourne.ml18.virtual +
				locals4.getEventTotal.melbourne.ml18.crews,
			ml18WalkersDaily: dailyIncrements.ml18WalkersDaily,
			ml18RidersDaily: dailyIncrements.ml18RidersDaily,
			ml18VRDaily: dailyIncrements.ml18VRDaily,
			ml18DonDaily: dailyIncrements.ml18DonDaily,
			ml18RegDaily: dailyIncrements.ml18RegFeeDaily,

			ml17Donations: locals4.getEventTotal.melbourne.ml17.donations,
			ml17RegFee: locals4.getEventTotal.melbourne.ml17.regfee,
			ml17RFI: locals4.getEventTotal.melbourne.ml17.rfi,
			ml17Walkers: locals4.getEventTotal.melbourne.ml17.walkers,
			ml17Riders: locals4.getEventTotal.melbourne.ml17.riders,
			ml17Crews: locals4.getEventTotal.melbourne.ml17.crews,
			ml17VR: locals4.getEventTotal.melbourne.ml17.virtual,
			ml17TotalParticipants:
				locals4.getEventTotal.melbourne.ml17.walkers +
				locals4.getEventTotal.melbourne.ml17.riders +
				locals4.getEventTotal.melbourne.ml17.virtual +
				locals4.getEventTotal.melbourne.ml17.crews,
			ml17DonDaily: dailyIncrements.ml17DonDaily,

			// Brisbane data
			br18Donations: locals4.getEventTotal.brisbane.br18.donations,
			br18RegFee: locals4.getEventTotal.brisbane.br18.regfee,
			br18Walkers: locals4.getEventTotal.brisbane.br18.walkers,
			br18Riders: locals4.getEventTotal.brisbane.br18.riders,
			br18RFI: locals4.getEventTotal.brisbane.br18.rfi,
			br18Crews: locals4.getEventTotal.brisbane.br18.crews,
			br18VR: locals4.getEventTotal.brisbane.br18.virtual,
			br18TotalParticipants:
				locals4.getEventTotal.brisbane.br18.walkers +
				locals4.getEventTotal.brisbane.br18.riders +
				locals4.getEventTotal.brisbane.br18.virtual +
				locals4.getEventTotal.brisbane.br18.crews,
			br18WalkersDaily: dailyIncrements.br18WalkersDaily,
			br18RidersDaily: dailyIncrements.br18RidersDaily,
			br18VRDaily: dailyIncrements.br18VRDaily,
			br18DonDaily: dailyIncrements.br18DonDaily,
			br18RegDaily: dailyIncrements.br18RegFeeDaily,

			br17Donations: locals4.getEventTotal.brisbane.br17.donations,
			br17RegFee: locals4.getEventTotal.brisbane.br17.regfee,
			br17RFI: locals4.getEventTotal.brisbane.br17.rfi,
			br17Walkers: locals4.getEventTotal.brisbane.br17.walkers,
			br17Riders: locals4.getEventTotal.brisbane.br17.riders,
			br17Crews: locals4.getEventTotal.brisbane.br17.crews,
			br17VR: locals4.getEventTotal.brisbane.br17.virtual,
			br17TotalParticipants:
				locals4.getEventTotal.brisbane.br17.walkers +
				locals4.getEventTotal.brisbane.br17.riders +
				locals4.getEventTotal.brisbane.br17.virtual +
				locals4.getEventTotal.brisbane.br17.crews,
			br17DonDaily: dailyIncrements.br17DonDaily,
		};

		console.log('Returning mock data to client');
		res.json(mockResponse);
	} catch (err) {
		console.log('Error getting data:');
		console.log(err);
		res.status(500).json({ error: 'Error fetching data' });
	}
});

// Get locale metadata for filtering and table options
router.get('/locales', (_req, res) => {
	console.log('Requesting locale metadata...');
	try {
		res.json(localeMetadata);
	} catch (err) {
		console.log('Error getting locale metadata:');
		console.log(err);
		res.status(500).json({ error: 'Error fetching locale metadata' });
	}
});

// Get filtered data by locale
router.get('/data/:locale', (req, res) => {
	const locale = req.params.locale.toLowerCase();
	console.log('Requesting data for locale:', locale);

	try {
		if (locale === 'all') {
			// Return all data (same as /api/data)
			return res.redirect('/api/data');
		}

		if (!localeMetadata[locale]) {
			return res.status(404).json({
				error: 'Locale not found',
				available: Object.keys(localeMetadata),
			});
		}

		// For specific locale, return only that locale's data
		// This would filter the response to include only the requested locale
		var locals = mockApiData.conquercancer;
		var _locals2 = mockApiData.onewalk;
		var _locals3 = mockApiData.conquercancerAU;
		var _locals4 = mockApiData.onedayAU;

		const filteredResponse = {
			updated: moment().format('L'),
			locale: locale,
			localeName: localeMetadata[locale].name,
		};

		// Add only the requested locale's data
		const events = localeMetadata[locale].events || [];
		events.forEach((event) => {
			// Map event codes to data sources
			// This is a simplified example - in production, would need comprehensive mapping
			if (event.startsWith('to')) {
				// Toronto data
				const _year = event.substring(2);
				if (locals.getEventTotal.toronto[event]) {
					filteredResponse[`${event}Donations`] = locals.getEventTotal.toronto[event].donations;
					filteredResponse[`${event}RegFee`] = locals.getEventTotal.toronto[event].regfee || '$0.00';
					// Add other fields as needed
				}
			}
			// Add similar mappings for other locales
		});

		console.log('Returning filtered data for locale:', locale);
		res.json(filteredResponse);
	} catch (err) {
		console.log('Error getting filtered data:');
		console.log(err);
		res.status(500).json({ error: 'Error fetching filtered data' });
	}
});

module.exports = router;
