const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});
var express = require('express');
var router = express.Router();

router.post('/apidata', function (req, res, next) {
    
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
                                    
                                    locals.save();
                                    locals2.save();
                                    locals3.save();
                                    locals4.save();
                                    
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});