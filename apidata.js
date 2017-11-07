var mongoose = require('mongoose');
const request = require('request');
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});

mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

var db = mongoose.connection;

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    updated: { type: Date, default: Date.now },
    to18Donations: String,
    to18RegFee: String,
    to18Crews: String,
    to18RFI: String,
    to18Riders: String,
    mo18Donations: String,
    mo18RegFee: String,
    mo18Crews: String,
    mo18RFI: String,
    mo18Riders: String,
    ab18Donations: String,
    ab18RegFee: String,
    ab18Crews: String,
    ab18RFI: String,
    ab18Riders: String,
    va18Donations: String,
    va18RegFee: String,
    va18Crews: String,
    va18RFI: String,
    va18Riders: String
    
}, {versionKey: false});

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
                                        to18RegFee: locals.getEventTotal.toronto.to18.regFee,
                                        to18Crews: locals.getEventTotal.toronto.to18.crews,
                                        to18RFI: locals.getEventTotal.toronto.to18.rfi,
                                        to18Riders: locals.getEventTotal.toronto.to18.riders,
                                        mo18Donations: locals.getEventTotal.montreal.mo18.totalDonation,
                                        mo18RegFee: locals.getEventTotal.montreal.mo18.regFee,
                                        mo18Crews: locals.getEventTotal.montreal.mo18.crews,
                                        mo18RFI: locals.getEventTotal.montreal.mo18.rfi,
                                        mo18Riders: locals.getEventTotal.montreal.mo18.riders,
                                        ab18Donations: locals.getEventTotal.alberta.ab18.totalDonation,
                                        ab18RegFee: locals.getEventTotal.alberta.ab18.regFee,
                                        ab18Crews: locals.getEventTotal.alberta.ab18.crews,
                                        ab18RFI: locals.getEventTotal.alberta.ab18.rfi,
                                        ab18Riders: locals.getEventTotal.alberta.ab18.riders,
                                        va18Donations: locals.getEventTotal.vancouver.va18.totalDonation,
                                        va18RegFee: locals.getEventTotal.vancouver.va18.regFee,
                                        va18Crews: locals.getEventTotal.vancouver.va18.crews,
                                        va18RFI: locals.getEventTotal.vancouver.va18.rfi,
                                        va18Riders: locals.getEventTotal.vancouver.va18.riders
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