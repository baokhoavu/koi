/**
 * Vercel Serverless Function for /api/data endpoint
 * 
 * This serverless function replaces the Express.js API route for Vercel deployment.
 * It serves mock data for development/demo purposes.
 */

const moment = require('moment');

// Import mock data generator (we'll create a simplified version)
function getCurrentDynamicData() {
	// Simplified mock data structure
	return {
		conquercancer: {
			getEventTotal: {
				toronto: {
					to20: {
						donations: '$2,500,000.00',
						regfee: '$150,000.00',
						rfi: 850,
						crews: 120,
						riders: 450,
						virtual: 280
					},
					to19: {
						donations: '$2,200,000.00',
						regfee: '$140,000.00',
						rfi: 800,
						crews: 110,
						riders: 420,
						virtual: 270
					},
					to18: {
						donations: '$2,000,000.00',
						regfee: '$130,000.00',
						rfi: 750,
						crews: 100,
						riders: 400,
						virtual: 250
					},
					to17: {
						donations: '$1,800,000.00',
						regfee: '$120,000.00',
						rfi: 700,
						crews: 90,
						riders: 380,
						virtual: 230
					}
				},
				alberta: {
					ab20: {
						donations: '$1,200,000.00',
						regfee: '$80,000.00',
						rfi: 450,
						crews: 65,
						riders: 250,
						virtual: 135
					},
					ab19: {
						donations: '$1,100,000.00',
						regfee: '$75,000.00',
						rfi: 420,
						crews: 60,
						riders: 230,
						virtual: 130
					},
					ab18: {
						donations: '$1,000,000.00',
						regfee: '$70,000.00',
						rfi: 400,
						crews: 55,
						riders: 220,
						virtual: 125
					},
					ab17: {
						donations: '$900,000.00',
						regfee: '$65,000.00',
						rfi: 380,
						crews: 50,
						riders: 210,
						virtual: 120
					}
				},
				montreal: {
					mo19: {
						donations: '$800,000.00',
						regfee: '$60,000.00',
						rfi: 350,
						crews: 45,
						riders: 200,
						virtual: 105
					},
					mo18: {
						donations: '$750,000.00',
						regfee: '$55,000.00',
						rfi: 330,
						crews: 42,
						riders: 190,
						virtual: 98
					},
					mo17: {
						donations: '$700,000.00',
						regfee: '$50,000.00',
						rfi: 310,
						crews: 40,
						riders: 180,
						virtual: 90
					}
				},
				vancouver: {
					va20: {
						donations: '$950,000.00',
						regfee: '$68,000.00',
						rfi: 380,
						crews: 52,
						riders: 215,
						virtual: 113
					},
					va19: {
						donations: '$900,000.00',
						regfee: '$65,000.00',
						rfi: 360,
						crews: 50,
						riders: 205,
						virtual: 105
					},
					va18: {
						donations: '$850,000.00',
						regfee: '$62,000.00',
						rfi: 340,
						crews: 48,
						riders: 195,
						virtual: 97
					},
					va17: {
						donations: '$800,000.00',
						regfee: '$60,000.00',
						rfi: 320,
						crews: 45,
						riders: 185,
						virtual: 90
					}
				},
				perth: {
					pr19: {
						donations: '$600,000.00',
						regfee: '$45,000.00',
						rfi: 280,
						crews: 38,
						riders: 160,
						virtual: 82
					},
					pr18: {
						donations: '$550,000.00',
						regfee: '$42,000.00',
						rfi: 260,
						crews: 35,
						riders: 150,
						virtual: 75
					},
					pr17: {
						donations: '$500,000.00',
						regfee: '$40,000.00',
						rfi: 240,
						crews: 32,
						riders: 140,
						virtual: 68
					}
				}
			}
		},
		onewalk: {
			getEventTotal: {
				toronto: {
					owTo20: {
						donations: '$680,000.00',
						regfee: '$55,000.00',
						rfi: 350,
						crews: 48,
						walkers: 302
					},
					owTo19: {
						donations: '$620,000.00',
						regfee: '$50,000.00',
						rfi: 320,
						crews: 42,
						walkers: 278
					},
					owTo18: {
						donations: '$550,000.00',
						regfee: '$42,000.00',
						rfi: 280,
						crews: 36,
						walkers: 244
					},
					owTo17: {
						donations: '$450,000.00',
						regfee: '$35,000.00',
						rfi: 220,
						crews: 30,
						walkers: 190
					}
				}
			}
		},
		conquercancerAU: {
			getEventTotal: {
				melbourne: {
					ml19: {
						donations: '$700,000.00',
						regfee: '$52,000.00',
						rfi: 310,
						crews: 42,
						riders: 180,
						virtual: 88
					},
					ml18: {
						donations: '$650,000.00',
						regfee: '$50,000.00',
						rfi: 290,
						crews: 40,
						riders: 170,
						virtual: 80
					},
					ml17: {
						donations: '$600,000.00',
						regfee: '$48,000.00',
						rfi: 270,
						walkers: 150,
						riders: 120
					}
				}
			}
		},
		onedayAU: {
			getEventTotal: {
				brisbane: {
					br19: {
						donations: '$320,000.00',
						regfee: '$28,000.00',
						riders: 110,
						walkers: 95
					},
					br18: {
						donations: '$300,000.00',
						regfee: '$26,000.00',
						riders: 105,
						walkers: 90
					},
					br17: {
						donations: '$280,000.00',
						regfee: '$25,000.00',
						riders: 100,
						walkers: 85
					}
				}
			}
		}
	};
}

