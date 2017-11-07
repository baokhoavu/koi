var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular');

var db = mongoose.connection;

var Schema = mongoose.Schema;

var dataSchema = new Schema({
    toronto: String,
    updated: { type: Date, default: Date.now },
    montreal: String
});

var ApiData = mongoose.model("ApiData", dataSchema);


var Toronto = new ApiData({
     toronto: "Scruffy",
     updated: new Date,
     montreal: "Bombus"
});

Toronto.save(function(error) {
    console.log("Your test has been saved!");
    if (error) {
        console.error(error);
    }
});