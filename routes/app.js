const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var express = require('express');
var router = express.Router();

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
                                    
                                    console.log(locals4.getEventTotal.melbourne.ml18.totalDonation);
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
                                            owTo18Walkers: locals2.getEventTotal.toronto.to18.walkers,
                                            owTo18RFI: locals2.getEventTotal.toronto.to18.rfi,
                                            owTo17Donations: locals2.getEventTotal.toronto.to17.totalDonation,
                                            owTo17RegFee: locals2.getEventTotal.toronto.to17.regFee,
                                            owTo17Crews: locals2.getEventTotal.toronto.to17.crews,
                                            owTo17Walkers: locals2.getEventTotal.toronto.to17.walkers,
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
                                            ml17Riders: locals4.getEventTotal.melbourne.ml17.riders
                                    });
                                    
                                }
                            });

                        }
                    });
                }
            });
        }
    });
});


router.post('/', function (req, res, next) {
    
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
                                    
                                    db.locals.save();
                                    db.locals2.save();
                                    db.locals3.save();
                                    db.locals4.save();
                                    
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
