const connection = require('../config/connection');
const { Course, User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomFriends, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Course.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    // Get random info from ./data
    const fullName = getRandomName();
    const thoughts = getRandomThoughts(5);
    const friends = getRandomFriends(5);
    const reactions = getRandomReactions(3);
    
    users.push({
      fullName,
      thoughts,
      friends,
      reactions,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete');
  process.exit(0);
});
