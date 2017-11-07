var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Test", address: "Highway 37" };
  db.collection("testcollection").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});