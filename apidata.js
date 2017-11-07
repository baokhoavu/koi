const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw/node-angular';

MongoClient.connect(MONGO_URL, (err, db) => {  
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('test').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});