function getDailyIncrements() {
	// Simulated daily increments - in production these would be calculated from database
	return {
		to20RFIDaily: Math.floor(Math.random() * 10) + 5,
		to20RidersDaily: Math.floor(Math.random() * 8) + 3,
		to20VRDaily: Math.floor(Math.random() * 6) + 2,
		to20CrewDaily: Math.floor(Math.random() * 4) + 1,
		to20DonDaily: '$' + (Math.floor(Math.random() * 50000) + 10000).toLocaleString() + '.00',
		to20RegFeeDaily: '$' + (Math.floor(Math.random() * 5000) + 1000).toLocaleString() + '.00',
		
		ab20RFIDaily: Math.floor(Math.random() * 8) + 3,
		ab20RidersDaily: Math.floor(Math.random() * 6) + 2,
		ab20VRDaily: Math.floor(Math.random() * 5) + 1,
		ab20CrewDaily: Math.floor(Math.random() * 3) + 1,
		ab20DonDaily: '$' + (Math.floor(Math.random() * 30000) + 5000).toLocaleString() + '.00',
		ab20RegFeeDaily: '$' + (Math.floor(Math.random() * 3000) + 500).toLocaleString() + '.00',
		
		va20RFIDaily: Math.floor(Math.random() * 7) + 2,
		va20RidersDaily: Math.floor(Math.random() * 5) + 2,
		va20VRDaily: Math.floor(Math.random() * 4) + 1,
		va20CrewDaily: Math.floor(Math.random() * 3) + 1,
		va20DonDaily: '$' + (Math.floor(Math.random() * 25000) + 5000).toLocaleString() + '.00',
		va20RegFeeDaily: '$' + (Math.floor(Math.random() * 2500) + 500).toLocaleString() + '.00',
		
		// Add more as needed - simplified for demo
		mo19RFIDaily: Math.floor(Math.random() * 6) + 2,
		mo19RidersDaily: Math.floor(Math.random() * 5) + 1,
		mo19VRDaily: Math.floor(Math.random() * 3) + 1,
		mo19CrewDaily: Math.floor(Math.random() * 2) + 1,
		mo19DonDaily: '$' + (Math.floor(Math.random() * 20000) + 4000).toLocaleString() + '.00',
		mo19RegFeeDaily: '$' + (Math.floor(Math.random() * 2000) + 400).toLocaleString() + '.00',
		
		pr19RFIDaily: Math.floor(Math.random() * 5) + 2,
		pr19RidersDaily: Math.floor(Math.random() * 4) + 1,
		pr19VRDaily: Math.floor(Math.random() * 3) + 1,
		pr19CrewDaily: Math.floor(Math.random() * 2) + 1,
		pr19DonDaily: '$' + (Math.floor(Math.random() * 15000) + 3000).toLocaleString() + '.00',
		pr19RegFeeDaily: '$' + (Math.floor(Math.random() * 1500) + 300).toLocaleString() + '.00',
		
		ml19RFIDaily: Math.floor(Math.random() * 6) + 2,
		ml19RidersDaily: Math.floor(Math.random() * 4) + 1,
		ml19VRDaily: Math.floor(Math.random() * 3) + 1,
		ml19CrewDaily: Math.floor(Math.random() * 2) + 1,
		ml19DonDaily: '$' + (Math.floor(Math.random() * 18000) + 3500).toLocaleString() + '.00',
		ml19RegFeeDaily: '$' + (Math.floor(Math.random() * 1800) + 350).toLocaleString() + '.00',
		
		br19RidersDaily: Math.floor(Math.random() * 4) + 1,
		br19WalkersDaily: Math.floor(Math.random() * 3) + 1,
		br19DonDaily: '$' + (Math.floor(Math.random() * 10000) + 2000).toLocaleString() + '.00',
		br19RegDaily: '$' + (Math.floor(Math.random() * 1000) + 200).toLocaleString() + '.00',
		
		// OneWalk Toronto Daily Increments
		owTo20RFIDaily: Math.floor(Math.random() * 6) + 2,
		owTo20CrewsDaily: Math.floor(Math.random() * 3) + 1,
		owTo20WalkersDaily: Math.floor(Math.random() * 8) + 3,
		owTo20DonDaily: '$' + (Math.floor(Math.random() * 18000) + 4000).toLocaleString() + '.00',
		owTo20RegFeeDaily: '$' + (Math.floor(Math.random() * 1800) + 400).toLocaleString() + '.00',
		
		owTo19RFIDaily: Math.floor(Math.random() * 5) + 2,
		owTo19CrewsDaily: Math.floor(Math.random() * 2) + 1,
		owTo19WalkersDaily: Math.floor(Math.random() * 7) + 2,
		owTo19DonDaily: '$' + (Math.floor(Math.random() * 15000) + 3500).toLocaleString() + '.00',
		owTo19RegFeeDaily: '$' + (Math.floor(Math.random() * 1500) + 350).toLocaleString() + '.00',
		
		owTo18RFIDaily: Math.floor(Math.random() * 5) + 1,
		owTo18CrewsDaily: Math.floor(Math.random() * 2) + 1,
		owTo18WalkersDaily: Math.floor(Math.random() * 6) + 2,
		owTo18DonDaily: '$' + (Math.floor(Math.random() * 13000) + 3000).toLocaleString() + '.00',
		owTo18RegFeeDaily: '$' + (Math.floor(Math.random() * 1300) + 300).toLocaleString() + '.00',
		
		owTo17RFIDaily: Math.floor(Math.random() * 4) + 1,
		owTo17CrewsDaily: Math.floor(Math.random() * 2) + 1,
		owTo17WalkersDaily: Math.floor(Math.random() * 5) + 2,
		owTo17DonDaily: '$' + (Math.floor(Math.random() * 12000) + 2500).toLocaleString() + '.00',
		owTo17RegFeeDaily: '$' + (Math.floor(Math.random() * 1200) + 250).toLocaleString() + '.00',
		
		// Historical data (no daily increments, set to 0)
		to19RFIDaily: 0,
		to19RidersDaily: 0,
		to19VRDaily: 0,
		to19CrewDaily: 0,
		to19DonDaily: '$0.00',
		to19RegFeeDaily: '$0.00',
		
		to18RFIDaily: 0,
		to18RidersDaily: 0,
		to18VRDaily: 0,
		to18CrewDaily: 0,
		to18DonDaily: '$0.00',
		to18RegFeeDaily: '$0.00',
		
		to17RFIDaily: 0,
		to17RidersDaily: 0,
		to17VRDaily: 0,
		to17CrewDaily: 0,
		to17DonDaily: '$0.00',
		to17RegFeeDaily: '$0.00',
		
		ab19RFIDaily: 0,
		ab19RidersDaily: 0,
		ab19VRDaily: 0,
		ab19CrewDaily: 0,
		ab19DonDaily: '$0.00',
		ab19RegFeeDaily: '$0.00',
		
		ab18RFIDaily: 0,
		ab18RidersDaily: 0,
		ab18VRDaily: 0,
		ab18CrewDaily: 0,
		ab18DonDaily: '$0.00',
		ab18RegFeeDaily: '$0.00',
		
		ab17RFIDaily: 0,
		ab17RidersDaily: 0,
		ab17VRDaily: 0,
		ab17CrewDaily: 0,
		ab17DonDaily: '$0.00',
		ab17RegFeeDaily: '$0.00',
		
		va19RFIDaily: 0,
		va19RidersDaily: 0,
		va19VRDaily: 0,
		va19CrewDaily: 0,
		va19DonDaily: '$0.00',
		va19RegFeeDaily: '$0.00',
		
		va18RFIDaily: 0,
		va18RidersDaily: 0,
		va18VRDaily: 0,
		va18CrewDaily: 0,
		va18DonDaily: '$0.00',
		va18RegFeeDaily: '$0.00',
		
		va17RFIDaily: 0,
		va17RidersDaily: 0,
		va17VRDaily: 0,
		va17CrewDaily: 0,
		va17DonDaily: '$0.00',
		va17RegFeeDaily: '$0.00',
		
		mo18RFIDaily: 0,
		mo18RidersDaily: 0,
		mo18VRDaily: 0,
		mo18CrewDaily: 0,
		mo18DonDaily: '$0.00',
		mo18RegFeeDaily: '$0.00',
		
		mo17RFIDaily: 0,
		mo17RidersDaily: 0,
		mo17VRDaily: 0,
		mo17CrewDaily: 0,
		mo17DonDaily: '$0.00',
		mo17RegFeeDaily: '$0.00',
		
		pr18RFIDaily: 0,
		pr18RidersDaily: 0,
		pr18VRDaily: 0,
		pr18CrewDaily: 0,
		pr18DonDaily: '$0.00',
		pr18RegFeeDaily: '$0.00',
		
		pr17RFIDaily: 0,
		pr17RidersDaily: 0,
		pr17CrewDaily: 0,
		pr17DonDaily: '$0.00',
		pr17RegFeeDaily: '$0.00',
		
		ml18RFIDaily: 0,
		ml18RidersDaily: 0,
		ml18VRDaily: 0,
		ml18CrewDaily: 0,
		ml18DonDaily: '$0.00',
		ml18RegFeeDaily: '$0.00',
		
		ml17RidersDaily: 0,
		ml17WalkersDaily: 0,
		ml17DonDaily: '$0.00',
		ml17RegFeeDaily: '$0.00',
		
		br18RidersDaily: 0,
		br18WalkersDaily: 0,
		br18DonDaily: '$0.00',
		br18RegDaily: '$0.00',
		
		br17RidersDaily: 0,
		br17WalkersDaily: 0,
		br17DonDaily: '$0.00'
	};
}

