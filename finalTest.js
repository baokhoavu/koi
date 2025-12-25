// Test API response
const axios = require('axios');

async function test() {
	try {
		const response = await axios.get('http://localhost:3000/api/data');
		const data = response.data;

		console.log('API Response successful!');
		console.log('owto20WalkersDaily:', data.owto20WalkersDaily);
		console.log('owto20NightWalkersDaily:', data.owto20NightWalkersDaily);
		console.log('owto202dayDaily:', data.owto202dayDaily);
		console.log('owto2025kmWalkersDaily:', data.owto2025kmWalkersDaily);
		console.log('owto2040kmWalkersDaily:', data.owto2040kmWalkersDaily);

		// Check if values are non-zero
		const hasData = data.owto20NightWalkersDaily > 0;
		console.log('OneWalk Toronto data populated:', hasData);
	} catch (error) {
		console.error('API Error:', error.message);
	}
}

test();
