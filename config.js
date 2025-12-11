// config.js - Central configuration file
require('dotenv').config();

module.exports = {
	// MongoDB Configuration
	mongodb: {
		uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/koi',
	},

	// API URLs
	apis: {
		conquerCancerCA:
			process.env.API_CONQUERCANCER_CA ||
			'http://www.conquercancer.ca/site/PageServer?pagename=2018_api_data&pgwrap=n',
		oneWalkCA:
			process.env.API_ONEWALK_CA ||
			'http://secure.weekendtoconquercancer.ca/site/PageServer?pagename=api_data&pgwrap=n',
		conquerCancerAU:
			process.env.API_CONQUERCANCER_AU ||
			'http://www.conquercancer.org.au/site/PageServer?pagename=api_data&pgwrap=n',
		oneDayAU:
			process.env.API_ONEDAY_AU ||
			'http://participate.theoneday.org.au/site/PageServer?pagename=api_data&pgwrap=n',
	},

	// Server Configuration
	server: {
		port: process.env.PORT || 3000,
		env: process.env.NODE_ENV || 'development',
	},

	// Frontend Configuration
	frontend: {
		apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
	},

	// Optional Proxy
	proxy: {
		url: process.env.FIXIE_URL || null,
	},
};
