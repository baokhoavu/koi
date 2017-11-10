var mongoose = require('mongoose');
const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var express = require('express');
var router = express.Router();
var ApiData = require('../models/apidata');

mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

var db = mongoose.connection;

router.get('/', function (req, res, next) {
    res.render('index');
}); 

router.get('/alltables', function (req, res, next) {
    
    const apiURL = 'http://www.conquercancer.ca/site/PageServer?pagename=2018_api_testing&pgwrap=n';
    fixieRequest(apiURL, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            var locals = JSON.parse(body);
            
            const apiOneWalk = 'http://www.onewalk.ca/site/PageServer?pagename=api_data&pgwrap=n';
            fixieRequest(apiOneWalk, function(err, response, body) {
                if (!err && response.statusCode == 200) {
                    var locals2 = JSON.parse(body);
                    
                    const apiRidePerth = 'http://www.conquercancer.org.au/site/PageServer?pagename=api_data&pgwrap=n';
                    fixieRequest(apiRidePerth, function(err, response, body) {
                        if (!err && response.statusCode == 200) {
                            var locals3 = JSON.parse(body);
                            
                            const apiOneDay = 'http://participate.theoneday.org.au/site/PageServer?pagename=api_data&pgwrap=n';
                            fixieRequest(apiOneDay, function(err, response, body) {
                                if (!err && response.statusCode == 200) {
                                var locals4 = JSON.parse(body);
                                    
                                    ApiData.findOne(  
                                        (err, data) => {
                                            if (err) {
                                                console.log('There was an error getting data! Check below:')
                                                console.log(err);
                                            }
                                            if (data) {  // Search could come back empty, so we should protect against sending nothing back
                                    //            res.status(200).send(data);
                                            // Set Variables for Real Time vs Static Event Data
                                            
                                            // =========================== Ride Toronto 2018 =========================== //
                                            var removeDollarTo18v1 = locals.getEventTotal.toronto.to18.totalDonation;
                                            var removeDollarTo18v2 = data.to18Donations;
                                            var removeRegTo18v1 = locals.getEventTotal.toronto.to18.regFee;
                                            var removeRegTo18v2 = data.to18RegFee;
                                            // =========================== Ride Toronto 2017 =========================== //
                                            var removeDollarTo17v1 = locals.getEventTotal.toronto.to17.totalDonation;
                                            var removeDollarTo17v2 = data.to17Donations;
                                                
                                            // =========================== Ride Montreal 2018 =========================== //
                                            var removeDollarMo18v1 = locals.getEventTotal.montreal.mo18.totalDonation;
                                            var removeDollarMo18v2 = data.mo18Donations;
                                            var removeRegMo18v1 = locals.getEventTotal.montreal.mo18.regFee;
                                            var removeRegMo18v2 = data.mo18RegFee;
                                            // =========================== Ride Montreal 2018 =========================== //
                                            var removeDollarMo17v1 = locals.getEventTotal.montreal.mo17.totalDonation;
                                            var removeDollarMo17v2 = data.mo17Donations;
                                            
                                            // =========================== Ride Alberta 2018 =========================== //
                                            var removeDollarAb18v1 = locals.getEventTotal.alberta.ab18.totalDonation;
                                            var removeDollarAb18v2 = data.ab18Donations;
                                            var removeRegAb18v1 = locals.getEventTotal.alberta.ab18.regFee;
                                            var removeRegAb18v2 = data.ab18RegFee;
                                            // =========================== Ride Alberta 2017 =========================== //
                                            var removeDollarAb17v1 = locals.getEventTotal.alberta.ab17.totalDonation;
                                            var removeDollarAb17v2 = data.ab17Donations;
                                            
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
                                            // =========================== OneWalk Toronto 2018 =========================== //
                                            var removeDollarOwTo17v1 = locals2.getEventTotal.toronto.to17.totalDonation;
                                            var removeDollarOwTo17v2 = data.owTo17Donations;
                                            var owTo1715kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr15km;
                                            var owTo1725kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr25km;
                                            var owTo1740kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr40km;
                                            
                                            // =========================== OneDay Melbourne 2018 =========================== //
                                            var removeDollarMl18v1 = locals4.getEventTotal.melbourne.ml18.totalDonation;
                                            var removeDollarMl18v2 = data.ml18Donations;
                                            var removeRegMl18v1 = locals4.getEventTotal.melbourne.ml18.regFee;
                                            var removeRegMl18v2 = data.ml18RegFee;
                                            // =========================== OneDay Melbourne 2017 =========================== //
                                            var removeDollarMl17v1 = locals4.getEventTotal.melbourne.ml17.totalDonation;
                                            var removeDollarMl17v2 = data.ml17Donations;
                                            
                                            // Remove Dollar Sign from Data Brought In    
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
                                            
                                            var numberMo18v1 = Number(removeDollarMo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMo18v2 = Number(removeDollarMo18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberMo17v1 = Number(removeDollarMo17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMo17v2 = Number(removeDollarMo17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo18v1 = Number(removeRegMo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegMo18v2 = Number(removeRegMo18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberAb18v1 = Number(removeDollarAb18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberAb18v2 = Number(removeDollarAb18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberAb17v1 = Number(removeDollarAb17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberAb17v2 = Number(removeDollarAb17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb18v1 = Number(removeRegAb18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegAb18v2 = Number(removeRegAb18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberVa18v1 = Number(removeDollarVa18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberVa18v2 = Number(removeDollarVa18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberVa17v1 = Number(removeDollarVa17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberVa17v2 = Number(removeDollarVa17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa18v1 = Number(removeRegVa18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegVa18v2 = Number(removeRegVa18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberOwTo18v1 = Number(removeDollarOwTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo18v2 = Number(removeDollarOwTo18v2.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo17v1 = Number(removeDollarOwTo17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberOwTo17v2 = Number(removeDollarOwTo17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo18v1 = Number(removeRegOwTo18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberRegOwTo18v2 = Number(removeRegOwTo18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            var numberMl18v1 = Number(removeDollarMl18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v2 = Number(removeDollarMl18v2.replace(/[^0-9\.-]+/g,"")); 
                                            var numberMl17v1 = Number(removeDollarMl17v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl17v2 = Number(removeDollarMl17v2.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v1 = Number(removeRegMl18v1.replace(/[^0-9\.-]+/g,""));
                                            var numberMl18v2 = Number(removeRegMl18v2.replace(/[^0-9\.-]+/g,""));
                                            
                                            // Subtract Real Time Data vs Static Data        
                                            var to18DonationSub = numberTo18v1 - numberTo18v2;
                                            var to17DonationSub = numberTo17v1 - numberTo17v2;
                                            var to18RfiSub = locals.getEventTotal.toronto.to18.rfi - data.to18RFI;
                                            var to18CrewSub = locals.getEventTotal.toronto.to18.crews - data.to18Crews;
                                            var to18RiderSub = locals.getEventTotal.toronto.to18.riders - data.to18Riders;
                                            var to18RegSub = numberRegTo18v1 - numberRegTo18v2;
                                            
                                            var pr18DonationSub = numberPr18v1 - numberPr18v2;
                                            var pr17DonationSub = numberPr17v1 - numberPr17v2;
                                            var pr18RfiSub = locals3.getEventTotal.perth.pr18.rfi - data.pr18RFI;
                                            var pr18RegSub = numberRegPr18v1 - numberRegPr18v2;
                                            
                                            var mo18DonationSub = numberMo18v1 - numberMo18v2;
                                            var mo17DonationSub = numberMo17v1 - numberMo17v2;
                                            var mo18RfiSub = locals.getEventTotal.montreal.mo18.rfi - data.mo18RFI;
                                            var mo18RegSub = numberRegMo18v1 - numberRegMo18v2;
                                            
                                            var ab18DonationSub = numberAb18v1 - numberAb18v2;
                                            var ab17DonationSub = numberAb17v1 - numberAb17v2;
                                            var ab18RfiSub = locals.getEventTotal.alberta.ab18.rfi - data.ab18RFI;
                                            var ab18RegSub = numberRegAb18v1 - numberRegAb18v2;
                                                
                                            var va18DonationSub = numberVa18v1 - numberVa18v2;
                                            var va17DonationSub = numberVa17v1 - numberVa17v2;
                                            var va18RfiSub = locals.getEventTotal.vancouver.va18.rfi - data.va18RFI;
                                            var va18RegSub = numberRegVa18v1 - numberRegVa18v2;
                                            
                                            var owto18DonationSub = numberOwTo18v1 - numberOwTo18v2;
                                            var owto17DonationSub = numberOwTo17v1 - numberOwTo17v2;
                                            var owto18RfiSub = locals2.getEventTotal.toronto.to18.rfi - data.owTo18RFI;
                                            var owto18RegSub = numberRegOwTo18v1 - numberRegOwTo18v2;
                                            var owto18TotalWalkers = parseFloat(owTo18NightWalkers) + parseFloat(owTo1815kmWalkers) + parseFloat(owTo1825kmWalkers) + parseFloat(owTo1840kmWalkers);
                                            
                                            var ml18DonationSub = numberMl18v1 - numberMl18v2;
                                            var ml17DonationSub = numberMl17v1 - numberMl17v2;
                                            var ml18RegSub = numberMl18v1 - numberMl18v2;
                                            
                                            // Add Dollar Sign back into Data    
                                            var newToDonDaily = '$' + to18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newTo17DonDaily = '$' + to17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newToRegDaily = '$' + to18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
                                            var newPrDonDaily = '$' + pr18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newPr17DonDaily = '$' + pr17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newPrRegDaily = '$' + pr18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMoDonDaily = '$' + mo18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMo17DonDaily = '$' + mo17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMoRegDaily = '$' + mo18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAbDonDaily = '$' + ab18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAb17DonDaily = '$' + ab17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newAbRegDaily = '$' + ab18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVaDonDaily = '$' + va18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVa17DonDaily = '$' + va17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newVaRegDaily = '$' + va18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwToDonDaily = '$' + owto18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwTo17DonDaily = '$' + owto17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newOwToRegDaily = '$' + owto18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMlDonDaily = '$' + ml18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMl17DonDaily = '$' + ml17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                            var newMlRegDaily = '$' + ml18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                                
                                            res.render('data', {to18Donations: locals.getEventTotal.toronto.to18.totalDonation,
                                                to18RegFee: locals.getEventTotal.toronto.to18.regFee,
                                                to18Crews: locals.getEventTotal.toronto.to18.crews,
                                                to18RFI: locals.getEventTotal.toronto.to18.rfi,
                                                to18Riders: locals.getEventTotal.toronto.to18.riders,
                                                to17Donations: locals.getEventTotal.toronto.to17.totalDonation,
                                                to17RegFee: locals.getEventTotal.toronto.to17.regFee,
                                                to17Crews: locals.getEventTotal.toronto.to17.crews,
                                                to17RFI: locals.getEventTotal.toronto.to17.rfi,
                                                to17Riders: locals.getEventTotal.toronto.to17.riders, 
                                                mo18Donations: locals.getEventTotal.montreal.mo18.totalDonation,
                                                mo18RegFee: locals.getEventTotal.montreal.mo18.regFee,
                                                mo18Crews: locals.getEventTotal.montreal.mo18.crews,
                                                mo18RFI: locals.getEventTotal.montreal.mo18.rfi,
                                                mo18Riders: locals.getEventTotal.montreal.mo18.riders,
                                                mo17Donations: locals.getEventTotal.montreal.mo17.totalDonation,
                                                mo17RegFee: locals.getEventTotal.montreal.mo17.regFee,
                                                mo17Crews: locals.getEventTotal.montreal.mo17.crews,
                                                mo17RFI: locals.getEventTotal.montreal.mo17.rfi,
                                                mo17Riders: locals.getEventTotal.montreal.mo17.riders,
                                                ab18Donations: locals.getEventTotal.alberta.ab18.totalDonation,
                                                ab18RegFee: locals.getEventTotal.alberta.ab18.regFee,
                                                ab18Crews: locals.getEventTotal.alberta.ab18.crews,
                                                ab18RFI: locals.getEventTotal.alberta.ab18.rfi,
                                                ab18Riders: locals.getEventTotal.alberta.ab18.riders,
                                                ab17Donations: locals.getEventTotal.alberta.ab17.totalDonation,
                                                ab17RegFee: locals.getEventTotal.alberta.ab17.regFee,
                                                ab17Crews: locals.getEventTotal.alberta.ab17.crews,
                                                ab17RFI: locals.getEventTotal.alberta.ab17.rfi,
                                                ab17Riders: locals.getEventTotal.alberta.ab17.riders,
                                                va18Donations: locals.getEventTotal.vancouver.va18.totalDonation,
                                                va18RegFee: locals.getEventTotal.vancouver.va18.regFee,
                                                va18Crews: locals.getEventTotal.vancouver.va18.crews,
                                                va18RFI: locals.getEventTotal.vancouver.va18.rfi,
                                                va18Riders: locals.getEventTotal.vancouver.va18.riders,
                                                va17Donations: locals.getEventTotal.vancouver.va17.totalDonation,
                                                va17RegFee: locals.getEventTotal.vancouver.va17.regFee,
                                                va17Crews: locals.getEventTotal.vancouver.va17.crews,
                                                va17RFI: locals.getEventTotal.vancouver.va17.rfi,
                                                va17Riders: locals.getEventTotal.vancouver.va17.riders,
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
                                                ml18Donations: locals4.getEventTotal.melbourne.ml18.totalDonation,
                                                ml18RegFee: locals4.getEventTotal.melbourne.ml18.regFee,
                                                ml18Walkers: locals4.getEventTotal.melbourne.ml18.walkers,
                                                ml18Riders: locals4.getEventTotal.melbourne.ml18.riders,
                                                ml17Donations: locals4.getEventTotal.melbourne.ml17.totalDonation,
                                                ml17RegFee: locals4.getEventTotal.melbourne.ml17.regFee,
                                                ml17Walkers: locals4.getEventTotal.melbourne.ml17.walkers,
                                                ml17Riders: locals4.getEventTotal.melbourne.ml17.riders,
                                                to18DonDaily: newToDonDaily,
                                                to18RegFeeDaily: newToRegDaily,
                                                to18RFIDaily: to18RfiSub,
                                                to18CrewDaily: to18CrewSub,
                                                to18RiderDaily: to18RiderSub,
                                                to17DonDaily: newTo17DonDaily,
                                                pr18DonDaily: newPrDonDaily,
                                                pr18RegFeeDaily: newPrRegDaily,
                                                pr18RFIDaily: pr18RfiSub,
                                                pr17DonDaily: newPr17DonDaily,
                                                mo18DonDaily: newMoDonDaily,
                                                mo17DonDaily: newMo17DonDaily,
                                                mo18RegFeeDaily: newMoRegDaily,
                                                mo18RFIDaily: mo18RfiSub,
                                                ab18DonDaily: newAbDonDaily,
                                                ab17DonDaily: newAb17DonDaily,
                                                ab18RegFeeDaily: newAbRegDaily,
                                                ab18RFIDaily: ab18RfiSub,
                                                va18DonDaily: newVaDonDaily,
                                                va17DonDaily: newVa17DonDaily,
                                                va18RegFeeDaily: newVaRegDaily,
                                                va18RFIDaily: va18RfiSub,
                                                owto18DonDaily: newOwToDonDaily,
                                                owto17DonDaily: newOwTo17DonDaily,
                                                owto18RegDaily: newOwToRegDaily,
                                                owto18RFIDaily: owto18RfiSub,
                                                ml18DonDaily: newMlDonDaily,
                                                ml17DonDaily: newMl17DonDaily,
                                                ml18RegDaily: newMlRegDaily
                                                
                                            });
                                                
                                            } else {  // In case no data was found with the given query
                                    //            res.status(200).send("No kitten found");
                                            }
                                    }).sort({"_id": -1});
                                }
                            });

                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
