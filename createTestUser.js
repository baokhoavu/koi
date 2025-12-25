const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/user');

async function createTestUser() {
	await mongoose.connect(process.env.MONGODB_URI);

	const email = 'testuser@example.com';
	const password = 'testpassword';

	// Remove existing user with this email
	await User.deleteMany({ email });

	// Create new user
	const user = new User({
		firstName: 'Test',
		lastName: 'User',
		email,
		password: bcrypt.hashSync(password, 10),
		messages: [],
	});

	await user.save();
	console.log('Created user:', user.email);
	await mongoose.disconnect();
}

createTestUser().catch((err) => {
	console.error('Error creating user:', err);
	process.exit(1);
});
