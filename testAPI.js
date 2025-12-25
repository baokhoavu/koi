// Quick test of API data
const axios = require('axios');

async function testAPI() {
	try {
		const response = await axios.get('http://localhost:3000/api/data');
		const data = response.data;

		console.log('Total fields:', Object.keys(data).length);
		console.log(
			'Has owto20 data:',
			Object.keys(data).some((key) => key.startsWith('owto20'))
		);
		console.log(
			'Has Montreal data:',
			Object.keys(data).some((key) => key.startsWith('mo'))
		);
		console.log(
			'Has Alberta data:',
			Object.keys(data).some((key) => key.startsWith('ab'))
		);
		console.log(
			'Has Vancouver data:',
			Object.keys(data).some((key) => key.startsWith('va'))
		);

		// Check specific owto20 fields
		const owto20Fields = Object.keys(data).filter((key) => key.startsWith('owto20'));
		console.log('owto20 fields found:', owto20Fields.length);
		console.log('Sample owto20 fields:', owto20Fields.slice(0, 5));

		// Check values
		console.log('owto20NightWalkersDaily:', data.owto20NightWalkersDaily);
		console.log('owto202dayDaily:', data.owto202dayDaily);
		console.log('owto20Walkers15kmDaily:', data.owto20Walkers15kmDaily);
	} catch (error) {
		console.error('Error:', error.message);
	}
}

testAPI();
