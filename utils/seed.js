const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomFriends, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});


  // Create empty array to hold the users
  const users = [];

  // Add users to the users array
  for (let i = 0; i < 8; i++) {
    // Get random info from ./data
    const user = getRandomName(8);
    const thoughts = getRandomThoughts(8);
    const friends = getRandomFriends(8);
    const reactions = getRandomReactions(8);

    users.push({
      user,
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
