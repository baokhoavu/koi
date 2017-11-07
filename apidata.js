var mongoose = require('mongoose');
const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});

mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

var db = mongoose.connection;

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    updated: { type: Date, default: Date.now },
    to18Donations: String,
    mo18Donations: String
});

var ApiData = mongoose.model("ApiData", dataSchema);




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
                                    
                                    var Toronto = new ApiData({
                                        updated: new Date,
                                        to18Donations: locals.getEventTotal.toronto.to18.totalDonation,
                                        mo18Donations: locals.getEventTotal.toronto.mo18.totalDonation
                                    });

                                    Toronto.save(function(error) {
                                        console.log("Your test has been saved!");
                                        if (error) {
                                            console.error(error);
                                        }
                                    });
                                }
                            });

                        }
                    });
                }
            });
        }
    });