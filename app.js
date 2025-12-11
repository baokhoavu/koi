require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes = require('./routes/user');
var apiRoutes = require('./routes/api');

var app = express();

//mongoose.connect('localhost:27017/node-angular');

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// MongoDB Configuration
mongoose.Promise = require('bluebird');

// MongoDB connection temporarily disabled - using mock data for development
// To re-enable: uncomment below and ensure MONGODB_URI is set in .env
// var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/koi';
// mongoose.connect(mongodbUri)
// 	.then(function (db) {
// 		console.log('MongoDB connected successfully');
// 	})
// 	.catch(function (err) {
// 		console.error('MongoDB connection error:', err);
// 	});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from dist (Vite build output) in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'dist')));
} else {
	// In development, public folder for any static assets
	app.use(express.static(path.join(__dirname, 'public')));
}

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/api', apiRoutes);

// For production: serve the built Angular app
// For development: Vite dev server handles this on port 3000
if (process.env.NODE_ENV === 'production') {
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});
} else {
	// In development, fall back to appRoutes which renders the view
	app.use('/', appRoutes);
	
	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
		return res.render('index');
	});
}

module.exports = app;
