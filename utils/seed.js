const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomFriends, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});


  // Create empty array to hold data
  const users = [];

  // Add users to the users array
  for (let i = 0; i < 8; i++) {
    // Get random info from ./data
    const user = getRandomName();
    const thoughts = getRandomThoughts();
    const friends = getRandomFriends();
    const reactions = getRandomReactions();

    users.push({
      ...user,
      thoughts,
      friends,
    });
    console.log(thoughts) 
  }
  
  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  
  
  // Console log the seed data
  console.table(users);
  console.info('Seeding complete');
  process.exit(0);
});
