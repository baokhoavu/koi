#! /app/.heroku/node/bin/node

var mongoose = require('mongoose');
const moment = require('moment');
const request = require('request');
// const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var ApiData = require('./models/apidata');

mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');
var mongodbUri = 'mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw';

var promise = mongoose.connect(mongodbUri, {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) {
    console.log('inside promise db');

    var Schema = mongoose.Schema;

    var dataSchema = new Schema({
        updated: String,
        nightly: String,
        to19Donations: String,
        to19RegFee: String,
        to19Crews: String,
        to19RFI: String,
        to19Riders: String,
        to19Riders2: String,
        to19OneDay: String,
        to19OneDay2: String,
        to19VR: String,
        to19TotalParticipants: String,
        to18Donations: String,
        to18RegFee: String,
        to18Crews: String,
        to18RFI: String,
        to18Riders: String,
        to18Riders2: String,
        to18OneDay: String,
        to18OneDay2: String,
        to18VR: String,
        to18TotalParticipants: String,
        mo19Donations: String,
        mo19RegFee: String,
        mo19Crews: String,
        mo19RFI: String,
        mo19Riders: String,
        mo19Riders2: String,
        mo19OneDay: String,
        mo19OneDay2: String,
        mo19VR: String,
        mo19TotalParticipants: String,
        mo18Donations: String,
        mo18RegFee: String,
        mo18Crews: String,
        mo18RFI: String,
        mo18Riders: String,
        mo18VR: String,
        ab19Donations: String,
        ab19RegFee: String,
        ab19Crews: String,
        ab19RFI: String,
        ab19Riders: String,
        ab19Riders2: String,
        ab19OneDay: String,
        ab19OneDay2: String,
        ab19VR: String,
        ab19TotalParticipants: String,
        ab18Donations: String,
        ab18RegFee: String,
        ab18Crews: String,
        ab18RFI: String,
        ab18Riders: String,
        ab18VR: String,
        va19Donations: String,
        va19RegFee: String,
        va19Crews: String,
        va19RFI: String,
        va19Riders: String,
        va19Riders2: String,
        va19OneDay: String,
        va19OneDay2: String,
        va19VR: String,
        va19TotalParticipants: String,
        va18VR: String,
        va18Donations: String,
        va18RegFee: String,
        va18Crews: String,
        va18RFI: String,
        va18Riders: String,
        va18VR: String,
        to17Donations: String,
        to17RegFee: String,
        to17Crews: String,
        to17RFI: String,
        to17Riders: String,
        to17VR: String,
        mo17Donations: String,
        mo17RegFee: String,
        mo17Crews: String,
        mo17RFI: String,
        mo17Riders: String,
        mo17VR: String,
        ab17Donations: String,
        ab17RegFee: String,
        ab17Crews: String,
        ab17RFI: String,
        ab17Riders: String,
        ab17VR: String,
        va17Donations: String,
        va17RegFee: String,
        va17Crews: String,
        va17RFI: String,
        va17Riders: String,
        va17VR: String,
        owTo19Donations: String,
        owTo19RegFee: String,
        owTo19RFI: String,
        owTo19Crews: String,
        owTo19VR: String,
        owTo19Walkers: String,
        owTo1925kmWalkers: String,
        owTo1940kmWalkers: String,
        owTo19NightWalkers: String,
        owTo192day: String,
        owTo18Donations: String,
        owTo18RegFee: String,
        owTo18Crews: String,
        owTo18Walkers: String,
        owTo18NightWalkers: String,
        owTo182day: String,
        owTo1815kmWalkers: String,
        owTo1825kmWalkers: String,
        owTo1840kmWalkers: String,
        owTo18RFI: String,
        owTo17Donations: String,
        owTo17RegFee: String,
        owTo17Crews: String,
        owTo17Walkers: String,
        owTo1715kmWalkers: String,
        owTo1725kmWalkers: String,
        owTo1740kmWalkers: String,
        owTo17RFI: String,
        pr18Donations: String,
        pr18RegFee: String,
        pr18Crews: String,
        pr18RFI: String,
        pr18Riders: String,
        pr17Donations: String,
        pr17RegFee: String,
        pr17Crews: String,
        pr17RFI:String,
        pr17Riders: String,
        br18Donations: String,
        br18RegFee: String,
        br18Walkers: String,
        br18Riders: String,
        br17Donations: String,
        br17RegFee: String,
        br17Walkers: String,
        br17Riders: String,
        ml18Donations: String,
        ml18RegFee: String,
        ml18Walkers: String,
        ml18Riders: String,
        ml17Donations: String,
        ml17RegFee: String,
        ml17Walkers: String,
        ml17Riders: String,
        to19DonDaily: String,
        to19RegFeeDaily: String,
        to19RFIDaily: String,
        to19CrewDaily: String,
        to19RidersDaily: String,
        to19VRDaily: String,
        to19Riders2Daily: String,
        to19OneDayDaily: String,
        to19OneDayDaily2: String,
        to18DonDaily: String,
        to18RegFeeDaily: String,
        to18RFIDaily: String,
        to18CrewDaily: String,
        to18RidersDaily: String,
        to18VRDaily: String,
        to18Riders2Daily: String,
        to18OneDayDaily: String,
        to17DonDaily: String,
        pr18DonDaily: String,
        pr18RegFeeDaily: String,
        pr18RFIDaily: String,
        pr18CrewDaily: String,
        pr18RidersDaily: String,
        pr17DonDaily: String,

        mo19DonDaily: String,
        mo19CrewDaily: String,
        mo19RidersDaily: String,
        mo19VRDaily: String,
        mo19RegFeeDaily: String,
        mo19RFIDaily: String,

        mo18DonDaily: String,
        mo18CrewDaily: String,
        mo18RidersDaily: String,
        mo18VRDaily: String,
        mo18RegFeeDaily: String,
        mo18RFIDaily: String,

        mo17DonDaily: String,

        ab19DonDaily: String,
        ab19RegFeeDaily: String,
        ab19RFIDaily: String,
        ab19CrewDaily: String,
        ab19RidersDaily: String,
        ab19VRDaily: String,
        ab19Riders2Daily: String,
        ab19OneDayDaily: String,
        ab19OneDayDaily2: String,
        ab18DonDaily: String,
        ab17DonDaily: String,
        ab18RegFeeDaily: String,
        ab18RFIDaily: String,
        ab18CrewDaily: String,
        ab18RidersDaily: String,
        ab18VRDaily: String,
        va19DonDaily: String,
        va19RegFeeDaily: String,
        va19RFIDaily: String,
        va19CrewDaily: String,
        va19RidersDaily: String,
        va19VRDaily: String,
        va19Riders2Daily: String,
        va19OneDayDaily: String,
        va19OneDayDaily2: String,
        va18DonDaily: String,
        va18CrewDaily: String,
        va18RidersDaily: String,
        va18VRDaily: String,
        va17DonDaily: String,
        va18RegFeeDaily: String,
        va18RFIDaily: String,
        owto19DonDaily: String,
        owto19RegDaily: String,
        owto19RFIDaily: String,
        owto19CrewsDaily: String,
        owto19VirtualDaily: String,
        owto19WalkersDaily: String,
        owto1925kmWalkersDaily: String,
        owto1940kmWalkersDaily: String,
        owto19NightWalkersDaily: String,
        owto192dayDaily: String,
        owto18DonDaily: String,
        owto17DonDaily: String,
        owto18RegDaily: String,
        owto18RFIDaily: String,
        owto18WalkersDaily: String,
        owto182dayDaily: String,
        owto18NightWalkersDaily: String,
        owto1815kmWalkersDaily: String,
        owto1825kmWalkersDaily: String,
        owto1840kmWalkersDaily: String,
        owto18CrewsDaily: String,
        br18DonDaily: String,
        br18RegDaily: String,
        br18RidersDaily: String,
        ml18DonDaily: String,
        ml17DonDaily: String,
        ml18RegDaily: String,
        ml18RidersDaily: String,
        ml18WalkersDaily: String
    }, {versionKey: false, timestamps: { createdAt: 'created_at' }});
    
    // var ApiData = mongoose.model("ApiData", dataSchema);

    var apiURL = 'http://www.conquercancer.ca/site/PageServer?pagename=2018_api_data&pgwrap=n';
    request(apiURL, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var locals = JSON.parse(body);
            console.log('Got ConquerCancer Data...');

            var apiOneWalk = 'http://www.onewalk.ca/site/PageServer?pagename=api_data&pgwrap=n';
            request(apiOneWalk, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    var locals2 = JSON.parse(body);
                    console.log('Got OneWalk Data...');

                    var apiRidePerth = 'http://www.conquercancer.org.au/site/PageServer?pagename=api_data&pgwrap=n';
                    request(apiRidePerth, function(err, response, body) {
                        if (!err && response.statusCode == 200) {
                            var locals3 = JSON.parse(body);
                            console.log('Got ConquerCancer AU Data...');

                            var apiOneDay = 'http://participate.theoneday.org.au/site/PageServer?pagename=api_data&pgwrap=n';
                            request(apiOneDay, function(err, response, body) {
                                if (!err && response.statusCode == 200) {
                                var locals4 = JSON.parse(body);
                                console.log('Got TheOneDay Data...');

                                    ApiData.findOne(
                                        (err, data) => {

                                            console.log("In the scheduler getting nightly data...");
                                            
                                            // Set Variables for Real Time vs Static Event Data

                                            // =========================== Ride Toronto 2019 =========================== //
                                            var removeDollarTo19v1 = locals.getEventTotal.toronto.to19.totalDonation;
                                            var removeDollarTo19v2 = data.to19Donations;
                                            var removeRegTo19v1 = locals.getEventTotal.toronto.to19.regFee;
                                            var removeRegTo19v2 = data.to19RegFee;
                                                
                                            // =========================== Ride Toronto 2018 =========================== //
                                            var removeDollarTo18v1 = locals.getEventTotal.toronto.to18.totalDonation;
                                            var removeDollarTo18v2 = data.to18Donations;
                                            var removeRegTo18v1 = locals.getEventTotal.toronto.to18.regFee;
                                            var removeRegTo18v2 = data.to18RegFee;
                                            // =========================== Ride Toronto 2017 =========================== //
                                            var removeDollarTo17v1 = locals.getEventTotal.toronto.to17.totalDonation;
                                            var removeDollarTo17v2 = data.to17Donations;

                                            // =========================== Ride Montreal 2019 =========================== //
                                            var removeDollarMo19v1 = locals.getEventTotal.montreal.mo19.totalDonation;
                                            var removeDollarMo19v2 = data.mo19Donations;
                                            var removeRegMo19v1 = locals.getEventTotal.montreal.mo19.regFee;
                                            var removeRegMo19v2 = data.mo19RegFee;
                                            // =========================== Ride Montreal 2018 =========================== //
                                            var removeDollarMo18v1 = locals.getEventTotal.montreal.mo18.totalDonation;
                                            var removeDollarMo18v2 = data.mo18Donations;
                                            var removeRegMo18v1 = locals.getEventTotal.montreal.mo18.regFee;
                                            var removeRegMo18v2 = data.mo18RegFee;
                                            // =========================== Ride Montreal 2017 =========================== //
                                            var removeDollarMo17v1 = locals.getEventTotal.montreal.mo17.totalDonation;
                                            var removeDollarMo17v2 = data.mo17Donations;
                                            
                                            // =========================== Ride Alberta 2019 =========================== //
                                            var removeDollarAb19v1 = locals.getEventTotal.alberta.ab19.totalDonation;
                                            var removeDollarAb19v2 = data.ab19Donations;
                                            var removeRegAb19v1 = locals.getEventTotal.alberta.ab19.regFee;
                                            var removeRegAb19v2 = data.ab19RegFee;
                                            // =========================== Ride Alberta 2018 =========================== //
                                            var removeDollarAb18v1 = locals.getEventTotal.alberta.ab18.totalDonation;
                                            var removeDollarAb18v2 = data.ab18Donations;
                                            var removeRegAb18v1 = locals.getEventTotal.alberta.ab18.regFee;
                                            var removeRegAb18v2 = data.ab18RegFee;
                                            // =========================== Ride Alberta 2017 =========================== //
                                            var removeDollarAb17v1 = locals.getEventTotal.alberta.ab17.totalDonation;
                                            var removeDollarAb17v2 = data.ab17Donations;
                                            
                                            // =========================== Ride Vancouver 2019 =========================== //
                                            var removeDollarVa19v1 = locals.getEventTotal.vancouver.va19.totalDonation;
                                            var removeDollarVa19v2 = data.va19Donations;
                                            var removeRegVa19v1 = locals.getEventTotal.vancouver.va19.regFee;
                                            var removeRegVa19v2 = data.va19RegFee;
                                            // =========================== Ride Vancouver 2018 =========================== //
                                            var removeDollarVa18v1 = locals.getEventTotal.vancouver.va18.totalDonation;
                                            var removeDollarVa18v2 = data.va18Donations;
                                            var removeRegVa18v1 = locals.getEventTotal.vancouver.va18.regFee;
                                            var removeRegVa18v2 = data.va18RegFee;
                                            // =========================== Ride Vancouver 2017 =========================== //
                                            var removeDollarVa17v1 = locals.getEventTotal.vancouver.va17.totalDonation;
                                            var removeDollarVa17v2 = data.va17Donations;
                                            
                                            // =========================== Ride Perth 2018 =========================== //
                                            var removeDollarPr18v1 = locals3.getEventTotal.perth.pr18.totalDonation;
                                            var removeDollarPr18v2 = data.pr18Donations;
                                            var removeRegPr18v1 = locals3.getEventTotal.perth.pr18.regFee;
                                            var removeRegPr18v2 = data.pr18RegFee;
                                            // =========================== Ride Perth 2017 =========================== //
                                            var removeDollarPr17v1 = locals3.getEventTotal.perth.pr17.totalDonation;
                                            var removeDollarPr17v2 = data.pr17Donations;
                                            var removeRegPr17v1 = locals3.getEventTotal.perth.pr17.regFee;
                                            var removeRegPr17v2 = data.pr17RegFee;
                                            // =========================== OneWalk Toronto 2019 =========================== //
                                            var removeDollarOwTo19v1 = locals2.getEventTotal.toronto.to19.totalDonation;
                                            var removeDollarOwTo19v2 = data.owTo19Donations;
                                            var removeRegOwTo19v1 = locals2.getEventTotal.toronto.to19.regFee;
                                            var removeRegOwTo19v2 = data.owTo19RegFee;
                                            var owTo19Virtual = locals2.getEventTotal.toronto.to19.virtual;
                                            var owTo1925kmWalkers = locals2.getEventTotal.toronto.to19.Wlkr25km;       
                                            var owTo1940kmWalkers = locals2.getEventTotal.toronto.to19.Wlkr40km;       
                                            var owTo19NightWalkers = locals2.getEventTotal.toronto.to19.nightWlk;
                                            var owTo192day = locals2.getEventTotal.toronto.to19.twoDayWlk;                                              
                                            // =========================== OneWalk Toronto 2018 =========================== //
                                            var removeDollarOwTo18v1 = locals2.getEventTotal.toronto.to18.totalDonation;
                                            var removeDollarOwTo18v2 = data.owTo18Donations;
                                            var removeRegOwTo18v1 = locals2.getEventTotal.toronto.to18.regFee;
                                            var removeRegOwTo18v2 = data.owTo18RegFee;
                                            var owTo18NightWalkers = locals2.getEventTotal.toronto.to18.nightWlk;
                                            var owTo182day = locals2.getEventTotal.toronto.to18.twoDayWlk;
                                            var owTo1815kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr15km;
                                            var owTo1825kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr25km;
                                            var owTo1840kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr40km;
                                            // =========================== OneWalk Toronto 2017 =========================== //
                                            var removeDollarOwTo17v1 = locals2.getEventTotal.toronto.to17.totalDonation;
                                            var removeDollarOwTo17v2 = data.owTo17Donations;
                                            var owTo1715kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr15km;
                                            var owTo1725kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr25km;
                                            var owTo1740kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr40km;

                                            // =========================== OneDay Brisbane 2018 =========================== //
                                            var removeDollarBr18v1 = locals4.getEventTotal.brisbane.br18.totalDonation;
                                            var removeDollarBr18v2 = data.br18Donations;
                                            var removeRegBr18v1 = locals4.getEventTotal.brisbane.br18.regFee;
                                            var removeRegBr18v2 = data.br18RegFee;
                                            
                                            // =========================== OneDay Melbourne 2018 =========================== //
                                            var removeDollarMl18v1 = locals4.getEventTotal.melbourne.ml18.totalDonation;
                                            var removeDollarMl18v2 = data.ml18Donations;
                                            var removeRegMl18v1 = locals4.getEventTotal.melbourne.ml18.regFee;
                                            var removeRegMl18v2 = data.ml18RegFee;
                                            
                                            // =========================== OneDay Melbourne 2017 =========================== //
                                            var removeDollarMl17v1 = locals4.getEventTotal.melbourne.ml17.totalDonation;
                                            var removeDollarMl17v2 = data.ml17Donations;
                                            
                                            // Remove Dollar Sign from Data Brought In
                                            var numberTo19v1 = Number(removeDollarTo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberTo19v2 = Number(removeDollarTo19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegTo19v1 = Number(removeRegTo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegTo19v2 = Number(removeRegTo19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberTo18v1 = Number(removeDollarTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberTo18v2 = Number(removeDollarTo18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberTo17v1 = Number(removeDollarTo17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberTo17v2 = Number(removeDollarTo17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegTo18v1 = Number(removeRegTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegTo18v2 = Number(removeRegTo18v2.replace(/[^0-9\.-]+/g,""));
                                                
                                            var numberPr18v1 = Number(removeDollarPr18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberPr18v2 = Number(removeDollarPr18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberPr17v1 = Number(removeDollarPr17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberPr17v2 = Number(removeDollarPr17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegPr18v1 = Number(removeRegPr18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegPr18v2 = Number(removeRegPr18v2.replace(/[^0-9\.-]+/g,""));

                                            var numberMo19v1 = Number(removeDollarMo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMo19v2 = Number(removeDollarMo19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo19v1 = Number(removeRegMo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo19v2 = Number(removeRegMo19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberMo18v1 = Number(removeDollarMo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMo18v2 = Number(removeDollarMo18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberMo17v1 = Number(removeDollarMo17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMo17v2 = Number(removeDollarMo17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo18v1 = Number(removeRegMo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo18v2 = Number(removeRegMo18v2.replace(/[^0-9\.-]+/g,""));

                                            var numberAb19v1 = Number(removeDollarAb19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberAb19v2 = Number(removeDollarAb19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb19v1 = Number(removeRegAb19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb19v2 = Number(removeRegAb19v2.replace(/[^0-9\.-]+/g,""));                                            
                                            var numberAb18v1 = Number(removeDollarAb18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberAb18v2 = Number(removeDollarAb18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberAb17v1 = Number(removeDollarAb17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberAb17v2 = Number(removeDollarAb17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb18v1 = Number(removeRegAb18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb18v2 = Number(removeRegAb18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberVa19v1 = Number(removeDollarVa19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberVa19v2 = Number(removeDollarVa19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa19v1 = Number(removeRegVa19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa19v2 = Number(removeRegVa19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberVa18v1 = Number(removeDollarVa18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberVa18v2 = Number(removeDollarVa18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberVa17v1 = Number(removeDollarVa17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberVa17v2 = Number(removeDollarVa17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa18v1 = Number(removeRegVa18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa18v2 = Number(removeRegVa18v2.replace(/[^0-9\.-]+/g,""));

                                            var numberOwTo19v1 = Number(removeDollarOwTo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo19v2 = Number(removeDollarOwTo19v2.replace(/[^0-9\.-]+/g,""));                                            
                                            var numberOwTo18v1 = Number(removeDollarOwTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo18v2 = Number(removeDollarOwTo18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo17v1 = Number(removeDollarOwTo17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo17v2 = Number(removeDollarOwTo17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo19v1 = Number(removeRegOwTo19v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo19v2 = Number(removeRegOwTo19v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo18v1 = Number(removeRegOwTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo18v2 = Number(removeRegOwTo18v2.replace(/[^0-9\.-]+/g,""));

                                            var numberBr18v1 = Number(removeDollarBr18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberBr18v2 = Number(removeDollarBr18v2.replace(/[^0-9\.-]+/g,"")); 
                                            var numberBr18v1 = Number(removeRegBr18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberBr18v2 = Number(removeRegBr18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberMl18v1 = Number(removeDollarMl18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v2 = Number(removeDollarMl18v2.replace(/[^0-9\.-]+/g,"")); 
                                            var numberMl17v1 = Number(removeDollarMl17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl17v2 = Number(removeDollarMl17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v1 = Number(removeRegMl18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v2 = Number(removeRegMl18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            // Subtract Real Time Data vs Static Data

                                            // Toronto Daily
                                            var to19DonationSub = numberTo19v1 - numberTo19v2;
                                            var to19RfiSub = locals.getEventTotal.toronto.to19.rfi - data.to19RFI;
                                            var to19CrewSub = locals.getEventTotal.toronto.to19.crews - data.to19Crews;
                                            var to19RegSub = numberRegTo19v1 - numberRegTo19v2;
                                            var to19VRDailySub = locals.getEventTotal.toronto.to19.virtual - data.to19VR;
                                            var to19Riders2Daily = locals.getEventTotal.toronto.to19.riders2 - data.to19Riders2;
                                            var to19OneDayDaily = locals.getEventTotal.toronto.to19.oneday - data.to19OneDay;
                                            var to19OneDayDaily2 = locals.getEventTotal.toronto.to19.oneday2 - data.to19OneDay2;

                                            var to19TotalParticipants = parseFloat(locals.getEventTotal.toronto.to19.riders) + parseFloat(locals.getEventTotal.toronto.to19.riders2) + parseFloat(locals.getEventTotal.toronto.to19.oneday) + parseFloat(locals.getEventTotal.toronto.to19.oneday2);

                                            var to19TotalRiders = locals.getEventTotal.toronto.to19.riders;

                                            var to19RiderSub = to19TotalRiders - data.to19Riders;

                                            var to18DonationSub = numberTo18v1 - numberTo18v2;
                                            var to17DonationSub = numberTo17v1 - numberTo17v2;
                                            var to18RfiSub = locals.getEventTotal.toronto.to18.rfi - data.to18RFI;
                                            var to18CrewSub = locals.getEventTotal.toronto.to18.crews - data.to18Crews;
                                            // var to18RiderSub = locals.getEventTotal.toronto.to18.riders - data.to18Riders;
                                            var to18RegSub = numberRegTo18v1 - numberRegTo18v2;
                                            var to18VRDailySub = locals.getEventTotal.toronto.to18.virtual - data.to18VR;
                                            var to18Riders2Daily = locals.getEventTotal.toronto.to18.riders2 - data.to18Riders2;
                                            var to18OneDayDaily = locals.getEventTotal.toronto.to18.oneday - data.to18OneDay;
                                            var to18OneDayDaily2 = locals.getEventTotal.toronto.to18.oneday2 - data.to18OneDay2;

                                            var to18TotalParticipants = parseFloat(locals.getEventTotal.toronto.to18.riders) + parseFloat(locals.getEventTotal.toronto.to18.riders2) + parseFloat(locals.getEventTotal.toronto.to18.oneday) + parseFloat(locals.getEventTotal.toronto.to18.oneday2);

                                            var to18TotalRiders = locals.getEventTotal.toronto.to18.riders;

                                            var to18RiderSub = to18TotalRiders - data.to18Riders;
                                            
                                            // Perth Daily
                                            var pr18DonationSub = numberPr18v1 - numberPr18v2;
                                            var pr17DonationSub = numberPr17v1 - numberPr17v2;
                                            var pr18RfiSub = locals3.getEventTotal.perth.pr18.rfi - data.pr18RFI;
                                            var pr18CrewSub = locals3.getEventTotal.perth.pr18.crews - data.pr18Crews;
                                            var pr18RiderSub = locals3.getEventTotal.perth.pr18.riders - data.pr18Riders;
                                            var pr18RegSub = numberRegPr18v1 - numberRegPr18v2;

                                            // Montreal 2019 Daily
                                            var mo19DonationSub = numberMo19v1 - numberMo19v2;
                                            var mo19RfiSub = locals.getEventTotal.montreal.mo19.rfi - data.mo19RFI;
                                            var mo19RegSub = numberRegMo19v1 - numberRegMo19v2;
                                            var mo19CrewSub = locals.getEventTotal.montreal.mo19.crews - data.mo19Crews;
                                            var mo19RiderSub = locals.getEventTotal.montreal.mo19.riders - data.mo19Riders;
                                            var mo19VRDailySub = locals.getEventTotal.montreal.mo19.virtual - data.mo19VR;

                                            var mo19TotalParticipants = parseFloat(locals.getEventTotal.montreal.mo19.riders) + parseFloat(locals.getEventTotal.montreal.mo19.riders2);
                                            
                                            var mo18DonationSub = numberMo18v1 - numberMo18v2;
                                            var mo17DonationSub = numberMo17v1 - numberMo17v2;
                                            var mo18RfiSub = locals.getEventTotal.montreal.mo18.rfi - data.mo18RFI;
                                            var mo18RegSub = numberRegMo18v1 - numberRegMo18v2;
                                            var mo18CrewSub = locals.getEventTotal.montreal.mo18.crews - data.mo18Crews;
                                            var mo18RiderSub = locals.getEventTotal.montreal.mo18.riders - data.mo18Riders;
                                            var mo18VRDailySub = locals.getEventTotal.montreal.mo18.virtual - data.mo18VR;
                                            
                                            // Alberta 2019 Daily
                                            var ab19DonationSub = numberAb19v1 - numberAb19v2;
                                            var ab19RfiSub = locals.getEventTotal.alberta.ab19.rfi - data.ab19RFI;
                                            var ab19RegSub = numberRegAb19v1 - numberRegAb19v2;
                                            var ab19CrewSub = locals.getEventTotal.alberta.ab19.crews - data.ab19Crews;
                                            var ab19RiderSub = locals.getEventTotal.alberta.ab19.riders - data.ab19Riders;
                                            // var ab19RiderSub = locals.getEventTotal.alberta.ab19.riders - 1042;
                                            var ab19VRDailySub = locals.getEventTotal.alberta.ab19.virtual - data.ab19VR;

                                            var ab19TotalParticipants = parseFloat(locals.getEventTotal.alberta.ab19.riders) + parseFloat(locals.getEventTotal.alberta.ab19.riders2);

                                            var ab18DonationSub = numberAb18v1 - numberAb18v2;
                                            var ab17DonationSub = numberAb17v1 - numberAb17v2;
                                            var ab18RfiSub = locals.getEventTotal.alberta.ab18.rfi - data.ab18RFI;
                                            var ab18CrewSub = locals.getEventTotal.alberta.ab18.crews - data.ab18Crews;
                                            var ab18RiderSub = locals.getEventTotal.alberta.ab18.riders - data.ab18Riders;
                                            var ab18RegSub = numberRegAb18v1 - numberRegAb18v2;
                                            var ab18VRDailySub = locals.getEventTotal.alberta.ab18.virtual - data.ab18VR;
                                            
                                            // Vancouver 2019 Daily
                                            var va19DonationSub = numberVa19v1 - numberVa19v2;
                                            var va19RfiSub = locals.getEventTotal.vancouver.va19.rfi - data.va19RFI;
                                            var va19RegSub = numberRegVa19v1 - numberRegVa19v2;
                                            var va19CrewSub = locals.getEventTotal.vancouver.va19.crews - data.va19Crews;
                                            var va19RiderSub = locals.getEventTotal.vancouver.va19.riders - data.va19Riders;
                                            var va19VRDailySub = locals.getEventTotal.vancouver.va19.virtual - data.va19VR;

                                            var va19TotalParticipants = parseFloat(locals.getEventTotal.vancouver.va19.riders) + parseFloat(locals.getEventTotal.vancouver.va19.riders2);

                                            var va18DonationSub = numberVa18v1 - numberVa18v2;
                                            var va17DonationSub = numberVa17v1 - numberVa17v2;
                                            var va18RfiSub = locals.getEventTotal.vancouver.va18.rfi - data.va18RFI;
                                            var va18CrewSub = locals.getEventTotal.vancouver.va18.crews - data.va18Crews;
                                            var va18RiderSub = locals.getEventTotal.vancouver.va18.riders - data.va18Riders;
                                            var va18RegSub = numberRegVa18v1 - numberRegVa18v2;
                                            var va18VRDailySub = locals.getEventTotal.vancouver.va18.virtual - data.va18VR;

                                            var owto19DonationSub = numberOwTo19v1 - numberOwTo19v2;
                                            var owto19RegSub = numberRegOwTo19v1 - numberRegOwTo19v2;
                                            var owto19RfiSub = locals2.getEventTotal.toronto.to19.rfi;
                                            var owto19CrewsDailySub = locals2.getEventTotal.toronto.to19.crews;
                                            var owto19TotalWalkers = parseFloat(owTo19NightWalkers) + parseFloat(owTo1925kmWalkers) + parseFloat(owTo192day);
                                            var owto19VRDailySub = locals.getEventTotal.toronto.to19.virtual - data.owTo19VR;
                                            var owto19WalkersDailySub = owto19TotalWalkers - data.owTo19Walkers;
                                            var owTo1925kmWalkersDaily = locals2.getEventTotal.toronto.to19.Wlkr25km - data.owTo1925kmWalkers;
                                            var owTo1940kmWalkersDaily = locals2.getEventTotal.toronto.to19.Wlkr40km - data.owTo1940kmWalkers;
                                            var owTo19NightWalkersDaily = locals2.getEventTotal.toronto.to19.nightWlk - data.owTo19NightWalkers;
                                            var owTo192dayDaily = locals2.getEventTotal.toronto.to19.twoDayWlk - data.owTo192day;

                                            var owto18DonationSub = numberOwTo18v1 - numberOwTo18v2;
                                            var owto17DonationSub = numberOwTo17v1 - numberOwTo17v2;
                                            var owto18RfiSub = locals2.getEventTotal.toronto.to18.rfi - data.owTo18RFI;
                                            var owto18RegSub = numberRegOwTo18v1 - numberRegOwTo18v2;
                                            var owTo182dayDaily = locals2.getEventTotal.toronto.to18.Wlkr15km - data.owTo182day;
                                            var owTo1815kmWalkersDaily = locals2.getEventTotal.toronto.to18.Wlkr15km - data.owTo1815kmWalkers;
                                            var owTo1825kmWalkersDaily = locals2.getEventTotal.toronto.to18.Wlkr25km - data.owTo1825kmWalkers;
                                            var owTo1840kmWalkersDaily = locals2.getEventTotal.toronto.to18.Wlkr40km - data.owTo1840kmWalkers;
                                            var owTo18NightWalkersDaily = locals2.getEventTotal.toronto.to18.nightWlk - data.owTo18NightWalkers;
                                            var owto18TotalWalkers = parseFloat(owTo18NightWalkers) + parseFloat(owTo1815kmWalkers) + parseFloat(owTo1825kmWalkers) + parseFloat(owTo1840kmWalkers) + parseFloat(owTo182day);
                                            var owto18CrewsDailySub = locals2.getEventTotal.toronto.to18.crews - data.owTo18Crews;
                                            var owto18WalkersDailySub = owto18TotalWalkers - data.owTo18Walkers;

                                            var br18DonationSub = numberBr18v1 - numberBr18v2;
                                            var br18RegSub = numberBr18v1 - numberBr18v2;
                                            var br18RiderSub = locals4.getEventTotal.brisbane.br18.riders - data.br18Riders;
                                            var br18WalkerSub = locals4.getEventTotal.brisbane.br18.walkers - data.br18Walkers;

                                            var ml18DonationSub = numberMl18v1 - numberMl18v2;
                                            var ml17DonationSub = numberMl17v1 - numberMl17v2;
                                            var ml18RegSub = numberMl18v1 - numberMl18v2;
                                            var ml18RiderSub = locals4.getEventTotal.melbourne.ml18.riders - data.ml18Riders;
                                            var ml18WalkerSub = locals4.getEventTotal.melbourne.ml18.walkers - data.ml18Walkers;

                                            // Add Dollar Sign back into Data
                                            var newTo19DonDaily = '$' + to19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newToDonDaily = '$' + to18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newTo17DonDaily = '$' + to17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newToRegDaily = '$' + to18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
                                            
                                            var newPrDonDaily = '$' + pr18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newPr17DonDaily = '$' + pr17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newPrRegDaily = '$' + pr18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                                            var newMo19DonDaily = '$' + mo19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMo19RegDaily = '$' + mo19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMo18DonDaily = '$' + mo18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMo17DonDaily = '$' + mo17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMoRegDaily = '$' + mo18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                                            var newAb19DonDaily = '$' + ab19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAb19RegDaily = '$' + ab19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");                                            
                                            var newAbDonDaily = '$' + ab18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAb17DonDaily = '$' + ab17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAbRegDaily = '$' + ab18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            
                                            var newVa19DonDaily = '$' + va19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");   
                                            var newVa19RegDaily = '$' + va19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVaDonDaily = '$' + va18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVa17DonDaily = '$' + va17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVaRegDaily = '$' + va18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            
                                            var newOwTo19DonDaily = '$' + owto19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwTo19RegDaily = '$' + owto19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwToDonDaily = '$' + owto18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwTo17DonDaily = '$' + owto17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwToRegDaily = '$' + owto18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                                            var newBrDonDaily = '$' + br18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newBrRegDaily = '$' + br18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                                            var newMlDonDaily = '$' + ml18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMl17DonDaily = '$' + ml17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMlRegDaily = '$' + ml18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


                                            var allData = new ApiData({
                                                updated: moment().format('L'),
                                                nightly: 'true',
                                                to19Donations: locals.getEventTotal.toronto.to19.totalDonation,
                                                to19RegFee: locals.getEventTotal.toronto.to19.regFee,
                                                to19Crews: locals.getEventTotal.toronto.to19.crews,
                                                to19RFI: locals.getEventTotal.toronto.to19.rfi,
                                                to19Riders: locals.getEventTotal.toronto.to19.riders,
                                                to19VR: locals.getEventTotal.toronto.to19.virtual,
                                                to19Rider2: locals.getEventTotal.toronto.to19.riders2,
                                                to19OneDay: locals.getEventTotal.toronto.to19.oneday,
                                                to19OneDay2: locals.getEventTotal.toronto.to19.oneday2,
                                                to19TotalParticipants: to19TotalParticipants,

                                                to18Donations: locals.getEventTotal.toronto.to18.totalDonation,
                                                to18RegFee: locals.getEventTotal.toronto.to18.regFee,
                                                to18Crews: locals.getEventTotal.toronto.to18.crews,
                                                to18RFI: locals.getEventTotal.toronto.to18.rfi,
                                                to18Riders: locals.getEventTotal.toronto.to18.riders,
                                                to18VR: locals.getEventTotal.toronto.to18.virtual,
                                                to18Rider2: locals.getEventTotal.toronto.to18.riders2,
                                                to18OneDay: locals.getEventTotal.toronto.to18.oneday,
                                                to18OneDay2: locals.getEventTotal.toronto.to18.oneday2,
                                                to18TotalParticipants: to18TotalParticipants,
                                                
                                                to17Donations: locals.getEventTotal.toronto.to17.totalDonation,
                                                to17RegFee: locals.getEventTotal.toronto.to17.regFee,
                                                to17Crews: locals.getEventTotal.toronto.to17.crews,
                                                to17RFI: locals.getEventTotal.toronto.to17.rfi,
                                                to17Riders: locals.getEventTotal.toronto.to17.riders,
                                                to17VR: locals.getEventTotal.toronto.to17.virtual,

                                                mo19Donations: locals.getEventTotal.montreal.mo19.totalDonation,
                                                mo19RegFee: locals.getEventTotal.montreal.mo19.regFee,
                                                mo19Crews: locals.getEventTotal.montreal.mo19.crews,
                                                mo19RFI: locals.getEventTotal.montreal.mo19.rfi,
                                                mo19Riders: locals.getEventTotal.montreal.mo19.riders,
                                                mo19VR: locals.getEventTotal.montreal.mo19.virtual,
                                                mo19Rider2: locals.getEventTotal.montreal.mo19.riders2,
                                                mo19OneDay: locals.getEventTotal.montreal.mo19.oneday,
                                                mo19OneDay2: locals.getEventTotal.montreal.mo19.oneday2,
                                                mo19TotalParticipants: mo19TotalParticipants,
                                                
                                                mo18Donations: locals.getEventTotal.montreal.mo18.totalDonation,
                                                mo18RegFee: locals.getEventTotal.montreal.mo18.regFee,
                                                mo18Crews: locals.getEventTotal.montreal.mo18.crews,
                                                mo18RFI: locals.getEventTotal.montreal.mo18.rfi,
                                                mo18Riders: locals.getEventTotal.montreal.mo18.riders,
                                                mo18VR: locals.getEventTotal.montreal.mo18.virtual,
                                                
                                                mo17Donations: locals.getEventTotal.montreal.mo17.totalDonation,
                                                mo17RegFee: locals.getEventTotal.montreal.mo17.regFee,
                                                mo17Crews: locals.getEventTotal.montreal.mo17.crews,
                                                mo17RFI: locals.getEventTotal.montreal.mo17.rfi,
                                                mo17Riders: locals.getEventTotal.montreal.mo17.riders,
                                                mo17VR: locals.getEventTotal.montreal.mo17.virtual,
                                                
                                                ab19Donations: locals.getEventTotal.alberta.ab19.totalDonation,
                                                ab19RegFee: locals.getEventTotal.alberta.ab19.regFee,
                                                ab19Crews: locals.getEventTotal.alberta.ab19.crews,
                                                ab19RFI: locals.getEventTotal.alberta.ab19.rfi,
                                                ab19Riders: locals.getEventTotal.alberta.ab19.riders,
                                                ab19VR: locals.getEventTotal.alberta.ab19.virtual,
                                                ab19Rider2: locals.getEventTotal.alberta.ab19.riders2,
                                                ab19OneDay: locals.getEventTotal.alberta.ab19.oneday,
                                                ab19OneDay2: locals.getEventTotal.alberta.ab19.oneday2,
                                                ab19TotalParticipants: ab19TotalParticipants,

                                                ab18Donations: locals.getEventTotal.alberta.ab18.totalDonation,
                                                ab18RegFee: locals.getEventTotal.alberta.ab18.regFee,
                                                ab18Crews: locals.getEventTotal.alberta.ab18.crews,
                                                ab18RFI: locals.getEventTotal.alberta.ab18.rfi,
                                                ab18Riders: locals.getEventTotal.alberta.ab18.riders,
                                                ab18VR: locals.getEventTotal.alberta.ab18.virtual,
                                                
                                                ab17Donations: locals.getEventTotal.alberta.ab17.totalDonation,
                                                ab17RegFee: locals.getEventTotal.alberta.ab17.regFee,
                                                ab17Crews: locals.getEventTotal.alberta.ab17.crews,
                                                ab17RFI: locals.getEventTotal.alberta.ab17.rfi,
                                                ab17Riders: locals.getEventTotal.alberta.ab17.riders,
                                                ab17VR: locals.getEventTotal.alberta.ab17.virtual,
                                                
                                                va19Donations: locals.getEventTotal.vancouver.va19.totalDonation,
                                                va19RegFee: locals.getEventTotal.vancouver.va19.regFee,
                                                va19Crews: locals.getEventTotal.vancouver.va19.crews,
                                                va19RFI: locals.getEventTotal.vancouver.va19.rfi,
                                                va19Riders: locals.getEventTotal.vancouver.va19.riders,
                                                va19VR: locals.getEventTotal.vancouver.va19.virtual,
                                                va19Rider2: locals.getEventTotal.vancouver.va19.riders2,
                                                va19OneDay: locals.getEventTotal.vancouver.va19.oneday,
                                                va19OneDay2: locals.getEventTotal.vancouver.va19.oneday2,
                                                va19TotalParticipants: va19TotalParticipants,

                                                va18Donations: locals.getEventTotal.vancouver.va18.totalDonation,
                                                va18RegFee: locals.getEventTotal.vancouver.va18.regFee,
                                                va18Crews: locals.getEventTotal.vancouver.va18.crews,
                                                va18RFI: locals.getEventTotal.vancouver.va18.rfi,
                                                va18Riders: locals.getEventTotal.vancouver.va18.riders,
                                                va18VR: locals.getEventTotal.vancouver.va18.virtual,
                                                
                                                va17Donations: locals.getEventTotal.vancouver.va17.totalDonation,
                                                va17RegFee: locals.getEventTotal.vancouver.va17.regFee,
                                                va17Crews: locals.getEventTotal.vancouver.va17.crews,
                                                va17RFI: locals.getEventTotal.vancouver.va17.rfi,
                                                va17Riders: locals.getEventTotal.vancouver.va17.riders,
                                                va17VR: locals.getEventTotal.vancouver.va17.virtual,
                                                
                                                owTo19Donations: locals2.getEventTotal.toronto.to19.totalDonation,
                                                owTo19RegFee: locals2.getEventTotal.toronto.to19.regFee,
                                                owTo19RFI: locals2.getEventTotal.toronto.to19.rfi,
                                                owTo19Crews: locals2.getEventTotal.toronto.to19.crews,
                                                owTo19VR: locals2.getEventTotal.toronto.to19.virtual,
                                                owTo19Walkers: owto19TotalWalkers,
                                                owTo1925kmWalkers: owTo1925kmWalkers,
                                                owTo1940kmWalkers: owTo1940kmWalkers,
                                                owTo19NightWalkers: owTo19NightWalkers,
                                                owTo192day: owTo192day,

                                                owTo18Donations: locals2.getEventTotal.toronto.to18.totalDonation,
                                                owTo18RegFee: locals2.getEventTotal.toronto.to18.regFee,
                                                owTo18Crews: locals2.getEventTotal.toronto.to18.crews,
                                                owTo18Walkers: owto18TotalWalkers,
                                                owTo18NightWalkers: owTo18NightWalkers,
                                                owTo182day: owTo182day,
                                                owTo1815kmWalkers: owTo1815kmWalkers,
                                                owTo1825kmWalkers: owTo1825kmWalkers,
                                                owTo1840kmWalkers: owTo1840kmWalkers,
                                                owTo18RFI: locals2.getEventTotal.toronto.to18.rfi,
                                                
                                                owTo17Donations: locals2.getEventTotal.toronto.to17.totalDonation,
                                                owTo17RegFee: locals2.getEventTotal.toronto.to17.regFee,
                                                owTo17Crews: locals2.getEventTotal.toronto.to17.crews,
                                                owTo17Walkers: locals2.getEventTotal.toronto.to17.walkers,
                                                owTo1715kmWalkers: owTo1715kmWalkers,
                                                owTo1725kmWalkers: owTo1725kmWalkers,
                                                owTo1740kmWalkers: owTo1740kmWalkers,
                                                owTo17RFI: locals2.getEventTotal.toronto.to17.rfi,
                                                
                                                pr18Donations: locals3.getEventTotal.perth.pr18.totalDonation,
                                                pr18RegFee: locals3.getEventTotal.perth.pr18.regFee,
                                                pr18Crews: locals3.getEventTotal.perth.pr18.crews,
                                                pr18RFI: locals3.getEventTotal.perth.pr18.rfi,
                                                pr18Riders: locals3.getEventTotal.perth.pr18.riders,
                                                
                                                pr17Donations: locals3.getEventTotal.perth.pr17.totalDonation,
                                                pr17RegFee: locals3.getEventTotal.perth.pr17.regFee,
                                                pr17Crews: locals3.getEventTotal.perth.pr17.crews,
                                                pr17RFI: locals3.getEventTotal.perth.pr17.rfi,
                                                pr17Riders: locals3.getEventTotal.perth.pr17.riders,

                                                br18Donations: locals4.getEventTotal.brisbane.br18.totalDonation,
                                                br18RegFee: locals4.getEventTotal.brisbane.br18.regFee,
                                                br18Walkers: locals4.getEventTotal.brisbane.br18.walkers,
                                                br18Riders: locals4.getEventTotal.brisbane.br18.riders,

                                                br17Donations: locals4.getEventTotal.brisbane.br17.totalDonation,
                                                br17RegFee: locals4.getEventTotal.brisbane.br17.regFee,
                                                br17Walkers: locals4.getEventTotal.brisbane.br17.walkers,
                                                br17Riders: locals4.getEventTotal.brisbane.br17.riders,
                                                
                                                ml18Donations: locals4.getEventTotal.melbourne.ml18.totalDonation,
                                                ml18RegFee: locals4.getEventTotal.melbourne.ml18.regFee,
                                                ml18Walkers: locals4.getEventTotal.melbourne.ml18.walkers,
                                                ml18Riders: locals4.getEventTotal.melbourne.ml18.riders,
                                                
                                                ml17Donations: locals4.getEventTotal.melbourne.ml17.totalDonation,
                                                ml17RegFee: locals4.getEventTotal.melbourne.ml17.regFee,
                                                ml17Walkers: locals4.getEventTotal.melbourne.ml17.walkers,
                                                ml17Riders: locals4.getEventTotal.melbourne.ml17.riders,

                                                to19DonDaily: newTo19DonDaily,
                                                to19RegFeeDaily: newToRegDaily,
                                                to19RFIDaily: to19RfiSub,
                                                to19CrewDaily: to19CrewSub,
                                                to19RidersDaily: to19RiderSub,
                                                to19VRDaily: to19VRDailySub,
                                                to19Riders2Daily: to19Riders2Daily,
                                                to19OneDayDaily: to19OneDayDaily,
                                                to19OneDayDaily2: to19OneDayDaily2,
                                                
                                                to18DonDaily: newToDonDaily,
                                                to18RegFeeDaily: newToRegDaily,
                                                to18RFIDaily: to18RfiSub,
                                                to18CrewDaily: to18CrewSub,
                                                to18RidersDaily: to18RiderSub,
                                                to18VRDaily: to18VRDailySub,
                                                to18Riders2Daily: to18Riders2Daily,
                                                to18OneDayDaily: to18OneDayDaily,
                                                to18OneDayDaily2: to18OneDayDaily2,
                                                
                                                to17DonDaily: newTo17DonDaily,
                                                
                                                pr18DonDaily: newPrDonDaily,
                                                pr18RegFeeDaily: newPrRegDaily,
                                                pr18RFIDaily: pr18RfiSub,
                                                pr18CrewDaily: pr18CrewSub,
                                                pr18RidersDaily: pr18RiderSub,
                                
                                                pr17DonDaily: newPr17DonDaily,

                                                mo19DonDaily: newMo19DonDaily,
                                                mo19RegFeeDaily: newMo19RegDaily,
                                                mo19RFIDaily: mo19RfiSub,
                                                mo19CrewDaily: mo19CrewSub,
                                                mo19RidersDaily: mo19RiderSub,
                                                mo19VRDaily: mo19VRDailySub,
                                                
                                                mo18DonDaily: newMo18DonDaily,
                                                mo18RegFeeDaily: newMoRegDaily,
                                                mo18RFIDaily: mo18RfiSub,
                                                mo18CrewDaily: mo18CrewSub,
                                                mo18RidersDaily: mo18RiderSub,
                                                mo18VRDaily: mo18VRDailySub,

                                                mo17DonDaily: newMo17DonDaily,
                                                
                                                ab19DonDaily: newAb19DonDaily,
                                                ab19RegFeeDaily: newAb19RegDaily,
                                                ab19RFIDaily: ab19RfiSub,
                                                ab19CrewDaily: ab19CrewSub,
                                                ab19RidersDaily: ab19RiderSub,
                                                ab19VRDaily: ab19VRDailySub,

                                                ab18DonDaily: newAbDonDaily,
                                                ab18RegFeeDaily: newAbRegDaily,
                                                ab18RFIDaily: ab18RfiSub,
                                                ab18CrewDaily: ab18CrewSub,
                                                ab18RidersDaily: ab18RiderSub,
                                                ab18VRDaily: ab18VRDailySub,

                                                ab17DonDaily: newAb17DonDaily,
                                                
                                                va19DonDaily: newVa19DonDaily,
                                                va19RegFeeDaily: newVa19RegDaily,
                                                va19RFIDaily: va19RfiSub,
                                                va19CrewDaily: va19CrewSub,
                                                va19RidersDaily: va19RiderSub,
                                                va19VRDaily: va19VRDailySub,

                                                va18DonDaily: newVaDonDaily,
                                                va18RegFeeDaily: newVaRegDaily,
                                                va18RFIDaily: va18RfiSub,
                                                va18CrewDaily: va18CrewSub,
                                                va18RidersDaily: va18RiderSub,
                                                va18VRDaily: va18VRDailySub,
                                                
                                                va17DonDaily: newVa17DonDaily,
                                                
                                                owto19DonDaily: newOwTo19DonDaily,
                                                owto19RegDaily: newOwTo19RegDaily,
                                                owto19RFIDaily: owto19RfiSub,
                                                owto19CrewsDaily: owto19CrewsDailySub,
                                                owTo19VRDaily: owto19VRDailySub,
                                                owto19WalkersDaily: owto19WalkersDailySub,
                                                owto1925kmWalkersDaily: owTo1925kmWalkersDaily,
                                                owto1940kmWalkersDaily: owTo1940kmWalkersDaily,
                                                owto19NightWalkersDaily: owTo19NightWalkersDaily,
                                                owto192dayDaily: owTo192dayDaily,

                                                owto18DonDaily: newOwToDonDaily,
                                                owto18RegDaily: newOwToRegDaily,
                                                owto18RFIDaily: owto18RfiSub,
                                                owto18WalkersDaily: owto18WalkersDailySub,
                                                owto182dayDaily: owTo182dayDaily,
                                                owto18NightWalkersDaily: owTo18NightWalkersDaily,
                                                owto1815kmWalkersDaily: owTo1815kmWalkersDaily,
                                                owto1825kmWalkersDaily: owTo1825kmWalkersDaily,
                                                owto1840kmWalkersDaily: owTo1840kmWalkersDaily,
                                                owto18CrewsDaily: owto18CrewsDailySub,

                                                owto17DonDaily: newOwTo17DonDaily,

                                                br18DonDaily: newBrDonDaily,
                                                br18RegDaily: newBrRegDaily,
                                                br18RidersDaily: br18RiderSub,
                                                br18WalkersDaily: br18WalkerSub,
                                                
                                                ml18DonDaily: newMlDonDaily,
                                                ml18RegDaily: newMlRegDaily,
                                                ml18RidersDaily: ml18RiderSub,
                                                ml18WalkersDaily: ml18WalkerSub,

                                                ml17DonDaily: newMl17DonDaily
                                            });
                                            allData.save(function(error) {
                                                console.log("Data has been saved to MongoDB!");
                                                process.exit();
                                                if (error) {
                                                    console.error(error);
                                                }
                                            });
                                    }).sort({"_id": -1});
                                }
                            });

                        }
                    });
                }
            });
        } else {
            console.log('there has been an error');
        }
    });

});


