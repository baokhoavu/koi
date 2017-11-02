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
            console.log(body);
            var locals = JSON.parse(body);
            console.log(locals.getEventTotal.toronto.to17.crews);
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
                                va17Riders: locals.getEventTotal.vancouver.va17.riders,});
//            return locals.getGroupInfoResponse.groupInfo.numMembers;
        }
    });
});

module.exports = router;