module.exports = (req, res) => {
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	
	// Handle preflight
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	console.log('Vercel Serverless Function: Requesting data...');
	console.log('Using mock data for Vercel deployment...');

	try {
		const dynamicData = getCurrentDynamicData();
		const dailyIncrements = getDailyIncrements();

		const locals = dynamicData.conquercancer;
		const locals2 = dynamicData.onewalk;
		const locals3 = dynamicData.conquercancerAU;
		const locals4 = dynamicData.onedayAU;

		// Create mock response with all expected fields
		const mockResponse = {
			updated: moment().format('L'),
			
			// Toronto 2020
			to20Donations: locals.getEventTotal.toronto.to20.donations,
			to20RegFee: locals.getEventTotal.toronto.to20.regfee,
			to20RFI: locals.getEventTotal.toronto.to20.rfi,
			to20Crews: locals.getEventTotal.toronto.to20.crews,
			to20Riders: locals.getEventTotal.toronto.to20.riders,
			to20VR: locals.getEventTotal.toronto.to20.virtual,
			to20TotalParticipants: locals.getEventTotal.toronto.to20.riders + locals.getEventTotal.toronto.to20.virtual + locals.getEventTotal.toronto.to20.crews,
			to20RFIDaily: dailyIncrements.to20RFIDaily,
			to20RidersDaily: dailyIncrements.to20RidersDaily,
			to20VRDaily: dailyIncrements.to20VRDaily,
			to20CrewDaily: dailyIncrements.to20CrewDaily,
			to20DonDaily: dailyIncrements.to20DonDaily,
			to20RegFeeDaily: dailyIncrements.to20RegFeeDaily,

			// Toronto 2019
			to19Donations: locals.getEventTotal.toronto.to19.donations,
			to19RegFee: locals.getEventTotal.toronto.to19.regfee,
			to19RFI: locals.getEventTotal.toronto.to19.rfi,
			to19Crews: locals.getEventTotal.toronto.to19.crews,
			to19Riders: locals.getEventTotal.toronto.to19.riders,
			to19VR: locals.getEventTotal.toronto.to19.virtual,
			to19TotalParticipants: locals.getEventTotal.toronto.to19.riders + locals.getEventTotal.toronto.to19.virtual + locals.getEventTotal.toronto.to19.crews,
			to19RFIDaily: dailyIncrements.to19RFIDaily,
			to19RidersDaily: dailyIncrements.to19RidersDaily,
			to19VRDaily: dailyIncrements.to19VRDaily,
			to19CrewDaily: dailyIncrements.to19CrewDaily,
			to19DonDaily: dailyIncrements.to19DonDaily,
			to19RegFeeDaily: dailyIncrements.to19RegFeeDaily,

			// Toronto 2018
			to18Donations: locals.getEventTotal.toronto.to18.donations,
			to18RegFee: locals.getEventTotal.toronto.to18.regfee,
			to18RFI: locals.getEventTotal.toronto.to18.rfi,
			to18Crews: locals.getEventTotal.toronto.to18.crews,
			to18Riders: locals.getEventTotal.toronto.to18.riders,
			to18VR: locals.getEventTotal.toronto.to18.virtual,
			to18TotalParticipants: locals.getEventTotal.toronto.to18.riders + locals.getEventTotal.toronto.to18.virtual + locals.getEventTotal.toronto.to18.crews,
			to18RFIDaily: dailyIncrements.to18RFIDaily,
			to18RidersDaily: dailyIncrements.to18RidersDaily,
			to18VRDaily: dailyIncrements.to18VRDaily,
			to18CrewDaily: dailyIncrements.to18CrewDaily,
			to18DonDaily: dailyIncrements.to18DonDaily,
			to18RegFeeDaily: dailyIncrements.to18RegFeeDaily,

			// Toronto 2017
			to17Donations: locals.getEventTotal.toronto.to17.donations,
			to17RegFee: locals.getEventTotal.toronto.to17.regfee,
			to17RFI: locals.getEventTotal.toronto.to17.rfi,
			to17Crews: locals.getEventTotal.toronto.to17.crews,
			to17Riders: locals.getEventTotal.toronto.to17.riders,
			to17VR: locals.getEventTotal.toronto.to17.virtual,
			to17TotalParticipants: locals.getEventTotal.toronto.to17.riders + locals.getEventTotal.toronto.to17.virtual + locals.getEventTotal.toronto.to17.crews,
			to17RFIDaily: dailyIncrements.to17RFIDaily,
			to17RidersDaily: dailyIncrements.to17RidersDaily,
			to17VRDaily: dailyIncrements.to17VRDaily,
			to17CrewDaily: dailyIncrements.to17CrewDaily,
			to17DonDaily: dailyIncrements.to17DonDaily,
			to17RegFeeDaily: dailyIncrements.to17RegFeeDaily,

			// Alberta 2020
			ab20Donations: locals.getEventTotal.alberta.ab20.donations,
			ab20RegFee: locals.getEventTotal.alberta.ab20.regfee,
			ab20RFI: locals.getEventTotal.alberta.ab20.rfi,
			ab20Crews: locals.getEventTotal.alberta.ab20.crews,
			ab20Riders: locals.getEventTotal.alberta.ab20.riders,
			ab20VR: locals.getEventTotal.alberta.ab20.virtual,
			ab20TotalParticipants: locals.getEventTotal.alberta.ab20.riders + locals.getEventTotal.alberta.ab20.virtual + locals.getEventTotal.alberta.ab20.crews,
			ab20RFIDaily: dailyIncrements.ab20RFIDaily,
			ab20RidersDaily: dailyIncrements.ab20RidersDaily,
			ab20VRDaily: dailyIncrements.ab20VRDaily,
			ab20CrewDaily: dailyIncrements.ab20CrewDaily,
			ab20DonDaily: dailyIncrements.ab20DonDaily,
			ab20RegFeeDaily: dailyIncrements.ab20RegFeeDaily,

			// Alberta 2019
			ab19Donations: locals.getEventTotal.alberta.ab19.donations,
			ab19RegFee: locals.getEventTotal.alberta.ab19.regfee,
			ab19RFI: locals.getEventTotal.alberta.ab19.rfi,
			ab19Crews: locals.getEventTotal.alberta.ab19.crews,
			ab19Riders: locals.getEventTotal.alberta.ab19.riders,
			ab19VR: locals.getEventTotal.alberta.ab19.virtual,
			ab19TotalParticipants: locals.getEventTotal.alberta.ab19.riders + locals.getEventTotal.alberta.ab19.virtual + locals.getEventTotal.alberta.ab19.crews,
			ab19RFIDaily: dailyIncrements.ab19RFIDaily,
			ab19RidersDaily: dailyIncrements.ab19RidersDaily,
			ab19VRDaily: dailyIncrements.ab19VRDaily,
			ab19CrewDaily: dailyIncrements.ab19CrewDaily,
			ab19DonDaily: dailyIncrements.ab19DonDaily,
			ab19RegFeeDaily: dailyIncrements.ab19RegFeeDaily,

			// Alberta 2018
			ab18Donations: locals.getEventTotal.alberta.ab18.donations,
			ab18RegFee: locals.getEventTotal.alberta.ab18.regfee,
			ab18RFI: locals.getEventTotal.alberta.ab18.rfi,
			ab18Crews: locals.getEventTotal.alberta.ab18.crews,
			ab18Riders: locals.getEventTotal.alberta.ab18.riders,
			ab18VR: locals.getEventTotal.alberta.ab18.virtual,
			ab18TotalParticipants: locals.getEventTotal.alberta.ab18.riders + locals.getEventTotal.alberta.ab18.virtual + locals.getEventTotal.alberta.ab18.crews,
			ab18RFIDaily: dailyIncrements.ab18RFIDaily,
			ab18RidersDaily: dailyIncrements.ab18RidersDaily,
			ab18VRDaily: dailyIncrements.ab18VRDaily,
			ab18CrewDaily: dailyIncrements.ab18CrewDaily,
			ab18DonDaily: dailyIncrements.ab18DonDaily,
			ab18RegFeeDaily: dailyIncrements.ab18RegFeeDaily,

			// Alberta 2017
			ab17Donations: locals.getEventTotal.alberta.ab17.donations,
			ab17RegFee: locals.getEventTotal.alberta.ab17.regfee,
			ab17RFI: locals.getEventTotal.alberta.ab17.rfi,
			ab17Crews: locals.getEventTotal.alberta.ab17.crews,
			ab17Riders: locals.getEventTotal.alberta.ab17.riders,
			ab17VR: locals.getEventTotal.alberta.ab17.virtual,
			ab17TotalParticipants: locals.getEventTotal.alberta.ab17.riders + locals.getEventTotal.alberta.ab17.virtual + locals.getEventTotal.alberta.ab17.crews,
			ab17RFIDaily: dailyIncrements.ab17RFIDaily,
			ab17RidersDaily: dailyIncrements.ab17RidersDaily,
			ab17VRDaily: dailyIncrements.ab17VRDaily,
			ab17CrewDaily: dailyIncrements.ab17CrewDaily,
			ab17DonDaily: dailyIncrements.ab17DonDaily,
			ab17RegFeeDaily: dailyIncrements.ab17RegFeeDaily,

			// Montreal 2019
			mo19Donations: locals.getEventTotal.montreal.mo19.donations,
			mo19RegFee: locals.getEventTotal.montreal.mo19.regfee,
			mo19RFI: locals.getEventTotal.montreal.mo19.rfi,
			mo19Crews: locals.getEventTotal.montreal.mo19.crews,
			mo19Riders: locals.getEventTotal.montreal.mo19.riders,
			mo19VR: locals.getEventTotal.montreal.mo19.virtual,
			mo19TotalParticipants: locals.getEventTotal.montreal.mo19.riders + locals.getEventTotal.montreal.mo19.virtual + locals.getEventTotal.montreal.mo19.crews,
			mo19RFIDaily: dailyIncrements.mo19RFIDaily,
			mo19RidersDaily: dailyIncrements.mo19RidersDaily,
			mo19VRDaily: dailyIncrements.mo19VRDaily,
			mo19CrewDaily: dailyIncrements.mo19CrewDaily,
			mo19DonDaily: dailyIncrements.mo19DonDaily,
			mo19RegFeeDaily: dailyIncrements.mo19RegFeeDaily,

			// Montreal 2018
			mo18Donations: locals.getEventTotal.montreal.mo18.donations,
			mo18RegFee: locals.getEventTotal.montreal.mo18.regfee,
			mo18RFI: locals.getEventTotal.montreal.mo18.rfi,
			mo18Crews: locals.getEventTotal.montreal.mo18.crews,
			mo18Riders: locals.getEventTotal.montreal.mo18.riders,
			mo18VR: locals.getEventTotal.montreal.mo18.virtual,
			mo18TotalParticipants: locals.getEventTotal.montreal.mo18.riders + locals.getEventTotal.montreal.mo18.virtual + locals.getEventTotal.montreal.mo18.crews,
			mo18RFIDaily: dailyIncrements.mo18RFIDaily,
			mo18RidersDaily: dailyIncrements.mo18RidersDaily,
			mo18VRDaily: dailyIncrements.mo18VRDaily,
			mo18CrewDaily: dailyIncrements.mo18CrewDaily,
			mo18DonDaily: dailyIncrements.mo18DonDaily,
			mo18RegFeeDaily: dailyIncrements.mo18RegFeeDaily,

			// Montreal 2017
			mo17Donations: locals.getEventTotal.montreal.mo17.donations,
			mo17RegFee: locals.getEventTotal.montreal.mo17.regfee,
			mo17RFI: locals.getEventTotal.montreal.mo17.rfi,
			mo17Crews: locals.getEventTotal.montreal.mo17.crews,
			mo17Riders: locals.getEventTotal.montreal.mo17.riders,
			mo17VR: locals.getEventTotal.montreal.mo17.virtual,
			mo17TotalParticipants: locals.getEventTotal.montreal.mo17.riders + locals.getEventTotal.montreal.mo17.virtual + locals.getEventTotal.montreal.mo17.crews,
			mo17RFIDaily: dailyIncrements.mo17RFIDaily,
			mo17RidersDaily: dailyIncrements.mo17RidersDaily,
			mo17VRDaily: dailyIncrements.mo17VRDaily,
			mo17CrewDaily: dailyIncrements.mo17CrewDaily,
			mo17DonDaily: dailyIncrements.mo17DonDaily,
			mo17RegFeeDaily: dailyIncrements.mo17RegFeeDaily,

			// Vancouver 2020
			va20Donations: locals.getEventTotal.vancouver.va20.donations,
			va20RegFee: locals.getEventTotal.vancouver.va20.regfee,
			va20RFI: locals.getEventTotal.vancouver.va20.rfi,
			va20Crews: locals.getEventTotal.vancouver.va20.crews,
			va20Riders: locals.getEventTotal.vancouver.va20.riders,
			va20VR: locals.getEventTotal.vancouver.va20.virtual,
			va20TotalParticipants: locals.getEventTotal.vancouver.va20.riders + locals.getEventTotal.vancouver.va20.virtual + locals.getEventTotal.vancouver.va20.crews,
			va20RFIDaily: dailyIncrements.va20RFIDaily,
			va20RidersDaily: dailyIncrements.va20RidersDaily,
			va20VRDaily: dailyIncrements.va20VRDaily,
			va20CrewDaily: dailyIncrements.va20CrewDaily,
			va20DonDaily: dailyIncrements.va20DonDaily,
			va20RegFeeDaily: dailyIncrements.va20RegFeeDaily,

			// Vancouver 2019
			va19Donations: locals.getEventTotal.vancouver.va19.donations,
			va19RegFee: locals.getEventTotal.vancouver.va19.regfee,
			va19RFI: locals.getEventTotal.vancouver.va19.rfi,
			va19Crews: locals.getEventTotal.vancouver.va19.crews,
			va19Riders: locals.getEventTotal.vancouver.va19.riders,
			va19VR: locals.getEventTotal.vancouver.va19.virtual,
			va19TotalParticipants: locals.getEventTotal.vancouver.va19.riders + locals.getEventTotal.vancouver.va19.virtual + locals.getEventTotal.vancouver.va19.crews,
			va19RFIDaily: dailyIncrements.va19RFIDaily,
			va19RidersDaily: dailyIncrements.va19RidersDaily,
			va19VRDaily: dailyIncrements.va19VRDaily,
			va19CrewDaily: dailyIncrements.va19CrewDaily,
			va19DonDaily: dailyIncrements.va19DonDaily,
			va19RegFeeDaily: dailyIncrements.va19RegFeeDaily,

			// Vancouver 2018
			va18Donations: locals.getEventTotal.vancouver.va18.donations,
			va18RegFee: locals.getEventTotal.vancouver.va18.regfee,
			va18RFI: locals.getEventTotal.vancouver.va18.rfi,
			va18Crews: locals.getEventTotal.vancouver.va18.crews,
			va18Riders: locals.getEventTotal.vancouver.va18.riders,
			va18VR: locals.getEventTotal.vancouver.va18.virtual,
			va18TotalParticipants: locals.getEventTotal.vancouver.va18.riders + locals.getEventTotal.vancouver.va18.virtual + locals.getEventTotal.vancouver.va18.crews,
			va18RFIDaily: dailyIncrements.va18RFIDaily,
			va18RidersDaily: dailyIncrements.va18RidersDaily,
			va18VRDaily: dailyIncrements.va18VRDaily,
			va18CrewDaily: dailyIncrements.va18CrewDaily,
			va18DonDaily: dailyIncrements.va18DonDaily,
			va18RegFeeDaily: dailyIncrements.va18RegFeeDaily,

			// Vancouver 2017
			va17Donations: locals.getEventTotal.vancouver.va17.donations,
			va17RegFee: locals.getEventTotal.vancouver.va17.regfee,
			va17RFI: locals.getEventTotal.vancouver.va17.rfi,
			va17Crews: locals.getEventTotal.vancouver.va17.crews,
			va17Riders: locals.getEventTotal.vancouver.va17.riders,
			va17VR: locals.getEventTotal.vancouver.va17.virtual,
			va17TotalParticipants: locals.getEventTotal.vancouver.va17.riders + locals.getEventTotal.vancouver.va17.virtual + locals.getEventTotal.vancouver.va17.crews,
			va17RFIDaily: dailyIncrements.va17RFIDaily,
			va17RidersDaily: dailyIncrements.va17RidersDaily,
			va17VRDaily: dailyIncrements.va17VRDaily,
			va17CrewDaily: dailyIncrements.va17CrewDaily,
			va17DonDaily: dailyIncrements.va17DonDaily,
			va17RegFeeDaily: dailyIncrements.va17RegFeeDaily,

			// Perth 2019
			pr19Donations: locals.getEventTotal.perth.pr19.donations,
			pr19RegFee: locals.getEventTotal.perth.pr19.regfee,
			pr19RFI: locals.getEventTotal.perth.pr19.rfi,
			pr19Crews: locals.getEventTotal.perth.pr19.crews,
			pr19Riders: locals.getEventTotal.perth.pr19.riders,
			pr19VR: locals.getEventTotal.perth.pr19.virtual,
			pr19TotalParticipants: locals.getEventTotal.perth.pr19.riders + locals.getEventTotal.perth.pr19.virtual + locals.getEventTotal.perth.pr19.crews,
			pr19RFIDaily: dailyIncrements.pr19RFIDaily,
			pr19RidersDaily: dailyIncrements.pr19RidersDaily,
			pr19VRDaily: dailyIncrements.pr19VRDaily,
			pr19CrewDaily: dailyIncrements.pr19CrewDaily,
			pr19DonDaily: dailyIncrements.pr19DonDaily,
			pr19RegFeeDaily: dailyIncrements.pr19RegFeeDaily,

			// Perth 2018
			pr18Donations: locals.getEventTotal.perth.pr18.donations,
			pr18RegFee: locals.getEventTotal.perth.pr18.regfee,
			pr18RFI: locals.getEventTotal.perth.pr18.rfi,
			pr18Crews: locals.getEventTotal.perth.pr18.crews,
			pr18Riders: locals.getEventTotal.perth.pr18.riders,
			pr18VR: locals.getEventTotal.perth.pr18.virtual,
			pr18TotalParticipants: locals.getEventTotal.perth.pr18.riders + locals.getEventTotal.perth.pr18.virtual + locals.getEventTotal.perth.pr18.crews,
			pr18RFIDaily: dailyIncrements.pr18RFIDaily,
			pr18RidersDaily: dailyIncrements.pr18RidersDaily,
			pr18VRDaily: 0,
			pr18CrewDaily: dailyIncrements.pr18CrewDaily,
			pr18DonDaily: dailyIncrements.pr18DonDaily,
			pr18RegFeeDaily: dailyIncrements.pr18RegFeeDaily,

			// Perth 2017
			pr17Donations: locals.getEventTotal.perth.pr17.donations,
			pr17RegFee: locals.getEventTotal.perth.pr17.regfee,
			pr17RFI: locals.getEventTotal.perth.pr17.rfi,
			pr17Crews: locals.getEventTotal.perth.pr17.crews,
			pr17Riders: locals.getEventTotal.perth.pr17.riders,
			pr17VR: 0,
			pr17TotalParticipants: locals.getEventTotal.perth.pr17.riders + locals.getEventTotal.perth.pr17.crews,
			pr17RFIDaily: dailyIncrements.pr17RFIDaily,
			pr17RidersDaily: dailyIncrements.pr17RidersDaily,
			pr17CrewDaily: dailyIncrements.pr17CrewDaily,
			pr17DonDaily: dailyIncrements.pr17DonDaily,
			pr17RegFeeDaily: dailyIncrements.pr17RegFeeDaily,

			// Melbourne 2019
			ml19Donations: locals3.getEventTotal.melbourne.ml19.donations,
			ml19RegFee: locals3.getEventTotal.melbourne.ml19.regfee,
			ml19RFI: locals3.getEventTotal.melbourne.ml19.rfi,
			ml19Crews: locals3.getEventTotal.melbourne.ml19.crews,
			ml19Riders: locals3.getEventTotal.melbourne.ml19.riders,
			ml19VR: locals3.getEventTotal.melbourne.ml19.virtual,
			ml19TotalParticipants: locals3.getEventTotal.melbourne.ml19.riders + locals3.getEventTotal.melbourne.ml19.virtual + locals3.getEventTotal.melbourne.ml19.crews,
			ml19RFIDaily: dailyIncrements.ml19RFIDaily,
			ml19RidersDaily: dailyIncrements.ml19RidersDaily,
			ml19VRDaily: dailyIncrements.ml19VRDaily,
			ml19CrewDaily: dailyIncrements.ml19CrewDaily,
			ml19DonDaily: dailyIncrements.ml19DonDaily,
			ml19RegFeeDaily: dailyIncrements.ml19RegFeeDaily,

			// Melbourne 2018
			ml18Donations: locals3.getEventTotal.melbourne.ml18.donations,
			ml18RegFee: locals3.getEventTotal.melbourne.ml18.regfee,
			ml18RFI: locals3.getEventTotal.melbourne.ml18.rfi,
			ml18Crews: locals3.getEventTotal.melbourne.ml18.crews,
			ml18Riders: locals3.getEventTotal.melbourne.ml18.riders,
			ml18VR: locals3.getEventTotal.melbourne.ml18.virtual,
			ml18TotalParticipants: locals3.getEventTotal.melbourne.ml18.riders + locals3.getEventTotal.melbourne.ml18.virtual + locals3.getEventTotal.melbourne.ml18.crews,
			ml18RFIDaily: dailyIncrements.ml18RFIDaily,
			ml18RidersDaily: dailyIncrements.ml18RidersDaily,
			ml18VRDaily: dailyIncrements.ml18VRDaily,
			ml18CrewDaily: dailyIncrements.ml18CrewDaily,
			ml18DonDaily: dailyIncrements.ml18DonDaily,
			ml18RegFeeDaily: dailyIncrements.ml18RegFeeDaily,

			// Melbourne 2017
			ml17Donations: locals3.getEventTotal.melbourne.ml17.donations,
			ml17RegFee: locals3.getEventTotal.melbourne.ml17.regfee,
			ml17Riders: locals3.getEventTotal.melbourne.ml17.riders,
			ml17Walkers: locals3.getEventTotal.melbourne.ml17.walkers,
			ml17TotalParticipants: locals3.getEventTotal.melbourne.ml17.riders + locals3.getEventTotal.melbourne.ml17.walkers,
			ml17RidersDaily: dailyIncrements.ml17RidersDaily,
			ml17WalkersDaily: dailyIncrements.ml17WalkersDaily,
			ml17DonDaily: dailyIncrements.ml17DonDaily,
			ml17RegFeeDaily: dailyIncrements.ml17RegFeeDaily,

			// Brisbane 2019
			br19Donations: locals4.getEventTotal.brisbane.br19.donations,
			br19RegFee: locals4.getEventTotal.brisbane.br19.regfee,
			br19Riders: locals4.getEventTotal.brisbane.br19.riders,
			br19Walkers: locals4.getEventTotal.brisbane.br19.walkers,
			br19TotalParticipants: locals4.getEventTotal.brisbane.br19.riders + locals4.getEventTotal.brisbane.br19.walkers,
			br19RidersDaily: dailyIncrements.br19RidersDaily,
			br19WalkersDaily: dailyIncrements.br19WalkersDaily,
			br19DonDaily: dailyIncrements.br19DonDaily,
			br19RegDaily: dailyIncrements.br19RegDaily,

			// Brisbane 2018
			br18Donations: locals4.getEventTotal.brisbane.br18.donations,
			br18RegFee: locals4.getEventTotal.brisbane.br18.regfee,
			br18Riders: locals4.getEventTotal.brisbane.br18.riders,
			br18Walkers: locals4.getEventTotal.brisbane.br18.walkers,
			br18TotalParticipants: locals4.getEventTotal.brisbane.br18.riders + locals4.getEventTotal.brisbane.br18.walkers,
			br18RidersDaily: dailyIncrements.br18RidersDaily,
			br18WalkersDaily: dailyIncrements.br18WalkersDaily,
			br18DonDaily: dailyIncrements.br18DonDaily,
			br18RegDaily: dailyIncrements.br18RegDaily,

			// Brisbane 2017
			br17Donations: locals4.getEventTotal.brisbane.br17.donations,
			br17RegFee: locals4.getEventTotal.brisbane.br17.regfee,
			br17Riders: locals4.getEventTotal.brisbane.br17.riders,
			br17Walkers: locals4.getEventTotal.brisbane.br17.walkers,
			br17TotalParticipants: locals4.getEventTotal.brisbane.br17.riders + locals4.getEventTotal.brisbane.br17.walkers,
			br17RidersDaily: dailyIncrements.br17RidersDaily,
			br17WalkersDaily: dailyIncrements.br17WalkersDaily,
			br17DonDaily: dailyIncrements.br17DonDaily,

			// OneWalk Toronto 2020
			owTo20Donations: locals2.getEventTotal.toronto.owTo20.donations,
			owTo20RegFee: locals2.getEventTotal.toronto.owTo20.regfee,
			owTo20RFI: locals2.getEventTotal.toronto.owTo20.rfi,
			owTo20Crews: locals2.getEventTotal.toronto.owTo20.crews,
			owTo20Walkers: locals2.getEventTotal.toronto.owTo20.walkers,
			owTo20TotalParticipants: locals2.getEventTotal.toronto.owTo20.walkers + locals2.getEventTotal.toronto.owTo20.crews,
			owTo20RFIDaily: dailyIncrements.owTo20RFIDaily,
			owTo20CrewsDaily: dailyIncrements.owTo20CrewsDaily,
			owTo20WalkersDaily: dailyIncrements.owTo20WalkersDaily,
			owTo20DonDaily: dailyIncrements.owTo20DonDaily,
			owTo20RegFeeDaily: dailyIncrements.owTo20RegFeeDaily,
			
			// OneWalk Toronto 2019
			owTo19Donations: locals2.getEventTotal.toronto.owTo19.donations,
			owTo19RegFee: locals2.getEventTotal.toronto.owTo19.regfee,
			owTo19RFI: locals2.getEventTotal.toronto.owTo19.rfi,
			owTo19Crews: locals2.getEventTotal.toronto.owTo19.crews,
			owTo19Walkers: locals2.getEventTotal.toronto.owTo19.walkers,
			owTo19TotalParticipants: locals2.getEventTotal.toronto.owTo19.walkers + locals2.getEventTotal.toronto.owTo19.crews,
			owTo19RFIDaily: dailyIncrements.owTo19RFIDaily,
			owTo19CrewsDaily: dailyIncrements.owTo19CrewsDaily,
			owTo19WalkersDaily: dailyIncrements.owTo19WalkersDaily,
			owTo19DonDaily: dailyIncrements.owTo19DonDaily,
			owTo19RegFeeDaily: dailyIncrements.owTo19RegFeeDaily,
			
			// OneWalk Toronto 2018
			owTo18Donations: locals2.getEventTotal.toronto.owTo18.donations,
			owTo18RegFee: locals2.getEventTotal.toronto.owTo18.regfee,
			owTo18RFI: locals2.getEventTotal.toronto.owTo18.rfi,
			owTo18Crews: locals2.getEventTotal.toronto.owTo18.crews,
			owTo18Walkers: locals2.getEventTotal.toronto.owTo18.walkers,
			owTo18TotalParticipants: locals2.getEventTotal.toronto.owTo18.walkers + locals2.getEventTotal.toronto.owTo18.crews,
			owTo18RFIDaily: dailyIncrements.owTo18RFIDaily,
			owTo18CrewsDaily: dailyIncrements.owTo18CrewsDaily,
			owTo18WalkersDaily: dailyIncrements.owTo18WalkersDaily,
			owTo18DonDaily: dailyIncrements.owTo18DonDaily,
			owTo18RegFeeDaily: dailyIncrements.owTo18RegFeeDaily,
			
			// OneWalk Toronto 2017
			owTo17Donations: locals2.getEventTotal.toronto.owTo17.donations,
			owTo17RegFee: locals2.getEventTotal.toronto.owTo17.regfee,
			owTo17RFI: locals2.getEventTotal.toronto.owTo17.rfi,
			owTo17Crews: locals2.getEventTotal.toronto.owTo17.crews,
			owTo17Walkers: locals2.getEventTotal.toronto.owTo17.walkers,
			owTo17TotalParticipants: locals2.getEventTotal.toronto.owTo17.walkers + locals2.getEventTotal.toronto.owTo17.crews,
			owTo17RFIDaily: dailyIncrements.owTo17RFIDaily,
			owTo17CrewsDaily: dailyIncrements.owTo17CrewsDaily,
			owTo17WalkersDaily: dailyIncrements.owTo17WalkersDaily,
			owTo17DonDaily: dailyIncrements.owTo17DonDaily,
			owTo17RegFeeDaily: dailyIncrements.owTo17RegFeeDaily,
		};

		console.log('Vercel Serverless: Returning mock data to client');
		return res.status(200).json(mockResponse);
	} catch (err) {
		console.error('Vercel Serverless: Error getting data:', err);
		return res.status(500).json({ error: 'Error fetching data', message: err.message });
	}
};
