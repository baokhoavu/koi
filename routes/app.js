const request = require('request');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

//router.get('/alltables', function (req, res, next) {
//    const apiURL = 'https://secure2.convio.net/cfrca/site/SRGroupAPI?method=getGroupInfo&api_key=cfrca&login_name=apiadmin&login_password=welcome&v=1.0&response_format=json&group_id=225791';
//
//    request.get(apiURL, function(err, response, body) {
//        if (!err && response.statusCode == 200) {
//            var locals = JSON.parse(body);
//            res.render('data', {test: locals.getGroupInfoResponse.groupInfo.numMembers});
//            console.log(locals.getGroupInfoResponse.groupInfo.numMembers);
//        }
//    });
//});

module.exports = router;
