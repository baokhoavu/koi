var mongoose = require('mongoose');
var request = require('request');
// var fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var express = require('express');
var moment = require('moment');
var router = express.Router();
var data = require('../models/apidata');

mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');
var mongodbUri = 'mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw';

var promise = mongoose.connect(mongodbUri, {
  useMongoClient: true,
  /* other options */
});

promise.then(function(db) { });

// var db = mongoose.connection;

router.get('/data', function(req, res) { 
	console.log('Requesting data...');
	// Find data from yesterday with MomentJS (subtract 1 from Today's date)
	data.find({"updated": moment().subtract(1, 'days').format('L')})
		// .sort({"_id": -1})
		.exec(function(err, yesterday) {
			if (err) {
				console.log('Error getting data..');
			} 
			if(yesterday.length < 1){
				console.log('Error getting data... It does not exists');
				//return res.json({data: 'No data from yesterday'});
			}
			
			if (yesterday.length > 0) {
				console.log('Pulling yesterday\'s data! Date: ' + yesterday[0].updated);

				var apiURL = 'http://www.conquercancer.ca/site/PageServer?pagename=2018_api_data&pgwrap=n';
			    request(apiURL, function(err, response, body) {
			        if (!err && response.statusCode == 200) {
			            var locals = JSON.parse(body);
			            console.log(locals)
			            
			            var apiOneWalk = 'http://www.onewalk.ca/site/PageServer?pagename=api_data&pgwrap=n';
			            request(apiOneWalk, function(err, response, body) {
			                if (!err && response.statusCode == 200) {
			                    var locals2 = JSON.parse(body);
			                    console.log(locals2)
			                    
			                    var apiRidePerth = 'http://www.conquercancer.org.au/site/PageServer?pagename=api_data&pgwrap=n';
			                    request(apiRidePerth, function(err, response, body) {
			                        if (!err && response.statusCode == 200) {
			                            var locals3 = JSON.parse(body);
			                            console.log(locals3)
			                            
			                            var apiOneDay = 'http://participate.theoneday.org.au/site/PageServer?pagename=api_data&pgwrap=n';
			                            request(apiOneDay, function(err, response, body) {
			                                if (!err && response.statusCode == 200) {
				                                var locals4 = JSON.parse(body);
				                                console.log(locals4)

	                                            // Find today's data
	                                            data.findOne({"updated": moment().format('L')})
	                                            	// .sort({"_id": -1})
	                                            	.exec(function(err, latestdata) {
	                                            		if (err) {
	                                            			console.log('There was an error getting Today\'s data: ');
	                                            			console.log(err);
	                                            		}
	                                            		if (latestdata) {
	                                            			console.log("Getting latest data! Date: " + latestdata.updated);
	                                            			console.log("Getting latest data! Date: " + latestdata);
	                                            			// console.log("Getting latest data! Date: " + latestdata);
                                                            // =========================== Ride Toronto 2019 =========================== //
                                                            var removeDollarTo19v1 = latestdata.to19Donations;
                                                            var removeDollarTo19v2 = yesterday[0].to19Donations;
                                                            var removeRegTo19v1 = latestdata.to19RegFee;
                                                            var removeRegTo19v2 = yesterday[0].to19RegFee;
	                                            			// =========================== Ride Toronto 2018 =========================== //
				                                            var removeDollarTo18v1 = latestdata.to18Donations;
				                                            var removeDollarTo18v2 = yesterday[0].to18Donations;
				                                            var removeRegTo18v1 = latestdata.to18RegFee;
				                                            var removeRegTo18v2 = yesterday[0].to18RegFee;
				                                            // =========================== Ride Toronto 2017 =========================== //
				                                            var removeDollarTo17v1 = latestdata.to17Donations;
				                                            var removeDollarTo17v2 = yesterday[0].to17Donations;

                                                            // =========================== Ride Montreal 2018 =========================== //
                                                            var removeDollarMo19v1 = latestdata.mo19Donations;
                                                            var removeDollarMo19v2 = yesterday[0].mo19Donations;
                                                            var removeRegMo19v1 = latestdata.mo19RegFee;
                                                            var removeRegMo19v2 = yesterday[0].mo19RegFee;

				                                            // =========================== Ride Montreal 2018 =========================== //
				                                            var removeDollarMo18v1 = latestdata.mo18Donations;
				                                            var removeDollarMo18v2 = yesterday[0].mo18Donations;
				                                            var removeRegMo18v1 = latestdata.mo18RegFee;
				                                            var removeRegMo18v2 = yesterday[0].mo18RegFee;
				                                            // =========================== Ride Montreal 2017 =========================== //
				                                            var removeDollarMo17v1 = latestdata.mo17Donations;
				                                            var removeDollarMo17v2 = yesterday[0].mo17Donations;

				                                            // =========================== Ride Alberta 2019 =========================== //
                                                            var removeDollarAb19v1 = latestdata.ab19Donations;
                                                            var removeDollarAb19v2 = yesterday[0].ab19Donations;
                                                            var removeRegAb19v1 = latestdata.ab19RegFee;
                                                            var removeRegAb19v2 = yesterday[0].ab19RegFee;
				                                            // =========================== Ride Alberta 2018 =========================== //
				                                            var removeDollarAb18v1 = latestdata.ab18Donations;
				                                            var removeDollarAb18v2 = yesterday[0].ab18Donations;
				                                            var removeRegAb18v1 = latestdata.ab18RegFee;
				                                            var removeRegAb18v2 = yesterday[0].ab18RegFee;
				                                            // =========================== Ride Alberta 2017 =========================== //
				                                            var removeDollarAb17v1 = latestdata.ab17Donations;
				                                            var removeDollarAb17v2 = yesterday[0].ab17Donations;
					                                            
					                                        // =========================== Ride Vancouver 2019 =========================== //
				                                            var removeDollarVa19v1 = latestdata.va19Donations;
				                                            var removeDollarVa19v2 = yesterday[0].va19Donations;
				                                            var removeRegVa19v1 = latestdata.va19RegFee;
				                                            var removeRegVa19v2 = yesterday[0].va19RegFee;
				                                            // =========================== Ride Vancouver 2018 =========================== //
				                                            var removeDollarVa18v1 = latestdata.va18Donations;
				                                            var removeDollarVa18v2 = yesterday[0].va18Donations;
				                                            var removeRegVa18v1 = latestdata.va18RegFee;
				                                            var removeRegVa18v2 = yesterday[0].va18RegFee;
				                                            // =========================== Ride Vancouver 2017 =========================== //
				                                            var removeDollarVa17v1 = latestdata.va17Donations;
				                                            var removeDollarVa17v2 = yesterday[0].va17Donations;
				                                            
				                                            // =========================== Ride Perth 2018 =========================== //
				                                            var removeDollarPr18v1 = latestdata.pr18Donations;
				                                            var removeDollarPr18v2 = yesterday[0].pr18Donations;
				                                            var removeRegPr18v1 = latestdata.pr18RegFee;
				                                            var removeRegPr18v2 = yesterday[0].pr18RegFee;
				                                            // =========================== Ride Perth 2017 =========================== //
				                                            var removeDollarPr17v1 = latestdata.pr17Donations;
				                                            var removeDollarPr17v2 = yesterday[0].pr17Donations;
				                                            var removeRegPr17v1 = latestdata.pr17RegFee; 
				                                            var removeRegPr17v2 = yesterday[0].pr17RegFee; 
				                                                
				                                            // =========================== OneWalk Toronto 2018 =========================== //
				                                            var removeDollarOwTo18v1 = latestdata.owTo18Donations;
				                                            var removeDollarOwTo18v2 = yesterday[0].owTo18Donations;
				                                            var removeRegOwTo18v1 = latestdata.owTo18RegFee;
				                                            var removeRegOwTo18v2 = yesterday[0].owTo18RegFee;
				                                            var owTo18NightWalkers = locals2.getEventTotal.toronto.to18.nightWlk;
				                                            var owTo182day = locals2.getEventTotal.toronto.to18.twoDayWlk;
				                                            var owTo1815kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr15km;
				                                            var owTo1825kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr25km;
				                                            var owTo1840kmWalkers = locals2.getEventTotal.toronto.to18.Wlkr40km;
				                                            // =========================== OneWalk Toronto 2017 =========================== //
				                                            var removeDollarOwTo17v1 = latestdata.owTo17Donations;
				                                            var removeDollarOwTo17v2 = yesterday[0].owTo17Donations;
				                                            var owTo1715kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr15km;
				                                            var owTo1725kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr25km;
				                                            var owTo1740kmWalkers = locals2.getEventTotal.toronto.to17.Wlkr40km;

				                                            // =========================== OneDay Brisbane 2018 =========================== //
				                                            var removeDollarBr18v1 = latestdata.br18Donations;
				                                            var removeDollarBr18v2 = yesterday[0].br18Donations;
				                                            var removeRegBr18v1 = latestdata.br18RegFee;
				                                            var removeRegBr18v2 = yesterday[0].br18RegFee;

				                                            // =========================== OneDay Brisbane 2017 =========================== //


				                                            // =========================== OneDay Melbourne 2018 =========================== //
				                                            var removeDollarMl18v1 = latestdata.ml18Donations;
				                                            var removeDollarMl18v2 = yesterday[0].ml18Donations;
				                                            var removeRegMl18v1 = latestdata.ml18RegFee;
				                                            var removeRegMl18v2 = yesterday[0].ml18RegFee;

				                                            // =========================== OneDay Melbourne 2017 =========================== //
				                                            var removeDollarMl17v1 = latestdata.ml17Donations;
				                                            var removeDollarMl17v2 = yesterday[0].ml17Donations;
				                                            
				                                            // Remove Dollar Sign from Data Brought In

                                                            // Toronto
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
				                                            
				                                            var numberOwTo18v1 = Number(removeDollarOwTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo18v2 = Number(removeDollarOwTo18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo17v1 = Number(removeDollarOwTo17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberOwTo17v2 = Number(removeDollarOwTo17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegOwTo18v1 = Number(removeRegOwTo18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegOwTo18v2 = Number(removeRegOwTo18v2.replace(/[^0-9\.-]+/g,""));

				                                            var numberBr18v1 = Number(removeDollarBr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberBr18v2 = Number(removeDollarBr18v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegBr18v1 = Number(removeRegBr18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegBr18v2 = Number(removeRegBr18v2.replace(/[^0-9\.-]+/g,"")); 
				                                            
				                                            var numberMl18v1 = Number(removeDollarMl18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMl18v2 = Number(removeDollarMl18v2.replace(/[^0-9\.-]+/g,"")); 
				                                            var numberMl17v1 = Number(removeDollarMl17v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberMl17v2 = Number(removeDollarMl17v2.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMl18v1 = Number(removeRegMl18v1.replace(/[^0-9\.-]+/g,""));
				                                            var numberRegMl18v2 = Number(removeRegMl18v2.replace(/[^0-9\.-]+/g,""));
				                                            
				                                            // Subtract Real Time Data vs Static Data

                                                            // Toronto
                                                            var to19DonationSub = numberTo19v1 - numberTo19v2;
                                                            var to19RfiSub = locals.getEventTotal.toronto.to19.rfi - yesterday[0].to19RFI;
                                                            var to19CrewSub = locals.getEventTotal.toronto.to19.crews - yesterday[0].to19Crews;

                                                            var to19RegSub = numberRegTo19v1 - numberRegTo19v2;
                                                            var to19VRDaily = locals.getEventTotal.toronto.to19.virtual - yesterday[0].to19VR;
                                                            var to19Riders2Daily = locals.getEventTotal.toronto.to19.riders2 - yesterday[0].to19Riders2;
                                                            var to19OneDayDaily = locals.getEventTotal.toronto.to19.oneday - yesterday[0].to19OneDay;
                                                            var to19OneDayDaily2 = locals.getEventTotal.toronto.to19.oneday2 - yesterday[0].to19OneDay2;

                                                            var to19TotalParticipants = parseFloat(locals.getEventTotal.toronto.to19.riders) + parseFloat(locals.getEventTotal.toronto.to19.riders2) + parseFloat(locals.getEventTotal.toronto.to19.oneday) + parseFloat(locals.getEventTotal.toronto.to19.oneday2);

                                                            var to19TotalRiders = locals.getEventTotal.toronto.to19.riders;
                                                            var to19RiderSub = to19TotalRiders - yesterday[0].to19Riders;

				                                            var to18DonationSub = numberTo18v1 - numberTo18v2;
				                                            var to17DonationSub = numberTo17v1 - numberTo17v2;
				                                            var to18RfiSub = locals.getEventTotal.toronto.to18.rfi - yesterday[0].to18RFI;
				                                            var to18CrewSub = locals.getEventTotal.toronto.to18.crews - yesterday[0].to18Crews;
				                                            
				                                            var to18RegSub = numberRegTo18v1 - numberRegTo18v2;
				                                            var to18VRDaily = locals.getEventTotal.toronto.to18.virtual - yesterday[0].to18VR;
				                                            var to18Riders2Daily = locals.getEventTotal.toronto.to18.riders2 - yesterday[0].to18Riders2;
				                                            var to18OneDayDaily = locals.getEventTotal.toronto.to18.oneday - yesterday[0].to18OneDay;
                                                            var to18OneDayDaily2 = locals.getEventTotal.toronto.to18.oneday2 - yesterday[0].to18OneDay2;

				                                            var to18TotalParticipants = parseFloat(locals.getEventTotal.toronto.to18.riders) + parseFloat(locals.getEventTotal.toronto.to18.riders2) + parseFloat(locals.getEventTotal.toronto.to18.oneday) + parseFloat(locals.getEventTotal.toronto.to18.oneday2);

				                                            var to18TotalRiders = locals.getEventTotal.toronto.to18.riders;

				                                            var to18RiderSub = to18TotalRiders - yesterday[0].to18Riders;
				                                            
				                                            var pr18DonationSub = numberPr18v1 - numberPr18v2;
				                                            var pr17DonationSub = numberPr17v1 - numberPr17v2;
				                                            var pr18RfiSub = locals3.getEventTotal.perth.pr18.rfi - yesterday[0].pr18RFI;
				                                            var pr18CrewSub = locals3.getEventTotal.perth.pr18.crews - yesterday[0].pr18Crews;
				                                            var pr18RiderSub = locals3.getEventTotal.perth.pr18.riders - yesterday[0].pr18Riders;
				                                            var pr18RegSub = numberRegPr18v1 - numberRegPr18v2;

				                                            // Montreal 2019 Daily
                                                            var mo19RegSub = numberRegMo19v1 - numberRegMo19v2;
                                                            var mo19VRDaily = locals.getEventTotal.montreal.mo19.virtual - yesterday[0].mo19VR;
                                                            var mo19Riders2Daily = locals.getEventTotal.montreal.mo19.riders2 - yesterday[0].mo19Riders2;
                                                            var mo19OneDayDaily = locals.getEventTotal.montreal.mo19.oneday - yesterday[0].mo19OneDay;
                                                            var mo19OneDayDaily2 = locals.getEventTotal.montreal.mo19.oneday2 - yesterday[0].mo19OneDay2;
                                                            var mo19DonationSub = numberMo19v1 - numberMo19v2;
                                                            var mo19RfiSub = locals.getEventTotal.montreal.mo19.rfi - yesterday[0].mo19RFI;
                                                            var mo19CrewSub = locals.getEventTotal.montreal.mo19.crews - yesterday[0].mo19Crews;
                                                            var mo19RiderSub = locals.getEventTotal.montreal.mo19.riders - yesterday[0].mo19Riders;

                                                            var mo19TotalRiders = locals.getEventTotal.montreal.mo19.riders;
                                                            var mo19RiderSub = mo19TotalRiders - yesterday[0].mo19Riders;

                                                            var mo19TotalParticipants = parseFloat(locals.getEventTotal.montreal.mo19.riders) + parseFloat(locals.getEventTotal.montreal.mo19.riders2);

															// Montreal 2018 Daily
				                                            var mo18DonationSub = numberMo18v1 - numberMo18v2;
				                                            var mo17DonationSub = numberMo17v1 - numberMo17v2;
				                                            var mo18RfiSub = locals.getEventTotal.montreal.mo18.rfi - yesterday[0].mo18RFI;
				                                            var mo18CrewSub = locals.getEventTotal.montreal.mo18.crews - yesterday[0].mo18Crews;
				                                            var mo18RiderSub = locals.getEventTotal.montreal.mo18.riders - yesterday[0].mo18Riders;
				                                            var mo18RegSub = numberRegMo18v1 - numberRegMo18v2;
				                                            var mo18VRDaily = locals.getEventTotal.montreal.mo18.virtual - yesterday[0].mo18VR;
				                                            
				                                            // Alberta 2019 Daily
				                                            var ab19RegSub = numberRegAb19v1 - numberRegAb19v2;
                                                            var ab19VRDaily = locals.getEventTotal.alberta.ab19.virtual - yesterday[0].ab19VR;
                                                            var ab19Riders2Daily = locals.getEventTotal.alberta.ab19.riders2 - yesterday[0].ab19Riders2;
                                                            var ab19OneDayDaily = locals.getEventTotal.alberta.ab19.oneday - yesterday[0].ab19OneDay;
                                                            var ab19OneDayDaily2 = locals.getEventTotal.alberta.ab19.oneday2 - yesterday[0].ab19OneDay2;
                                                            var ab19DonationSub = numberAb19v1 - numberAb19v2;
                                                            var ab19RfiSub = locals.getEventTotal.alberta.ab19.rfi - yesterday[0].ab19RFI;
                                                            var ab19CrewSub = locals.getEventTotal.alberta.ab19.crews - yesterday[0].ab19Crews;
                                                            var ab19RiderSub = locals.getEventTotal.alberta.ab19.riders - yesterday[0].ab19Riders;

                                                            var ab19TotalRiders = locals.getEventTotal.alberta.ab19.riders;
                                                            var ab19RiderSub = ab19TotalRiders - yesterday[0].ab19Riders;

                                                            var ab19TotalParticipants = parseFloat(locals.getEventTotal.alberta.ab19.riders) + parseFloat(locals.getEventTotal.alberta.ab19.riders2);

				                                            // Alberta 2018 Daily
				                                            var ab18DonationSub = numberAb18v1 - numberAb18v2;
				                                            var ab17DonationSub = numberAb17v1 - numberAb17v2;
				                                            var ab18RfiSub = locals.getEventTotal.alberta.ab18.rfi - yesterday[0].ab18RFI;
				                                            var ab18CrewSub = locals.getEventTotal.alberta.ab18.crews - yesterday[0].ab18Crews;
				                                            var ab18RiderSub = locals.getEventTotal.alberta.ab18.riders - yesterday[0].ab18Riders;
				                                            var ab18RegSub = numberRegAb18v1 - numberRegAb18v2;
				                                            var ab18VRDaily = locals.getEventTotal.alberta.ab18.virtual - yesterday[0].ab18VR;
				                                            
				                                            // Vancouver 2019 Daily
				                                            var va19RegSub = numberRegVa19v1 - numberRegVa19v2;
                                                            var va19VRDaily = locals.getEventTotal.vancouver.va19.virtual - yesterday[0].va19VR;
                                                            var va19Riders2Daily = locals.getEventTotal.vancouver.va19.riders2 - yesterday[0].va19Riders2;
                                                            var va19OneDayDaily = locals.getEventTotal.vancouver.va19.oneday - yesterday[0].va19OneDay;
                                                            var va19OneDayDaily2 = locals.getEventTotal.vancouver.va19.oneday2 - yesterday[0].va19OneDay2;
                                                            var va19DonationSub = numberVa19v1 - numberVa19v2;
                                                            var va19RfiSub = locals.getEventTotal.vancouver.va19.rfi - yesterday[0].va19RFI;
                                                            var va19CrewSub = locals.getEventTotal.vancouver.va19.crews - yesterday[0].va19Crews;
                                                            var va19RiderSub = locals.getEventTotal.vancouver.va19.riders - yesterday[0].va19Riders;

                                                            var va19TotalRiders = locals.getEventTotal.vancouver.va19.riders;
                                                           // var va19RiderSub = ab19TotalRiders - yesterday[0].va19Riders;

                                                            var va19TotalParticipants = parseFloat(locals.getEventTotal.vancouver.va19.riders) + parseFloat(locals.getEventTotal.vancouver.va19.riders2);

				                                            var va18DonationSub = numberVa18v1 - numberVa18v2;
				                                            var va17DonationSub = numberVa17v1 - numberVa17v2;
				                                            var va18RfiSub = locals.getEventTotal.vancouver.va18.rfi - yesterday[0].va18RFI;
				                                            var va18CrewSub = locals.getEventTotal.vancouver.va18.crews - yesterday[0].va18Crews;
				                                            var va18RiderSub = locals.getEventTotal.vancouver.va18.riders - yesterday[0].va18Riders;
				                                            var va18RegSub = numberRegVa18v1 - numberRegVa18v2;
				                                            var va18VRDaily = locals.getEventTotal.vancouver.va18.virtual - yesterday[0].va18VR;
				                                            
				                                            var owto18DonationSub = numberOwTo18v1 - numberOwTo18v2;
				                                            var owto17DonationSub = numberOwTo17v1 - numberOwTo17v2;
				                                            var owto18RfiSub = locals2.getEventTotal.toronto.to18.rfi - yesterday[0].owTo18RFI;
				                                            var owto18RegSub = numberRegOwTo18v1 - numberRegOwTo18v2;
				                                            var owto18TotalWalkers = parseFloat(owTo18NightWalkers) + parseFloat(owTo1815kmWalkers) + parseFloat(owTo1825kmWalkers) + parseFloat(owTo1840kmWalkers) + parseFloat(owTo182day);
				                                            var owto18CrewsDailySub = locals2.getEventTotal.toronto.to18.crews - yesterday[0].owTo18Crews;
				                                            var owto18WalkersDailySub = owto18TotalWalkers - yesterday[0].owTo18Walkers;
				                                            var owTo182dayDailySub = locals2.getEventTotal.toronto.to18.Wlkr15km - yesterday[0].owTo182day;
					                                        var owTo1815kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr15km - yesterday[0].owTo1815kmWalkers;
					                                        var owTo1825kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr25km - yesterday[0].owTo1825kmWalkers;
					                                        var owTo1840kmWalkersDailySub = locals2.getEventTotal.toronto.to18.Wlkr40km - yesterday[0].owTo1840kmWalkers;
					                                        var owTo18NightWalkersDailySub = locals2.getEventTotal.toronto.to18.nightWlk - yesterday[0].owTo18NightWalkers;
				                                            
				                                            // ONEDAY - DAILY - Brisbane
				                                            var br18DonationSub = numberBr18v1 - numberBr18v2;
				                                            var br18RegSub = numberRegBr18v1 - numberRegBr18v2;
				                                            var br18RiderSub = locals4.getEventTotal.brisbane.br18.riders - yesterday[0].br18Riders;

				                                            var br18WalkerSub = locals4.getEventTotal.brisbane.br18.walkers - yesterday[0].br18Walkers;

				                                            // ONEDAY - DAILY - Melbourne
				                                            var ml18DonationSub = numberMl18v1 - numberMl18v2;
				                                            var ml18RegSub = numberRegMl18v1 - numberRegMl18v2;
				                                            var ml18RiderSub = locals4.getEventTotal.melbourne.ml18.riders - yesterday[0].ml18Riders;
				                                            var ml18WalkerSub = locals4.getEventTotal.melbourne.ml18.walkers - yesterday[0].ml18Walkers;

				                                            var ml17DonationSub = numberMl17v1 - numberMl17v2;
				                                            
				                                            // Add Dollar Sign back into Data
                                                            var newTo19DonDaily = '$' + to19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                                            var newTo19RegDaily = '$' + to19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newToDonDaily = '$' + to18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newTo17DonDaily = '$' + to17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newToRegDaily = '$' + to18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 

				                                            var newPrDonDaily = '$' + pr18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newPr17DonDaily = '$' + pr17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newPrRegDaily = '$' + pr18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                                                            var newMo19DonDaily = '$' + mo19DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                                                            var newMo19RegDaily = '$' + mo19RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMoDonDaily = '$' + mo18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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

				                                            var newOwToDonDaily = '$' + owto18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newOwTo17DonDaily = '$' + owto17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newOwToRegDaily = '$' + owto18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            var newBrDonDaily = '$' + br18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newBrRegDaily = '$' + br18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            var newMlDonDaily = '$' + ml18DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
				                                            var newMlRegDaily = '$' + ml18RegSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				                                            var newMl17DonDaily = '$' + ml17DonationSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				                                            latestdata.updated = moment().format('L');
				                                            latestdata.nightly = 'false';
				                                            // RIDE - Toronto - 2019
                                                            latestdata.to19Donations = locals.getEventTotal.toronto.to19.totalDonation;
                                                            latestdata.to19RegFee = locals.getEventTotal.toronto.to19.regFee;
                                                            latestdata.to19Crews = locals.getEventTotal.toronto.to19.crews;
                                                            latestdata.to19RFI = locals.getEventTotal.toronto.to19.rfi;
                                                            latestdata.to19Riders = to19TotalRiders;
                                                            latestdata.to19VR = locals.getEventTotal.toronto.to19.virtual;
                                                            latestdata.to19Riders2 = locals.getEventTotal.toronto.to19.riders2;
                                                            latestdata.to19OneDay = locals.getEventTotal.toronto.to19.oneday;
                                                            latestdata.to19OneDay2 = locals.getEventTotal.toronto.to19.oneday2;
                                                            latestdata.to19TotalParticipants = to19TotalParticipants;

                                                            // RIDE - Toronto - 2018
                                                            latestdata.to18Donations = locals.getEventTotal.toronto.to18.totalDonation;
                                                            latestdata.to18RegFee = locals.getEventTotal.toronto.to18.regFee;
                                                            latestdata.to18Crews = locals.getEventTotal.toronto.to18.crews;
                                                            latestdata.to18RFI = locals.getEventTotal.toronto.to18.rfi;
                                                            latestdata.to18Riders = to18TotalRiders;
                                                            latestdata.to18VR = locals.getEventTotal.toronto.to18.virtual;
                                                            latestdata.to18Riders2 = locals.getEventTotal.toronto.to18.riders2;
                                                            latestdata.to18OneDay = locals.getEventTotal.toronto.to18.oneday;
                                                            latestdata.to18OneDay2 = locals.getEventTotal.toronto.to18.oneday2;
                                                            latestdata.to18TotalParticipants = to18TotalParticipants;
			                                                
			                                                latestdata.to17Donations = locals.getEventTotal.toronto.to17.totalDonation;
			                                                latestdata.to17RegFee = locals.getEventTotal.toronto.to17.regFee;
			                                                latestdata.to17Crews = locals.getEventTotal.toronto.to17.crews;
			                                                latestdata.to17RFI = locals.getEventTotal.toronto.to17.rfi;
			                                                latestdata.to17Riders = locals.getEventTotal.toronto.to17.riders;
			                                                latestdata.to17VR = locals.getEventTotal.toronto.to17.virtual;

                                                            // RIDE - Montreal - 2019
                                                            latestdata.mo19Donations = locals.getEventTotal.montreal.mo19.totalDonation;
                                                            latestdata.mo19RegFee = locals.getEventTotal.montreal.mo19.regFee;
                                                            latestdata.mo19Crews = locals.getEventTotal.montreal.mo19.crews;
                                                            latestdata.mo19RFI = locals.getEventTotal.montreal.mo19.rfi;
                                                            latestdata.mo19Riders = mo19TotalRiders;
                                                            latestdata.mo19VR = locals.getEventTotal.montreal.mo19.virtual;
                                                            latestdata.mo19Riders2 = locals.getEventTotal.montreal.mo19.riders2;
                                                            latestdata.mo19OneDay = locals.getEventTotal.montreal.mo19.oneday;
                                                            latestdata.mo19OneDay2 = locals.getEventTotal.montreal.mo19.oneday2;
                                                            latestdata.mo19TotalParticipants = mo19TotalParticipants;
			                                                
			                                                // RIDE - Montreal * 2018
			                                                latestdata.mo18Donations = locals.getEventTotal.montreal.mo18.totalDonation;
			                                                latestdata.mo18RegFee = locals.getEventTotal.montreal.mo18.regFee;
			                                                latestdata.mo18Crews = locals.getEventTotal.montreal.mo18.crews;
			                                                latestdata.mo18RFI = locals.getEventTotal.montreal.mo18.rfi;
			                                                latestdata.mo18Riders = locals.getEventTotal.montreal.mo18.riders;
			                                                latestdata.mo18VR = locals.getEventTotal.montreal.mo18.virtual;
			                                                
			                                                latestdata.mo17Donations = locals.getEventTotal.montreal.mo17.totalDonation;
			                                                latestdata.mo17RegFee = locals.getEventTotal.montreal.mo17.regFee;
			                                                latestdata.mo17Crews = locals.getEventTotal.montreal.mo17.crews;
			                                                latestdata.mo17RFI = locals.getEventTotal.montreal.mo17.rfi;
			                                                latestdata.mo17Riders = locals.getEventTotal.montreal.mo17.riders;
			                                                latestdata.mo17VR = locals.getEventTotal.montreal.mo17.virtual;
			                                                
			                                                // RIDE - Alberta
			                                                latestdata.ab19Donations = locals.getEventTotal.alberta.ab19.totalDonation;
                                                            latestdata.ab19RegFee = locals.getEventTotal.alberta.ab19.regFee;
                                                            latestdata.ab19Crews = locals.getEventTotal.alberta.ab19.crews;
                                                            latestdata.ab19RFI = locals.getEventTotal.alberta.ab19.rfi;
                                                            latestdata.ab19Riders = to19TotalRiders;
                                                            latestdata.ab19VR = locals.getEventTotal.alberta.ab19.virtual;
                                                            latestdata.ab19Riders2 = locals.getEventTotal.alberta.ab19.riders2;
                                                            latestdata.ab19OneDay = locals.getEventTotal.alberta.ab19.oneday;
                                                            latestdata.ab19OneDay2 = locals.getEventTotal.alberta.ab19.oneday2;
                                                            latestdata.ab19TotalParticipants = ab19TotalParticipants;

			                                                latestdata.ab18Donations = locals.getEventTotal.alberta.ab18.totalDonation;
			                                                latestdata.ab18RegFee = locals.getEventTotal.alberta.ab18.regFee;
			                                                latestdata.ab18Crews = locals.getEventTotal.alberta.ab18.crews;
			                                                latestdata.ab18RFI = locals.getEventTotal.alberta.ab18.rfi;
			                                                latestdata.ab18Riders = locals.getEventTotal.alberta.ab18.riders;
			                                                latestdata.ab18VR = locals.getEventTotal.alberta.ab18.virtual;
			                                                
			                                                latestdata.ab17Donations = locals.getEventTotal.alberta.ab17.totalDonation;
			                                                latestdata.ab17RegFee = locals.getEventTotal.alberta.ab17.regFee;
			                                                latestdata.ab17Crews = locals.getEventTotal.alberta.ab17.crews;
			                                                latestdata.ab17RFI = locals.getEventTotal.alberta.ab17.rfi;
			                                                latestdata.ab17Riders = locals.getEventTotal.alberta.ab17.riders;
			                                                latestdata.ab17VR = locals.getEventTotal.alberta.ab17.virtual;
			                                                
			                                                // RIDE - Vancouver
			                                                latestdata.va19Donations = locals.getEventTotal.vancouver.va19.totalDonation;
			                                                latestdata.va19RegFee = locals.getEventTotal.vancouver.va19.regFee;
			                                                latestdata.va19Crews = locals.getEventTotal.vancouver.va19.crews;
			                                                latestdata.va19RFI = locals.getEventTotal.vancouver.va19.rfi;
			                                                latestdata.va19Riders = locals.getEventTotal.vancouver.va19.riders;
			                                                latestdata.va19VR = locals.getEventTotal.vancouver.va19.virtual;
			                                                latestdata.va19Riders2 = locals.getEventTotal.vancouver.va19.riders2;
                                                            latestdata.va19OneDay = locals.getEventTotal.vancouver.va19.oneday;
                                                            latestdata.va19OneDay2 = locals.getEventTotal.vancouver.va19.oneday2;
                                                            latestdata.va19TotalParticipants = va19TotalParticipants;

			                                                latestdata.va18Donations = locals.getEventTotal.vancouver.va18.totalDonation;
			                                                latestdata.va18RegFee = locals.getEventTotal.vancouver.va18.regFee;
			                                                latestdata.va18Crews = locals.getEventTotal.vancouver.va18.crews;
			                                                latestdata.va18RFI = locals.getEventTotal.vancouver.va18.rfi;
			                                                latestdata.va18Riders = locals.getEventTotal.vancouver.va18.riders;
			                                                latestdata.va18VR = locals.getEventTotal.vancouver.va18.virtual;
			                                                
			                                                latestdata.va17Donations = locals.getEventTotal.vancouver.va17.totalDonation;
			                                                latestdata.va17RegFee = locals.getEventTotal.vancouver.va17.regFee;
			                                                latestdata.va17Crews = locals.getEventTotal.vancouver.va17.crews;
			                                                latestdata.va17RFI = locals.getEventTotal.vancouver.va17.rfi;
			                                                latestdata.va17Riders = locals.getEventTotal.vancouver.va17.riders;
			                                                latestdata.va17VR = locals.getEventTotal.vancouver.va17.virtual;
			                                                
			                                                // ONEWALK - Toronto
			                                                latestdata.owTo18Donations = locals2.getEventTotal.toronto.to18.totalDonation;
			                                                latestdata.owTo18RegFee = locals2.getEventTotal.toronto.to18.regFee;
			                                                latestdata.owTo18Crews = locals2.getEventTotal.toronto.to18.crews;
			                                                latestdata.owTo18Walkers = owto18TotalWalkers;
			                                                latestdata.owTo18NightWalkers = owTo18NightWalkers;
			                                                latestdata.owTo182day = owTo182day;
			                                                latestdata.owTo1815kmWalkers = owTo1815kmWalkers;
			                                                latestdata.owTo1825kmWalkers = owTo1825kmWalkers;
			                                                latestdata.owTo1840kmWalkers = owTo1840kmWalkers;
			                                                latestdata.owTo18RFI = locals2.getEventTotal.toronto.to18.rfi;
			                                                
			                                                latestdata.owTo17Donations = locals2.getEventTotal.toronto.to17.totalDonation;
			                                                latestdata.owTo17RegFee = locals2.getEventTotal.toronto.to17.regFee;
			                                                latestdata.owTo17Crews = locals2.getEventTotal.toronto.to17.crews;
			                                                latestdata.owTo17Walkers = locals2.getEventTotal.toronto.to17.walkers;
			                                                latestdata.owTo1715kmWalkers = owTo1715kmWalkers;
			                                                latestdata.owTo1725kmWalkers = owTo1725kmWalkers;
			                                                latestdata.owTo1740kmWalkers = owTo1740kmWalkers;
			                                                latestdata.owTo17RFI = locals2.getEventTotal.toronto.to17.rfi;
			                                                
			                                                // RIDE - Perth
			                                                latestdata.pr18Donations = locals3.getEventTotal.perth.pr18.totalDonation;
			                                                latestdata.pr18RegFee = locals3.getEventTotal.perth.pr18.regFee;
			                                                latestdata.pr18Crews = locals3.getEventTotal.perth.pr18.crews;
			                                                latestdata.pr18RFI = locals3.getEventTotal.perth.pr18.rfi;
			                                                latestdata.pr18Riders = locals3.getEventTotal.perth.pr18.riders;
			                                                
			                                                latestdata.pr17Donations = locals3.getEventTotal.perth.pr17.totalDonation;
			                                                latestdata.pr17RegFee = locals3.getEventTotal.perth.pr17.regFee;
			                                                latestdata.pr17Crews = locals3.getEventTotal.perth.pr17.crews;
			                                                latestdata.pr17RFI = locals3.getEventTotal.perth.pr17.rfi;
			                                                latestdata.pr17Riders = locals3.getEventTotal.perth.pr17.riders;

			                                                 // ONEDAY - Brisbane
			                                                latestdata.br18Donations = locals4.getEventTotal.brisbane.br18.totalDonation;
			                                                latestdata.br18RegFee = locals4.getEventTotal.brisbane.br18.regFee;
			                                                latestdata.br18Walkers = locals4.getEventTotal.brisbane.br18.walkers;
			                                                latestdata.br18Riders = locals4.getEventTotal.brisbane.br18.riders;

			                                                latestdata.br17Donations = locals4.getEventTotal.brisbane.br17.totalDonation;
			                                                latestdata.br17RegFee = locals4.getEventTotal.brisbane.br17.regFee;
			                                                latestdata.br17Walkers = locals4.getEventTotal.brisbane.br17.walkers;
			                                                latestdata.br17Riders = locals4.getEventTotal.brisbane.br17.riders;
			                                                
			                                                // ONEDAY - Melbourne
			                                                latestdata.ml18Donations = locals4.getEventTotal.melbourne.ml18.totalDonation;
			                                                latestdata.ml18RegFee = locals4.getEventTotal.melbourne.ml18.regFee;
			                                                latestdata.ml18Walkers = locals4.getEventTotal.melbourne.ml18.walkers;
			                                                latestdata.ml18Riders = locals4.getEventTotal.melbourne.ml18.riders;
			                                                
			                                                latestdata.ml17Donations = locals4.getEventTotal.melbourne.ml17.totalDonation;
			                                                latestdata.ml17RegFee = locals4.getEventTotal.melbourne.ml17.regFee;
			                                                latestdata.ml17Walkers = locals4.getEventTotal.melbourne.ml17.walkers;
			                                                latestdata.ml17Riders = locals4.getEventTotal.melbourne.ml17.riders;
			                                                
			                                                // DAILY - RIDE - Toronto
                                                            // -- 2019
                                                            latestdata.to19DonDaily = newTo19DonDaily;
                                                            latestdata.to19RegFeeDaily = newTo19RegDaily;
                                                            latestdata.to19RFIDaily = to19RfiSub;
                                                            latestdata.to19CrewDaily = to19CrewSub;
                                                            latestdata.to19RidersDaily = to19RiderSub;
                                                            latestdata.to19VRDaily = to19VRDaily;
                                                            latestdata.to19Riders2Daily = to19Riders2Daily;
                                                            latestdata.to19OneDayDaily = to19OneDayDaily;

                                                            // -- 2018
			                                                latestdata.to18DonDaily = newToDonDaily;
			                                                latestdata.to18RegFeeDaily = newToRegDaily;
			                                                latestdata.to18RFIDaily = to18RfiSub;
			                                                latestdata.to18CrewDaily = to18CrewSub;
			                                                latestdata.to18RidersDaily = to18RiderSub;
			                                                latestdata.to18VRDaily = to18VRDaily;
			                                                latestdata.to18Riders2Daily = to18Riders2Daily;
			                                                latestdata.to18OneDayDaily = to18OneDayDaily;
			                                                
			                                                latestdata.to17DonDaily = newTo17DonDaily;
			                                                
			                                                // DAILY - RIDE - Perth
			                                                latestdata.pr18DonDaily = newPrDonDaily;
			                                                latestdata.pr18RegFeeDaily = newPrRegDaily;
			                                                latestdata.pr18RFIDaily = pr18RfiSub;
			                                                latestdata.pr18CrewDaily = pr18CrewSub;
			                                                latestdata.pr18RidersDaily = pr18RiderSub;
			                                                
			                                                latestdata.pr17DonDaily = newPr17DonDaily;
			                                                
			                                                // DAILY - RIDE - Montreal
                                                            latestdata.mo19DonDaily = newMo19DonDaily;
                                                            latestdata.mo19RegFeeDaily = newMo19RegDaily;
                                                            latestdata.mo19RFIDaily = mo19RfiSub;
                                                            latestdata.mo19CrewDaily = mo19CrewSub;
                                                            latestdata.mo19RidersDaily = mo19RiderSub;
                                                            latestdata.mo19Riders2Daily = mo19Riders2Daily;
                                                            latestdata.mo19OneDayDaily = mo19OneDayDaily;
                                                            latestdata.mo19OneDayDaily2 = mo19OneDayDaily2;
                                                            latestdata.mo19VRDaily = mo19VRDaily;

                                                            latestdata.mo18DonDaily = newMoDonDaily;
			                                                latestdata.mo18RegFeeDaily = newMoRegDaily;
			                                                latestdata.mo18RFIDaily = mo18RfiSub;
			                                                latestdata.mo18CrewDaily = mo18CrewSub;
			                                                latestdata.mo18RidersDaily = mo18RiderSub;
			                                                latestdata.mo18VRDaily = mo18VRDaily;
			                                                
			                                                latestdata.mo17DonDaily = newMo17DonDaily;

			                                                // DAILY - RIDE - Alberta
			                                                latestdata.ab19DonDaily = newAb19DonDaily;
			                                                latestdata.ab19RegFeeDaily = newAb19RegDaily;
			                                                latestdata.ab19RFIDaily = ab19RfiSub;
			                                                latestdata.ab19CrewDaily = ab19CrewSub;
			                                                latestdata.ab19RidersDaily = ab19RiderSub;
			                                                latestdata.ab19Riders2Daily = ab19Riders2Daily;
                                                            latestdata.ab19OneDayDaily = ab19OneDayDaily;
                                                            latestdata.ab19OneDayDaily2 = ab19OneDayDaily2;
			                                                latestdata.ab19VRDaily = ab19VRDaily;

			                                                latestdata.ab18DonDaily = newAbDonDaily;
			                                                latestdata.ab18RegFeeDaily = newAbRegDaily;
			                                                latestdata.ab18RFIDaily = ab18RfiSub;
			                                                latestdata.ab18CrewDaily = ab18CrewSub;
			                                                latestdata.ab18RidersDaily = ab18RiderSub;
			                                                latestdata.ab18VRDaily = ab18VRDaily;
			                                                
			                                                latestdata.ab17DonDaily = newAb17DonDaily;

			                                                // DAILY - RIDE - Vancouver
			                                                latestdata.va19DonDaily = newVa19DonDaily;
			                                                latestdata.va19RegFeeDaily = newVa19RegDaily;
			                                                latestdata.va19RFIDaily = va19RfiSub;
			                                                latestdata.va19CrewDaily = va19CrewSub;
			                                                latestdata.va19RidersDaily = va19RiderSub;
			                                                latestdata.va19Riders2Daily = va19Riders2Daily;
                                                            latestdata.va19OneDayDaily = va19OneDayDaily;
                                                            latestdata.va19OneDayDaily2 = va19OneDayDaily2;
			                                                latestdata.va19VRDaily = va19VRDaily;

			                                                latestdata.va18DonDaily = newVaDonDaily;
			                                                latestdata.va18RegFeeDaily = newVaRegDaily;
			                                                latestdata.va18RFIDaily = va18RfiSub;
			                                                latestdata.va18CrewDaily = va18CrewSub;
			                                                latestdata.va18RidersDaily = va18RiderSub;
			                                                latestdata.va18VRDaily = va18VRDaily;
			                                                
			                                                latestdata.va17DonDaily = newVa17DonDaily;

			                                                // DAILY - ONEWALK - Toronto
			                                                latestdata.owto18DonDaily = newOwToDonDaily;
			                                                latestdata.owto18RegDaily = newOwToRegDaily;
			                                                latestdata.owto18RFIDaily = owto18RfiSub;
			                                                latestdata.owto18WalkersDaily = owto18WalkersDailySub;
			                                                latestdata.owto182dayDaily = owTo182dayDailySub,
														    latestdata.owto18NightWalkersDaily = owTo18NightWalkersDailySub,
														    latestdata.owto1815kmWalkersDaily = owTo1815kmWalkersDailySub,
														    latestdata.owto1825kmWalkersDaily = owTo1825kmWalkersDailySub,
														    latestdata.owto1840kmWalkersDaily = owTo1840kmWalkersDailySub,
			                                                latestdata.owto18CrewsDaily = owto18CrewsDailySub;
			                                                
			                                                latestdata.owto17DonDaily = newOwTo17DonDaily;

			                                                // DAILY - ONEDAY - Melbourne
			                                                latestdata.ml18DonDaily = newMlDonDaily;
			                                                latestdata.ml18RegDaily = newMlRegDaily;
			                                                latestdata.ml18RidersDaily = ml18RiderSub;
			                                                latestdata.ml18WalkersDaily = ml18RiderSub;

			                                             	latestdata.ml17DonDaily = newMl17DonDaily;

			                                             	// DAILY - ONEDAY - Brisbane
			                                                latestdata.br18DonDaily = newBrDonDaily;
			                                                latestdata.br18RegDaily = newBrRegDaily;
			                                                latestdata.br18RidersDaily = br18RiderSub;
			                                                latestdata.br18WalkersDaily = br18WalkerSub;

			                                             	// latestdata.br17DonDaily = newBr17DonDaily;

				                                            latestdata.save(function (err){
				                                            	if (err) return handleError(err);
				                                            	console.log('Data saved to MongoDB!');
				                                            });
	                                            		}
	                                            		else {

	                                            		}
	                                            	});
			                                }
			                                if (err) {
									        	console.log('There was an error getting theoneday.org.au\'s data: ');
									        	console.log(err);
									        }
									        else {

									        }
			                            });
			                        }
			                        if (err) {
							        	console.log('There was an error getting conquercancer.org.au\'s data: ');
							        	console.log(err);
							        }
							        else {
							        	
							        }
			                    });
			                }
			                if (err) {
					        	console.log('There was an error getting onewalk.ca\'s data: ');
					        	console.log(err);
					        }
					        else {
					        	
					        }
			            });
			        }
			        if (err) {
			        	console.log('There was an error getting conquercancer.ca\'s data: ');
			        	console.log(err);
			        }
			        else {
			        	
			        }
			    });
			}
			else {

				console.log('Sorry there was an error getting yesterday\'s data: ');
				console.log(err);
				// console.log(data);
			}
		});
		

	data.findOne()
		.sort({"_id": -1})
		.exec(function(err, data) {
			if (err) {
				console.log('Error getting data..');
			} 
			if (data) {
				// console.log(data);
				res.json(data);
			}
			else {
				console.log('No data found!');
			}
		});
});

module.exports = router;