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
            console.log(locals.getEventTotal.to18.totalDonation);
            res.render('data', {to18Donations: locals.getEventTotal.to18.totalDonation,
                               to18RegFee: locals.getEventTotal.to18.regFee,
                               to18Crews: locals.getEventTotal.to18.crews,
                               to18RFI: locals.getEventTotal.to18.rfi,
                               to18Riders: locals.getEventTotal.to18.riders});
//            return locals.getGroupInfoResponse.groupInfo.numMembers;
        }
    });
});

module.exports = router;
