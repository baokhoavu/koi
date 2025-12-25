// Script to migrate mock data to MongoDB Atlas
const mongoose = require('mongoose');
const mockData = require('../routes/mockData');
const ApiData = require('../models/apidata');
require('dotenv').config();


let MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI not set in .env');
  process.exit(1);
}
// Ensure database name is present in URI (e.g., /koi)
// Always enforce /koi as the database in the URI
const uriParts = MONGODB_URI.split('mongodb.net');
let dbAndParams = uriParts[1] || '';
if (!dbAndParams.startsWith('/koi')) {
  // Remove any leading slash or question mark
  dbAndParams = dbAndParams.replace(/^\/?/, '');
  // Remove any leading ?
  dbAndParams = dbAndParams.replace(/^\?/, '');
  // Remove any existing db name
  dbAndParams = dbAndParams.replace(/^[^?]*\??/, '');
  MONGODB_URI = uriParts[0] + 'mongodb.net/koi' + (dbAndParams ? '?' + dbAndParams : '');
  console.warn('Database in URI set to /koi');
}
console.log('Final MongoDB URI:', MONGODB_URI);
console.log('Connecting to MongoDB URI:', MONGODB_URI);

async function migrate() {

  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;
  console.log('Connected to MongoDB');
  console.log('Database:', db.databaseName);
  const collections = await db.listCollections().toArray();
  console.log('Collections before insert:', collections.map(c => c.name));

  // Simulate some data updates to generate non-zero daily increments
  console.log('Setting non-zero daily increments for demo...');
  const increments = mockData.getDailyIncrements();
  
  // Manually set some demo values for OneWalk Toronto daily increments
  increments.owto20WalkersDaily = 25;
  increments.owto20WalkersNightDaily = 8;
  increments.owto20Walkers2dayDaily = 12;
  increments.owto20Walkers25kmDaily = 3;
  increments.owto20Walkers40kmDaily = 2;
  
  console.log('Set owto20WalkersNightDaily to:', increments.owto20WalkersNightDaily);
  console.log('Available increment keys:', Object.keys(increments).filter(k => k.startsWith('owto20')));

  // Prepare the data in the same format as the ApiData schema
  const dynamicData = mockData.getCurrentDynamicData();
  const dailyIncrements = increments;
  const moment = require('moment');

  // Build the document (similar to /api/data response)
  const doc = {
    updated: moment().format('L'),
    // Toronto data
    to20Donations: dynamicData.conquercancer.getEventTotal.toronto.to20.donations,
    to20RegFee: dynamicData.conquercancer.getEventTotal.toronto.to20.regfee,
    to20RFI: dynamicData.conquercancer.getEventTotal.toronto.to20.rfi,
    to20Crews: dynamicData.conquercancer.getEventTotal.toronto.to20.crews,
    to20Riders: dynamicData.conquercancer.getEventTotal.toronto.to20.riders,
    to20VR: dynamicData.conquercancer.getEventTotal.toronto.to20.virtual,
    to20TotalParticipants:
      dynamicData.conquercancer.getEventTotal.toronto.to20.riders +
      dynamicData.conquercancer.getEventTotal.toronto.to20.virtual +
      dynamicData.conquercancer.getEventTotal.toronto.to20.crews,
    to20RFIDaily: dailyIncrements.to20RFIDaily,
    to20RidersDaily: dailyIncrements.to20RidersDaily,
    to20VRDaily: dailyIncrements.to20VRDaily,
    to20CrewDaily: dailyIncrements.to20CrewDaily,
    to20DonDaily: dailyIncrements.to20DonDaily,
    to20RegFeeDaily: dailyIncrements.to20RegFeeDaily,

    to19Donations: dynamicData.conquercancer.getEventTotal.toronto.to19.donations,
    to19RegFee: dynamicData.conquercancer.getEventTotal.toronto.to19.regfee,
    to19RFI: dynamicData.conquercancer.getEventTotal.toronto.to19.rfi,
    to19Crews: dynamicData.conquercancer.getEventTotal.toronto.to19.crews,
    to19Riders: dynamicData.conquercancer.getEventTotal.toronto.to19.riders,
    to19VR: dynamicData.conquercancer.getEventTotal.toronto.to19.virtual,
    to19TotalParticipants:
      dynamicData.conquercancer.getEventTotal.toronto.to19.riders +
      dynamicData.conquercancer.getEventTotal.toronto.to19.virtual +
      dynamicData.conquercancer.getEventTotal.toronto.to19.crews,
    to19RFIDaily: dailyIncrements.to19RFIDaily,
    to19RidersDaily: dailyIncrements.to19RidersDaily,
    to19VRDaily: dailyIncrements.to19VRDaily,
    to19CrewDaily: dailyIncrements.to19CrewDaily,
    to19DonDaily: dailyIncrements.to19DonDaily,
    to19RegFeeDaily: dailyIncrements.to19RegFeeDaily,

    to18Donations: dynamicData.conquercancer.getEventTotal.toronto.to18.donations,
    to18RegFee: dynamicData.conquercancer.getEventTotal.toronto.to18.regfee,
    to18RFI: dynamicData.conquercancer.getEventTotal.toronto.to18.rfi,
    to18Crews: dynamicData.conquercancer.getEventTotal.toronto.to18.crews,
    to18Riders: dynamicData.conquercancer.getEventTotal.toronto.to18.riders,
    to18VR: dynamicData.conquercancer.getEventTotal.toronto.to18.virtual,
    to18TotalParticipants:
      dynamicData.conquercancer.getEventTotal.toronto.to18.riders +
      dynamicData.conquercancer.getEventTotal.toronto.to18.virtual +
      dynamicData.conquercancer.getEventTotal.toronto.to18.crews,
    to18RFIDaily: dailyIncrements.to18RFIDaily,
    to18RidersDaily: dailyIncrements.to18RidersDaily,
    to18VRDaily: dailyIncrements.to18VRDaily,
    to18CrewDaily: dailyIncrements.to18CrewDaily,
    to18DonDaily: dailyIncrements.to18DonDaily,
    to18RegFeeDaily: dailyIncrements.to18RegFeeDaily,

    to17Donations: dynamicData.conquercancer.getEventTotal.toronto.to17.donations,
    to17RegFee: dynamicData.conquercancer.getEventTotal.toronto.to17.regfee,
    to17RFI: dynamicData.conquercancer.getEventTotal.toronto.to17.rfi,
    to17Crews: dynamicData.conquercancer.getEventTotal.toronto.to17.crews,
    to17Riders: dynamicData.conquercancer.getEventTotal.toronto.to17.riders,
    to17VR: dynamicData.conquercancer.getEventTotal.toronto.to17.virtual,
    to17TotalParticipants:
      dynamicData.conquercancer.getEventTotal.toronto.to17.riders +
      dynamicData.conquercancer.getEventTotal.toronto.to17.virtual +
      dynamicData.conquercancer.getEventTotal.toronto.to17.crews,
    to17DonDaily: dailyIncrements.to17DonDaily,

    // Montreal data
    mo20Donations: dynamicData.conquercancer.getEventTotal.montreal.mo20.donations,
    mo20RegFee: dynamicData.conquercancer.getEventTotal.montreal.mo20.regfee,
    mo20RFI: dynamicData.conquercancer.getEventTotal.montreal.mo20.rfi,
    mo20Crews: dynamicData.conquercancer.getEventTotal.montreal.mo20.crews,
    mo20Riders: dynamicData.conquercancer.getEventTotal.montreal.mo20.riders,
    mo20VR: dynamicData.conquercancer.getEventTotal.montreal.mo20.virtual,
    mo20TotalParticipants:
      dynamicData.conquercancer.getEventTotal.montreal.mo20.riders +
      dynamicData.conquercancer.getEventTotal.montreal.mo20.virtual +
      dynamicData.conquercancer.getEventTotal.montreal.mo20.crews,
    mo20RFIDaily: dailyIncrements.mo20RFIDaily,
    mo20RidersDaily: dailyIncrements.mo20RidersDaily,
    mo20VRDaily: dailyIncrements.mo20VRDaily,
    mo20CrewDaily: dailyIncrements.mo20CrewDaily,
    mo20DonDaily: dailyIncrements.mo20DonDaily,
    mo20RegFeeDaily: dailyIncrements.mo20RegFeeDaily,

    mo19Donations: dynamicData.conquercancer.getEventTotal.montreal.mo19.donations,
    mo19RegFee: dynamicData.conquercancer.getEventTotal.montreal.mo19.regfee,
    mo19RFI: dynamicData.conquercancer.getEventTotal.montreal.mo19.rfi,
    mo19Crews: dynamicData.conquercancer.getEventTotal.montreal.mo19.crews,
    mo19Riders: dynamicData.conquercancer.getEventTotal.montreal.mo19.riders,
    mo19VR: dynamicData.conquercancer.getEventTotal.montreal.mo19.virtual,
    mo19TotalParticipants:
      dynamicData.conquercancer.getEventTotal.montreal.mo19.riders +
      dynamicData.conquercancer.getEventTotal.montreal.mo19.virtual +
      dynamicData.conquercancer.getEventTotal.montreal.mo19.crews,
    mo19RFIDaily: dailyIncrements.mo19RFIDaily,
    mo19RidersDaily: dailyIncrements.mo19RidersDaily,
    mo19VRDaily: dailyIncrements.mo19VRDaily,
    mo19CrewDaily: dailyIncrements.mo19CrewDaily,
    mo19DonDaily: dailyIncrements.mo19DonDaily,
    mo19RegFeeDaily: dailyIncrements.mo19RegFeeDaily,

    mo18Donations: dynamicData.conquercancer.getEventTotal.montreal.mo18.donations,
    mo18RegFee: dynamicData.conquercancer.getEventTotal.montreal.mo18.regfee,
    mo18RFI: dynamicData.conquercancer.getEventTotal.montreal.mo18.rfi,
    mo18Crews: dynamicData.conquercancer.getEventTotal.montreal.mo18.crews,
    mo18Riders: dynamicData.conquercancer.getEventTotal.montreal.mo18.riders,
    mo18VR: dynamicData.conquercancer.getEventTotal.montreal.mo18.virtual,
    mo18TotalParticipants:
      dynamicData.conquercancer.getEventTotal.montreal.mo18.riders +
      dynamicData.conquercancer.getEventTotal.montreal.mo18.virtual +
      dynamicData.conquercancer.getEventTotal.montreal.mo18.crews,
    mo18RFIDaily: dailyIncrements.mo18RFIDaily,
    mo18RidersDaily: dailyIncrements.mo18RidersDaily,
    mo18VRDaily: dailyIncrements.mo18VRDaily,
    mo18CrewDaily: dailyIncrements.mo18CrewDaily,
    mo18DonDaily: dailyIncrements.mo18DonDaily,
    mo18RegFeeDaily: dailyIncrements.mo18RegFeeDaily,

    mo17Donations: dynamicData.conquercancer.getEventTotal.montreal.mo17.donations,
    mo17RegFee: dynamicData.conquercancer.getEventTotal.montreal.mo17.regfee,
    mo17RFI: dynamicData.conquercancer.getEventTotal.montreal.mo17.rfi,
    mo17Crews: dynamicData.conquercancer.getEventTotal.montreal.mo17.crews,
    mo17Riders: dynamicData.conquercancer.getEventTotal.montreal.mo17.riders,
    mo17VR: dynamicData.conquercancer.getEventTotal.montreal.mo17.virtual,
    mo17TotalParticipants:
      dynamicData.conquercancer.getEventTotal.montreal.mo17.riders +
      dynamicData.conquercancer.getEventTotal.montreal.mo17.virtual +
      dynamicData.conquercancer.getEventTotal.montreal.mo17.crews,
    mo17DonDaily: dailyIncrements.mo17DonDaily,

    // Alberta data
    ab20Donations: dynamicData.conquercancer.getEventTotal.alberta.ab20.donations,
    ab20RegFee: dynamicData.conquercancer.getEventTotal.alberta.ab20.regfee,
    ab20RFI: dynamicData.conquercancer.getEventTotal.alberta.ab20.rfi,
    ab20Crews: dynamicData.conquercancer.getEventTotal.alberta.ab20.crews,
    ab20Riders: dynamicData.conquercancer.getEventTotal.alberta.ab20.riders,
    ab20VR: dynamicData.conquercancer.getEventTotal.alberta.ab20.virtual,
    ab20TotalParticipants:
      dynamicData.conquercancer.getEventTotal.alberta.ab20.riders +
      dynamicData.conquercancer.getEventTotal.alberta.ab20.virtual +
      dynamicData.conquercancer.getEventTotal.alberta.ab20.crews,
    ab20RFIDaily: dailyIncrements.ab20RFIDaily,
    ab20RidersDaily: dailyIncrements.ab20RidersDaily,
    ab20VRDaily: dailyIncrements.ab20VRDaily,
    ab20CrewDaily: dailyIncrements.ab20CrewDaily,
    ab20DonDaily: dailyIncrements.ab20DonDaily,
    ab20RegFeeDaily: dailyIncrements.ab20RegFeeDaily,

    ab19Donations: dynamicData.conquercancer.getEventTotal.alberta.ab19.donations,
    ab19RegFee: dynamicData.conquercancer.getEventTotal.alberta.ab19.regfee,
    ab19RFI: dynamicData.conquercancer.getEventTotal.alberta.ab19.rfi,
    ab19Crews: dynamicData.conquercancer.getEventTotal.alberta.ab19.crews,
    ab19Riders: dynamicData.conquercancer.getEventTotal.alberta.ab19.riders,
    ab19VR: dynamicData.conquercancer.getEventTotal.alberta.ab19.virtual,
    ab19TotalParticipants:
      dynamicData.conquercancer.getEventTotal.alberta.ab19.riders +
      dynamicData.conquercancer.getEventTotal.alberta.ab19.virtual +
      dynamicData.conquercancer.getEventTotal.alberta.ab19.crews,
    ab19RFIDaily: dailyIncrements.ab19RFIDaily,
    ab19RidersDaily: dailyIncrements.ab19RidersDaily,
    ab19VRDaily: dailyIncrements.ab19VRDaily,
    ab19CrewDaily: dailyIncrements.ab19CrewDaily,
    ab19DonDaily: dailyIncrements.ab19DonDaily,
    ab19RegFeeDaily: dailyIncrements.ab19RegFeeDaily,

    ab18Donations: dynamicData.conquercancer.getEventTotal.alberta.ab18.donations,
    ab18RegFee: dynamicData.conquercancer.getEventTotal.alberta.ab18.regfee,
    ab18RFI: dynamicData.conquercancer.getEventTotal.alberta.ab18.rfi,
    ab18Crews: dynamicData.conquercancer.getEventTotal.alberta.ab18.crews,
    ab18Riders: dynamicData.conquercancer.getEventTotal.alberta.ab18.riders,
    ab18VR: dynamicData.conquercancer.getEventTotal.alberta.ab18.virtual,
    ab18TotalParticipants:
      dynamicData.conquercancer.getEventTotal.alberta.ab18.riders +
      dynamicData.conquercancer.getEventTotal.alberta.ab18.virtual +
      dynamicData.conquercancer.getEventTotal.alberta.ab18.crews,
    ab18RFIDaily: dailyIncrements.ab18RFIDaily,
    ab18RidersDaily: dailyIncrements.ab18RidersDaily,
    ab18VRDaily: dailyIncrements.ab18VRDaily,
    ab18CrewDaily: dailyIncrements.ab18CrewDaily,
    ab18DonDaily: dailyIncrements.ab18DonDaily,
    ab18RegFeeDaily: dailyIncrements.ab18RegFeeDaily,

    ab17Donations: dynamicData.conquercancer.getEventTotal.alberta.ab17.donations,
    ab17RegFee: dynamicData.conquercancer.getEventTotal.alberta.ab17.regfee,
    ab17RFI: dynamicData.conquercancer.getEventTotal.alberta.ab17.rfi,
    ab17Crews: dynamicData.conquercancer.getEventTotal.alberta.ab17.crews,
    ab17Riders: dynamicData.conquercancer.getEventTotal.alberta.ab17.riders,
    ab17VR: dynamicData.conquercancer.getEventTotal.alberta.ab17.virtual,
    ab17TotalParticipants:
      dynamicData.conquercancer.getEventTotal.alberta.ab17.riders +
      dynamicData.conquercancer.getEventTotal.alberta.ab17.virtual +
      dynamicData.conquercancer.getEventTotal.alberta.ab17.crews,
    ab17DonDaily: dailyIncrements.ab17DonDaily,

    // Vancouver data
    va20Donations: dynamicData.conquercancer.getEventTotal.vancouver.va20.donations,
    va20RegFee: dynamicData.conquercancer.getEventTotal.vancouver.va20.regfee,
    va20RFI: dynamicData.conquercancer.getEventTotal.vancouver.va20.rfi,
    va20Crews: dynamicData.conquercancer.getEventTotal.vancouver.va20.crews,
    va20Riders: dynamicData.conquercancer.getEventTotal.vancouver.va20.riders,
    va20VR: dynamicData.conquercancer.getEventTotal.vancouver.va20.virtual,
    va20TotalParticipants:
      dynamicData.conquercancer.getEventTotal.vancouver.va20.riders +
      dynamicData.conquercancer.getEventTotal.vancouver.va20.virtual +
      dynamicData.conquercancer.getEventTotal.vancouver.va20.crews,
    va20RFIDaily: dailyIncrements.va20RFIDaily,
    va20RidersDaily: dailyIncrements.va20RidersDaily,
    va20VRDaily: dailyIncrements.va20VRDaily,
    va20CrewDaily: dailyIncrements.va20CrewDaily,
    va20DonDaily: dailyIncrements.va20DonDaily,
    va20RegFeeDaily: dailyIncrements.va20RegFeeDaily,

    va19Donations: dynamicData.conquercancer.getEventTotal.vancouver.va19.donations,
    va19RegFee: dynamicData.conquercancer.getEventTotal.vancouver.va19.regfee,
    va19RFI: dynamicData.conquercancer.getEventTotal.vancouver.va19.rfi,
    va19Crews: dynamicData.conquercancer.getEventTotal.vancouver.va19.crews,
    va19Riders: dynamicData.conquercancer.getEventTotal.vancouver.va19.riders,
    va19VR: dynamicData.conquercancer.getEventTotal.vancouver.va19.virtual,
    va19TotalParticipants:
      dynamicData.conquercancer.getEventTotal.vancouver.va19.riders +
      dynamicData.conquercancer.getEventTotal.vancouver.va19.virtual +
      dynamicData.conquercancer.getEventTotal.vancouver.va19.crews,
    va19RFIDaily: dailyIncrements.va19RFIDaily,
    va19RidersDaily: dailyIncrements.va19RidersDaily,
    va19VRDaily: dailyIncrements.va19VRDaily,
    va19CrewDaily: dailyIncrements.va19CrewDaily,
    va19DonDaily: dailyIncrements.va19DonDaily,
    va19RegFeeDaily: dailyIncrements.va19RegFeeDaily,

    va18Donations: dynamicData.conquercancer.getEventTotal.vancouver.va18.donations,
    va18RegFee: dynamicData.conquercancer.getEventTotal.vancouver.va18.regfee,
    va18RFI: dynamicData.conquercancer.getEventTotal.vancouver.va18.rfi,
    va18Crews: dynamicData.conquercancer.getEventTotal.vancouver.va18.crews,
    va18Riders: dynamicData.conquercancer.getEventTotal.vancouver.va18.riders,
    va18VR: dynamicData.conquercancer.getEventTotal.vancouver.va18.virtual,
    va18TotalParticipants:
      dynamicData.conquercancer.getEventTotal.vancouver.va18.riders +
      dynamicData.conquercancer.getEventTotal.vancouver.va18.virtual +
      dynamicData.conquercancer.getEventTotal.vancouver.va18.crews,
    va18RFIDaily: dailyIncrements.va18RFIDaily,
    va18RidersDaily: dailyIncrements.va18RidersDaily,
    va18VRDaily: dailyIncrements.va18VRDaily,
    va18CrewDaily: dailyIncrements.va18CrewDaily,
    va18DonDaily: dailyIncrements.va18DonDaily,
    va18RegFeeDaily: dailyIncrements.va18RegFeeDaily,

    va17Donations: dynamicData.conquercancer.getEventTotal.vancouver.va17.donations,
    va17RegFee: dynamicData.conquercancer.getEventTotal.vancouver.va17.regfee,
    va17RFI: dynamicData.conquercancer.getEventTotal.vancouver.va17.rfi,
    va17Crews: dynamicData.conquercancer.getEventTotal.vancouver.va17.crews,
    va17Riders: dynamicData.conquercancer.getEventTotal.vancouver.va17.riders,
    va17VR: dynamicData.conquercancer.getEventTotal.vancouver.va17.virtual,
    va17TotalParticipants:
      dynamicData.conquercancer.getEventTotal.vancouver.va17.riders +
      dynamicData.conquercancer.getEventTotal.vancouver.va17.virtual +
      dynamicData.conquercancer.getEventTotal.vancouver.va17.crews,
    va17DonDaily: dailyIncrements.va17DonDaily,

    // OneWalk Toronto data
    owto20Donations: dynamicData.onewalk.getEventTotal.owto20.donations,
    owto20RegFee: dynamicData.onewalk.getEventTotal.owto20.regfee,
    owto20RFI: dynamicData.onewalk.getEventTotal.owto20.rfi,
    owto20Walkers: dynamicData.onewalk.getEventTotal.owto20.walkers,
    owto20Walkers2day: dynamicData.onewalk.getEventTotal.owto20.walkers2day,
    owto20NightWalkers: dynamicData.onewalk.getEventTotal.owto20.walkersNight,
    owto20Walkers25km: dynamicData.onewalk.getEventTotal.owto20.walkers25km,
    owto20Walkers40km: dynamicData.onewalk.getEventTotal.owto20.walkers40km,
    owto20Crews: dynamicData.onewalk.getEventTotal.owto20.crews,
    owto20VR: dynamicData.onewalk.getEventTotal.owto20.virtual,
    owto20TotalParticipants:
      dynamicData.onewalk.getEventTotal.owto20.walkers +
      dynamicData.onewalk.getEventTotal.owto20.virtual +
      dynamicData.onewalk.getEventTotal.owto20.crews,
    owto20RFIDaily: dailyIncrements.owto20RFIDaily,
    owto20WalkersDaily: dailyIncrements.owto20WalkersDaily,
    owto20NightWalkersDaily: dailyIncrements.owto20WalkersNightDaily,
    owto202dayDaily: dailyIncrements.owto20Walkers2dayDaily,
    owto2025kmWalkersDaily: dailyIncrements.owto20Walkers25kmDaily,
    owto2040kmWalkersDaily: dailyIncrements.owto20Walkers40kmDaily,
    owto20VRDaily: dailyIncrements.owto20VRDaily,
    owto20CrewsDaily: dailyIncrements.owto20CrewDaily,
    owto20DonDaily: dailyIncrements.owto20DonDaily,
    owto20RegDaily: dailyIncrements.owto20RegFeeDaily,

    owto19Donations: dynamicData.onewalk.getEventTotal.owto19.donations,
    owto19RegFee: dynamicData.onewalk.getEventTotal.owto19.regfee,
    owto19RFI: dynamicData.onewalk.getEventTotal.owto19.rfi,
    owto19Walkers: dynamicData.onewalk.getEventTotal.owto19.walkers,
    owto19Walkers2day: dynamicData.onewalk.getEventTotal.owto19.walkers2day,
    owto19NightWalkers: dynamicData.onewalk.getEventTotal.owto19.walkersNight,
    owto19Walkers25km: dynamicData.onewalk.getEventTotal.owto19.walkers25km,
    owto19Walkers40km: dynamicData.onewalk.getEventTotal.owto19.walkers40km,
    owto19Crews: dynamicData.onewalk.getEventTotal.owto19.crews,
    owto19VR: dynamicData.onewalk.getEventTotal.owto19.virtual,
    owto19TotalParticipants:
      dynamicData.onewalk.getEventTotal.owto19.walkers +
      dynamicData.onewalk.getEventTotal.owto19.virtual +
      dynamicData.onewalk.getEventTotal.owto19.crews,
    owto19RFIDaily: dailyIncrements.owto19RFIDaily,
    owto19WalkersDaily: dailyIncrements.owto19WalkersDaily,
    owto19NightWalkersDaily: dailyIncrements.owto19WalkersNightDaily,
    owto192dayDaily: dailyIncrements.owto19Walkers2dayDaily,
    owto1925kmWalkersDaily: dailyIncrements.owto19Walkers25kmDaily,
    owto1940kmWalkersDaily: dailyIncrements.owto19Walkers40kmDaily,
    owto19VRDaily: dailyIncrements.owto19VRDaily,
    owto19CrewsDaily: dailyIncrements.owto19CrewDaily,
    owto19DonDaily: dailyIncrements.owto19DonDaily,
    owto19RegDaily: dailyIncrements.owto19RegFeeDaily,

    owto18Donations: dynamicData.onewalk.getEventTotal.owto18.donations,
    owto18RegFee: dynamicData.onewalk.getEventTotal.owto18.regfee,
    owto18RFI: dynamicData.onewalk.getEventTotal.owto18.rfi,
    owto18Walkers: dynamicData.onewalk.getEventTotal.owto18.walkers,
    owto18Walkers2day: dynamicData.onewalk.getEventTotal.owto18.walkers2day,
    owto18NightWalkers: dynamicData.onewalk.getEventTotal.owto18.walkersNight,
    owto18Walkers15km: dynamicData.onewalk.getEventTotal.owto18.walkers15km,
    owto18Walkers25km: dynamicData.onewalk.getEventTotal.owto18.walkers25km,
    owto18Walkers40km: dynamicData.onewalk.getEventTotal.owto18.walkers40km,
    owto18Crews: dynamicData.onewalk.getEventTotal.owto18.crews,
    owto18VR: dynamicData.onewalk.getEventTotal.owto18.virtual || 0,
    owto18TotalParticipants:
      dynamicData.onewalk.getEventTotal.owto18.walkers +
      (dynamicData.onewalk.getEventTotal.owto18.virtual || 0) +
      dynamicData.onewalk.getEventTotal.owto18.crews,
    owto18RFIDaily: dailyIncrements.owto18RFIDaily,
    owto18WalkersDaily: dailyIncrements.owto18WalkersDaily,
    owto18NightWalkersDaily: dailyIncrements.owto18WalkersNightDaily,
    owto182dayDaily: dailyIncrements.owto18Walkers2dayDaily,
    owto1815kmWalkersDaily: dailyIncrements.owto18Walkers15kmDaily,
    owto1825kmWalkersDaily: dailyIncrements.owto18Walkers25kmDaily,
    owto1840kmWalkersDaily: dailyIncrements.owto18Walkers40kmDaily,
    owto18VRDaily: dailyIncrements.owto18VRDaily,
    owto18CrewsDaily: dailyIncrements.owto18CrewDaily,
    owto18DonDaily: dailyIncrements.owto18DonDaily,
    owto18RegDaily: dailyIncrements.owto18RegFeeDaily,

    owto17Donations: dynamicData.onewalk.getEventTotal.owto17.donations,
    owto17RegFee: dynamicData.onewalk.getEventTotal.owto17.regfee,
    owto17RFI: dynamicData.onewalk.getEventTotal.owto17.rfi,
    owto17Walkers: dynamicData.onewalk.getEventTotal.owto17.walkers,
    owto17Walkers2day: dynamicData.onewalk.getEventTotal.owto17.walkers2day,
    owto17NightWalkers: dynamicData.onewalk.getEventTotal.owto17.walkersNight,
    owto17Walkers15km: dynamicData.onewalk.getEventTotal.owto17.walkers15km,
    owto17Walkers25km: dynamicData.onewalk.getEventTotal.owto17.walkers25km,
    owto17Walkers40km: dynamicData.onewalk.getEventTotal.owto17.walkers40km,
    owto17Crews: dynamicData.onewalk.getEventTotal.owto17.crews,
    owto17VR: dynamicData.onewalk.getEventTotal.owto17.virtual,
    owto17TotalParticipants:
      dynamicData.onewalk.getEventTotal.owto17.walkers +
      dynamicData.onewalk.getEventTotal.owto17.virtual +
      dynamicData.onewalk.getEventTotal.owto17.crews,
    owto17DonDaily: dailyIncrements.owto17DonDaily,

    // Perth data
    pr18Donations: dynamicData.conquercancerAU.getEventTotal.perth.pr18.donations,
    pr18RegFee: dynamicData.conquercancerAU.getEventTotal.perth.pr18.regfee,
    pr18RFI: dynamicData.conquercancerAU.getEventTotal.perth.pr18.rfi,
    pr18Crews: dynamicData.conquercancerAU.getEventTotal.perth.pr18.crews,
    pr18Riders: dynamicData.conquercancerAU.getEventTotal.perth.pr18.riders,
    pr18VR: dynamicData.conquercancerAU.getEventTotal.perth.pr18.virtual,
    pr18TotalParticipants:
      dynamicData.conquercancerAU.getEventTotal.perth.pr18.riders +
      dynamicData.conquercancerAU.getEventTotal.perth.pr18.virtual +
      dynamicData.conquercancerAU.getEventTotal.perth.pr18.crews,
    pr18RFIDaily: dailyIncrements.pr18RFIDaily,
    pr18RidersDaily: dailyIncrements.pr18RidersDaily,
    pr18VRDaily: dailyIncrements.pr18VRDaily,
    pr18CrewDaily: dailyIncrements.pr18CrewDaily,
    pr18DonDaily: dailyIncrements.pr18DonDaily,
    pr18RegFeeDaily: dailyIncrements.pr18RegFeeDaily,

    pr17Donations: dynamicData.conquercancerAU.getEventTotal.perth.pr17.donations,
    pr17RegFee: dynamicData.conquercancerAU.getEventTotal.perth.pr17.regfee,
    pr17RFI: dynamicData.conquercancerAU.getEventTotal.perth.pr17.rfi,
    pr17Crews: dynamicData.conquercancerAU.getEventTotal.perth.pr17.crews,
    pr17Riders: dynamicData.conquercancerAU.getEventTotal.perth.pr17.riders,
    pr17VR: dynamicData.conquercancerAU.getEventTotal.perth.pr17.virtual,
    pr17TotalParticipants:
      dynamicData.conquercancerAU.getEventTotal.perth.pr17.riders +
      dynamicData.conquercancerAU.getEventTotal.perth.pr17.virtual +
      dynamicData.conquercancerAU.getEventTotal.perth.pr17.crews,
    pr17DonDaily: dailyIncrements.pr17DonDaily,

    // Melbourne data
    ml18Donations: dynamicData.onedayAU.getEventTotal.melbourne.ml18.donations,
    ml18RegFee: dynamicData.onedayAU.getEventTotal.melbourne.ml18.regfee,
    ml18Walkers: dynamicData.onedayAU.getEventTotal.melbourne.ml18.walkers,
    ml18Riders: dynamicData.onedayAU.getEventTotal.melbourne.ml18.riders,
    ml18RFI: dynamicData.onedayAU.getEventTotal.melbourne.ml18.rfi,
    ml18Crews: dynamicData.onedayAU.getEventTotal.melbourne.ml18.crews,
    ml18VR: dynamicData.onedayAU.getEventTotal.melbourne.ml18.virtual,
    ml18TotalParticipants:
      dynamicData.onedayAU.getEventTotal.melbourne.ml18.walkers +
      dynamicData.onedayAU.getEventTotal.melbourne.ml18.riders +
      dynamicData.onedayAU.getEventTotal.melbourne.ml18.virtual +
      dynamicData.onedayAU.getEventTotal.melbourne.ml18.crews,
    ml18WalkersDaily: dailyIncrements.ml18WalkersDaily,
    ml18RidersDaily: dailyIncrements.ml18RidersDaily,
    ml18VRDaily: dailyIncrements.ml18VRDaily,
    ml18DonDaily: dailyIncrements.ml18DonDaily,
    ml18RegDaily: dailyIncrements.ml18RegFeeDaily,

    ml17Donations: dynamicData.onedayAU.getEventTotal.melbourne.ml17.donations,
    ml17RegFee: dynamicData.onedayAU.getEventTotal.melbourne.ml17.regfee,
    ml17RFI: dynamicData.onedayAU.getEventTotal.melbourne.ml17.rfi,
    ml17Walkers: dynamicData.onedayAU.getEventTotal.melbourne.ml17.walkers,
    ml17Riders: dynamicData.onedayAU.getEventTotal.melbourne.ml17.riders,
    ml17Crews: dynamicData.onedayAU.getEventTotal.melbourne.ml17.crews,
    ml17VR: dynamicData.onedayAU.getEventTotal.melbourne.ml17.virtual,
    ml17TotalParticipants:
      dynamicData.onedayAU.getEventTotal.melbourne.ml17.walkers +
      dynamicData.onedayAU.getEventTotal.melbourne.ml17.riders +
      dynamicData.onedayAU.getEventTotal.melbourne.ml17.virtual +
      dynamicData.onedayAU.getEventTotal.melbourne.ml17.crews,
    ml17DonDaily: dailyIncrements.ml17DonDaily,

    // Brisbane data
    br18Donations: dynamicData.onedayAU.getEventTotal.brisbane.br18.donations,
    br18RegFee: dynamicData.onedayAU.getEventTotal.brisbane.br18.regfee,
    br18Walkers: dynamicData.onedayAU.getEventTotal.brisbane.br18.walkers,
    br18Riders: dynamicData.onedayAU.getEventTotal.brisbane.br18.riders,
    br18RFI: dynamicData.onedayAU.getEventTotal.brisbane.br18.rfi,
    br18Crews: dynamicData.onedayAU.getEventTotal.brisbane.br18.crews,
    br18VR: dynamicData.onedayAU.getEventTotal.brisbane.br18.virtual,
    br18TotalParticipants:
      dynamicData.onedayAU.getEventTotal.brisbane.br18.walkers +
      dynamicData.onedayAU.getEventTotal.brisbane.br18.riders +
      dynamicData.onedayAU.getEventTotal.brisbane.br18.virtual +
      dynamicData.onedayAU.getEventTotal.brisbane.br18.crews,
    br18WalkersDaily: dailyIncrements.br18WalkersDaily,
    br18RidersDaily: dailyIncrements.br18RidersDaily,
    br18VRDaily: dailyIncrements.br18VRDaily,
    br18DonDaily: dailyIncrements.br18DonDaily,
    br18RegDaily: dailyIncrements.br18RegFeeDaily,

    br17Donations: dynamicData.onedayAU.getEventTotal.brisbane.br17.donations,
    br17RegFee: dynamicData.onedayAU.getEventTotal.brisbane.br17.regfee,
    br17RFI: dynamicData.onedayAU.getEventTotal.brisbane.br17.rfi,
    br17Walkers: dynamicData.onedayAU.getEventTotal.brisbane.br17.walkers,
    br17Riders: dynamicData.onedayAU.getEventTotal.brisbane.br17.riders,
    br17Crews: dynamicData.onedayAU.getEventTotal.brisbane.br17.crews,
    br17VR: dynamicData.onedayAU.getEventTotal.brisbane.br17.virtual,
    br17TotalParticipants:
      dynamicData.onedayAU.getEventTotal.brisbane.br17.walkers +
      dynamicData.onedayAU.getEventTotal.brisbane.br17.riders +
      dynamicData.onedayAU.getEventTotal.brisbane.br17.virtual +
      dynamicData.onedayAU.getEventTotal.brisbane.br17.crews,
    br17DonDaily: dailyIncrements.br17DonDaily,
  };

  try {
    const result = await ApiData.create(doc);
    console.log('Mock data migrated to MongoDB!');
    // Print inserted document _id and collection
    console.log('Inserted document _id:', result._id);
  } catch (createError) {
    console.error('Error creating document:', createError);
    // Try inserting directly to collection
    try {
      const result = await db.collection('apidatas').insertOne(doc);
      console.log('Inserted directly to collection, _id:', result.insertedId);
    } catch (insertError) {
      console.error('Error inserting directly:', insertError);
    }
  }
  const afterCollections = await db.listCollections().toArray();
  console.log('Collections after insert:', afterCollections.map(c => c.name));
  // Print document count in collection
  const count = await db.collection('apidatas').countDocuments();
  console.log('Document count in collection "apidatas":', count);
  await mongoose.disconnect();
  process.exit(0);
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
