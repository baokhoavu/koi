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
            console.log('Data here: ' + locals);
            res.render('data', {test: locals});
//            return locals.getGroupInfoResponse.groupInfo.numMembers;
        }
    });
});

module.exports = router;
