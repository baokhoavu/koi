// Mock data for API responses with DYNAMIC REAL-TIME UPDATES
// This data structure mirrors the actual API responses from external services
// and supports filtering by locale (Toronto, Montreal, Alberta, Vancouver, Perth, Melbourne, Brisbane, OneWalk Toronto)
// Total donations across all events: ~$850M (ranging between $600M-$1B target)
//
// REAL-TIME SIMULATION:
// - Daily values increment randomly every few seconds to simulate live data
// - Totals are automatically calculated and updated based on daily increments
// - Random ranges are used instead of static values for more realistic variation

// Helper function to generate random increment within a range
function randomIncrement(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate random dollar increment
function randomDollarIncrement(min, max) {
	const amount = (Math.random() * (max - min) + min).toFixed(2);
	return parseFloat(amount);
}

// Helper function to format currency
function formatCurrency(amount) {
	return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Helper function to parse currency string to number
function parseCurrency(currencyString) {
	return parseFloat(currencyString.replace(/[$,]/g, ''));
}

const mockApiData = {
	conquercancer: {
		getEventTotal: {
			toronto: {
				to20: {
					donations: '$125,847,923.50',
					regfee: '$8,945,620.00',
					rfi: 4850,
					crews: 680,
					riders: 5420,
					riders2: 1250,
					virtual: 850,
					oneday: 520,
					oneday2: 345
				},
				to19: {
					donations: '$118,234,876.75',
					regfee: '$8,234,150.00',
					rfi: 4620,
					crews: 645,
					riders: 5180,
					riders2: 1185,
					virtual: 790,
					oneday: 485,
					oneday2: 320
				},
				to18: {
					donations: '$112,456,789.25',
					regfee: '$7,856,420.00',
					rfi: 4420,
					crews: 615,
					riders: 4950,
					riders2: 1120,
					virtual: 735,
					oneday: 458,
					oneday2: 298
				},
				to17: {
					donations: '$106,789,234.00',
					regfee: '$7,456,890.00',
					rfi: 4180,
					crews: 590,
					riders: 4720,
					riders2: 1065,
					virtual: 680,
					oneday: 425,
					oneday2: 275
				}
			},
			montreal: {
				mo20: {
					donations: '$89,456,234.80',
					regfee: '$6,234,780.00',
					rfi: 3580,
					crews: 485,
					riders: 4120,
					riders2: 920,
					virtual: 615,
					oneday: 385,
					oneday2: 248
				},
				mo19: {
					donations: '$84,123,567.40',
					regfee: '$5,845,230.00',
					rfi: 3380,
					crews: 458,
					riders: 3890,
					riders2: 875,
					virtual: 580,
					oneday: 362,
					oneday2: 230
				},
				mo18: {
					donations: '$79,876,543.60',
					regfee: '$5,567,920.00',
					rfi: 3220,
					crews: 438,
					riders: 3720,
					riders2: 835,
					virtual: 548,
					oneday: 342,
					oneday2: 218
				},
				mo17: {
					donations: '$75,234,876.20',
					regfee: '$5,234,560.00',
					rfi: 3050,
					crews: 415,
					riders: 3540,
					riders2: 795,
					virtual: 515,
					oneday: 320,
					oneday2: 205
				}
			},
			alberta: {
				ab20: {
					donations: '$68,923,456.90',
					regfee: '$4,845,670.00',
					rfi: 2980,
					crews: 395,
					riders: 3420,
					riders2: 765,
					virtual: 485,
					oneday: 298,
					oneday2: 192
				},
				ab19: {
					donations: '$64,567,234.50',
					regfee: '$4,523,890.00',
					rfi: 2820,
					crews: 372,
					riders: 3250,
					riders2: 728,
					virtual: 458,
					oneday: 282,
					oneday2: 180
				},
				ab18: {
					donations: '$61,234,789.75',
					regfee: '$4,312,450.00',
					rfi: 2695,
					crews: 355,
					riders: 3105,
					riders2: 695,
					virtual: 438,
					oneday: 268,
					oneday2: 172
				},
				ab17: {
					donations: '$57,890,123.40',
					regfee: '$4,089,670.00',
					rfi: 2550,
					crews: 338,
					riders: 2960,
					riders2: 662,
					virtual: 418,
					oneday: 252,
					oneday2: 162
				}
			},
			vancouver: {
				va20: {
					donations: '$96,234,876.60',
					regfee: '$6,845,920.00',
					rfi: 3820,
					crews: 520,
					riders: 4380,
					riders2: 985,
					virtual: 658,
					oneday: 412,
					oneday2: 268
				},
				va19: {
					donations: '$90,876,543.25',
					regfee: '$6,423,150.00',
					rfi: 3620,
					crews: 492,
					riders: 4150,
					riders2: 935,
					virtual: 625,
					oneday: 390,
					oneday2: 252
				},
				va18: {
					donations: '$86,456,789.80',
					regfee: '$6,123,890.00',
					rfi: 3468,
					crews: 472,
					riders: 3980,
					riders2: 895,
					virtual: 598,
					oneday: 372,
					oneday2: 240
				},
				va17: {
					donations: '$81,234,567.45',
					regfee: '$5,789,450.00',
					rfi: 3285,
					crews: 448,
					riders: 3780,
					riders2: 848,
					virtual: 565,
					oneday: 352,
					oneday2: 228
				}
			}
		}
	},
	onewalk: {
		getEventTotal: {
			owto20: {
				donations: '$42,345,678.90',
				regfee: '$3,456,780.00',
				rfi: 2190,
				walkers: 5820,
				walkers2day: 3450,
				walkersNight: 1280,
				walkers25km: 720,
				walkers40km: 370,
				crews: 285,
				virtual: 485
			},
			owto19: {
				donations: '$39,876,543.60',
				regfee: '$3,234,560.00',
				rfi: 2075,
				walkers: 5520,
				walkers2day: 3280,
				walkersNight: 1218,
				walkers25km: 685,
				walkers40km: 337,
				crews: 268,
				virtual: 458
			},
			owto18: {
				donations: '$37,234,876.25',
				regfee: '$3,012,340.00',
				rfi: 1960,
				walkers: 5240,
				walkers2day: 3115,
				walkersNight: 1152,
				walkers15km: 820,
				walkers25km: 648,
				walkers40km: 305,
				crews: 252,
				virtual: 425
			},
			owto17: {
				donations: '$34,567,234.80',
				regfee: '$2,789,120.00',
				rfi: 1835,
				walkers: 4920,
				walkers2day: 2920,
				walkersNight: 1085,
				walkers15km: 765,
				walkers25km: 605,
				walkers40km: 280,
				crews: 235,
				virtual: 395
			}
		}
	},
	conquercancerAU: {
		getEventTotal: {
			perth: {
				pr18: {
					donations: '$28,456,789.50',
					regfee: '$2,234,670.00',
					rfi: 1520,
					crews: 208,
					riders: 2680,
					riders2: 595,
					virtual: 385,
					oneday: 242,
					oneday2: 158
				},
				pr17: {
					donations: '$26,789,123.75',
					regfee: '$2,089,450.00',
					rfi: 1435,
					crews: 195,
					riders: 2520,
					riders2: 562,
					virtual: 362,
					oneday: 228,
					oneday2: 148
				}
			}
		}
	},
	onedayAU: {
		getEventTotal: {
			melbourne: {
				ml18: {
					donations: '$19,876,543.20',
					regfee: '$1,845,620.00',
					rfi: 1280,
					walkers: 4250,
					walkers5km: 1680,
					walkers10km: 1520,
					walkers25km: 1050,
					riders: 1420,
					riders50km: 892,
					riders100km: 528,
					crews: 168,
					virtual: 295
				},
				ml17: {
					donations: '$18,234,876.90',
					regfee: '$1,723,450.00',
					rfi: 1205,
					walkers: 4020,
					walkers5km: 1592,
					walkers10km: 1438,
					walkers25km: 990,
					riders: 1340,
					riders50km: 842,
					riders100km: 498,
					crews: 158,
					virtual: 278
				}
			},
			brisbane: {
				br18: {
					donations: '$16,234,567.80',
					regfee: '$1,534,780.00',
					rfi: 1085,
					walkers: 3680,
					walkers5km: 1458,
					walkers10km: 1318,
					walkers25km: 904,
					riders: 1220,
					riders50km: 768,
					riders100km: 452,
					crews: 142,
					virtual: 258
				},
				br17: {
					donations: '$14,876,543.60',
					regfee: '$1,423,560.00',
					rfi: 1015,
					walkers: 3450,
					walkers5km: 1368,
					walkers10km: 1235,
					walkers25km: 847,
					riders: 1150,
					riders50km: 722,
					riders100km: 428,
					crews: 132,
					virtual: 242
				}
			}
		}
	}
};

// Locale metadata for filtering and table display options
// Each locale has a display name, abbreviation, and associated events
const localeMetadata = {
	all: {
		name: 'All Events',
		description: 'Display all events from all locales',
		enabled: true
	},
	toronto: {
		name: 'Toronto RTCC',
		abbreviation: 'TO',
		country: 'Canada',
		events: ['to20', 'to19', 'to18', 'to17'],
		enabled: true
	},
	montreal: {
		name: 'Montreal RTCC',
		abbreviation: 'MO',
		country: 'Canada',
		events: ['mo20', 'mo19', 'mo18', 'mo17'],
		enabled: true
	},
	alberta: {
		name: 'Alberta RTCC',
		abbreviation: 'AB',
		country: 'Canada',
		events: ['ab20', 'ab19', 'ab18', 'ab17'],
		enabled: true
	},
	vancouver: {
		name: 'Vancouver RTCC',
		abbreviation: 'VA',
		country: 'Canada',
		events: ['va20', 'va19', 'va18', 'va17'],
		enabled: true
	},
	onewalk: {
		name: 'OneWalk Toronto',
		abbreviation: 'OWTO',
		country: 'Canada',
		events: ['owto20', 'owto19', 'owto18', 'owto17'],
		enabled: true
	},
	perth: {
		name: 'Perth RTCC',
		abbreviation: 'PR',
		country: 'Australia',
		events: ['pr18', 'pr17'],
		enabled: true
	},
	melbourne: {
		name: 'Melbourne One Day',
		abbreviation: 'ML',
		country: 'Australia',
		events: ['ml18', 'ml17'],
		enabled: true
	},
	brisbane: {
		name: 'Brisbane One Day',
		abbreviation: 'BR',
		country: 'Australia',
		events: ['br18', 'br17'],
		enabled: true
	}
};

// ============================================================================
// DYNAMIC DATA STATE MANAGEMENT
// ============================================================================
// This creates a live copy of the mock data that updates in real-time
// Simulates real fundraising activity with random increments

// Deep clone the base data to create a mutable state
const dynamicDataState = JSON.parse(JSON.stringify(mockApiData));

// Configuration for random increment ranges (min, max per update)
const incrementRanges = {
	// RFI (Registered Fundraising Individuals) - increments of 1-5 per update
	rfi: { min: 0, max: 3 },
	// Participants (riders, walkers, crews, virtual) - increments of 1-10 per update
	participants: { min: 0, max: 8 },
	// Donations - increments of $500-$5000 per update
	donations: { min: 500, max: 5000 },
	// Registration fees - increments of $50-$500 per update
	regfee: { min: 50, max: 500 }
};

// Daily increment tracking (these represent the "daily" changes shown in tables)
const dailyIncrements = {
	toronto: {
		to20: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		to19: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		to18: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		to17: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	montreal: {
		mo20: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		mo19: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		mo18: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		mo17: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	alberta: {
		ab20: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		ab19: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		ab18: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		ab17: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	vancouver: {
		va20: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		va19: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		va18: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		va17: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	onewalk: {
		owto20: { rfi: 0, walkers: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		owto19: { rfi: 0, walkers: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		owto18: { rfi: 0, walkers: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		owto17: { rfi: 0, walkers: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	perth: {
		pr18: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		pr17: { rfi: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	melbourne: {
		ml18: { walkers: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		ml17: { walkers: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	},
	brisbane: {
		br18: { walkers: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 },
		br17: { walkers: 0, riders: 0, virtual: 0, crews: 0, donations: 0, regfee: 0 }
	}
};

// Function to apply random increments to an event
function applyRandomIncrements(region, eventKey, eventData, hasDailyTracking = true) {
	// Randomly decide if this event gets an update (70% chance)
	if (Math.random() > 0.7) return;

	// Calculate increments
	const rfiInc = randomIncrement(incrementRanges.rfi.min, incrementRanges.rfi.max);
	const participantInc = randomIncrement(incrementRanges.participants.min, incrementRanges.participants.max);
	const virtualInc = randomIncrement(0, incrementRanges.participants.max / 2);
	const crewInc = randomIncrement(0, Math.ceil(incrementRanges.participants.max / 3));
	const donationInc = randomDollarIncrement(incrementRanges.donations.min, incrementRanges.donations.max);
	const regfeeInc = randomDollarIncrement(incrementRanges.regfee.min, incrementRanges.regfee.max);

	// Apply increments to totals
	if (eventData.rfi !== undefined) eventData.rfi += rfiInc;
	if (eventData.riders !== undefined) eventData.riders += participantInc;
	if (eventData.walkers !== undefined) eventData.walkers += participantInc;
	if (eventData.virtual !== undefined) eventData.virtual += virtualInc;
	if (eventData.crews !== undefined) eventData.crews += crewInc;
	
	// Update donations (parse, increment, format back)
	if (eventData.donations) {
		const currentDonations = parseCurrency(eventData.donations);
		eventData.donations = formatCurrency(currentDonations + donationInc);
	}
	
	// Update registration fees
	if (eventData.regfee) {
		const currentRegfee = parseCurrency(eventData.regfee);
		eventData.regfee = formatCurrency(currentRegfee + regfeeInc);
	}

	// Track daily increments if applicable
	if (hasDailyTracking && dailyIncrements[region] && dailyIncrements[region][eventKey]) {
		const daily = dailyIncrements[region][eventKey];
		daily.rfi += rfiInc;
		
		if (eventData.riders !== undefined) {
			daily.riders += participantInc;
		} else if (eventData.walkers !== undefined) {
			daily.walkers += participantInc;
		}
		
		daily.virtual += virtualInc;
		daily.crews += crewInc;
		daily.donations += donationInc;
		daily.regfee += regfeeInc;
	}
}

// Function to update all dynamic data
function updateDynamicData() {
	// Update ConquerCancer events (Toronto, Montreal, Alberta, Vancouver)
	Object.keys(dynamicDataState.conquercancer.getEventTotal).forEach(region => {
		Object.keys(dynamicDataState.conquercancer.getEventTotal[region]).forEach(eventKey => {
			applyRandomIncrements(
				region, 
				eventKey, 
				dynamicDataState.conquercancer.getEventTotal[region][eventKey],
				true
			);
		});
	});

	// Update OneWalk events
	Object.keys(dynamicDataState.onewalk.getEventTotal).forEach(eventKey => {
		applyRandomIncrements(
			'onewalk',
			eventKey,
			dynamicDataState.onewalk.getEventTotal[eventKey],
			true
		);
	});

	// Update ConquerCancer AU events (Perth)
	Object.keys(dynamicDataState.conquercancerAU.getEventTotal).forEach(region => {
		Object.keys(dynamicDataState.conquercancerAU.getEventTotal[region]).forEach(eventKey => {
			applyRandomIncrements(
				region,
				eventKey,
				dynamicDataState.conquercancerAU.getEventTotal[region][eventKey],
				true
			);
		});
	});

	// Update OneDay AU events (Melbourne, Brisbane)
	Object.keys(dynamicDataState.onedayAU.getEventTotal).forEach(region => {
		Object.keys(dynamicDataState.onedayAU.getEventTotal[region]).forEach(eventKey => {
			applyRandomIncrements(
				region,
				eventKey,
				dynamicDataState.onedayAU.getEventTotal[region][eventKey],
				true
			);
		});
	});
}

// Start the update interval (updates every 3-7 seconds for realistic variation)
function startDynamicUpdates() {
	const updateInterval = () => {
		updateDynamicData();
		
		// Schedule next update with random interval (3-7 seconds)
		const nextInterval = randomIncrement(3000, 7000);
		setTimeout(updateInterval, nextInterval);
	};
	
	// Start the first update after 5 seconds
	setTimeout(updateInterval, 5000);
	
	console.log('✅ Dynamic mock data updates started - data will change every 3-7 seconds');
}

// Initialize dynamic updates
startDynamicUpdates();

// Function to get current daily increments formatted for API response
function getDailyIncrements() {
	const formatted = {};
	
	Object.keys(dailyIncrements).forEach(region => {
		Object.keys(dailyIncrements[region]).forEach(eventKey => {
			const daily = dailyIncrements[region][eventKey];
			const prefix = eventKey;
			
			formatted[`${prefix}RFIDaily`] = daily.rfi;
			formatted[`${prefix}RidersDaily`] = daily.riders || 0;
			formatted[`${prefix}WalkersDaily`] = daily.walkers || 0;
			formatted[`${prefix}VRDaily`] = daily.virtual;
			formatted[`${prefix}CrewDaily`] = daily.crews;
			formatted[`${prefix}DonDaily`] = formatCurrency(daily.donations);
			formatted[`${prefix}RegFeeDaily`] = formatCurrency(daily.regfee);
		});
	});
	
	return formatted;
}

// Function to get current state of dynamic data
function getCurrentDynamicData() {
	return dynamicDataState;
}

module.exports = {
	mockApiData,
	localeMetadata,
	getCurrentDynamicData,
	getDailyIncrements,
	dynamicDataState
};
