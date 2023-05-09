const names = [
  {
    "username": "Kynlee Reyna",
    "email": "KReyna@email.com"
  },
  {
    "username": "Reginald Jenkins",
    "email": "RJenkins@email.com"
  },
  {
    "username": "Rylee McMillan",
    "email": "RMcMillan@email.com"
  },
  {
    "username": "Rocky Underwood",
    "email": "RUnderwood@email.com"
  },
  {
    "username": "Ensley Santiago",
    "email": "ESantiago@email.com"
  },
  {
    "username": "Beckham Jefferson",
    "email": "BJefferson@email.com"
  },
  {
    "username": "Julieta Washington",
    "email": "JWashington@email.com"
  },
  {
    "username": "Juan Cunningham",
    "email": "JCunningham@email.com"
  }
];



const appThoughts = [
  "A cheetah, the fastest land animal, can run 70 miles an hour.",
  "Getting a promotion is exciting.",
  "Getting a sore back was the result of the golf game.",
  "Going for ice cream is a real treat.",
  "Grinning from ear to ear, she accepted her award.",
  "He knew it was over the rainbow.",
  "He really needs to get his priorities in order.",
  "He was between a rock and a hard place.",
  "He won the challenge against all odds.",
  "Her horse, an Arabian, was her pride and joy.",
  "I am really excited, considering all the people that will be there.",
  "I tried to see the stage, but I was too short.",
  "I waited for a while.",
  "I went to Spain to study the language and culture.",
  "Knowing what I know now, I wish I had never come here.",
  "My favorite pastime, needlepoint, surprises some people.",
  "My idea, a recycling bin for the office, was accepted by the boss.",
  "My wife, the love of my life, is also my best friend.",
  "Painted a brilliant white, the small room appeared bigger.",
  "Pulling an all-nighter did not improve his test scores.",
  "Sailing into the sunset was the perfect end to the book.",
  "She organized a boycott to make a statement.",
  "She smelled of strawberries and cream.",
  "She was lost in the dark of night.",
  "Signing autographs takes time.",
  "Singing for his supper was how he earned his keep.",
  "Strolling along a beach at sunset is romantic.",
  "Taking my dog for a walk is fun.",
  "The book was on the table.",
  "The company decided to reduce hours for everyone.",
  "The Florida panther, the state animal of Florida, is an endangered species.",
  "The happy dog ran the entire length of the park, pausing only to sniff the dandelions.",
  "The lake, frozen over all winter, was finally thawing.",
  "To donate time or money is an honorable thing.",
  "To make lemonade, you have to start with lemons.",
  "To see Niagara Falls is mind-boggling.",
  "Walking in the rain can be difficult.",
  "Washed with my clothes, my cell phone no longer worked.",
  "We are looking forward to the movie, having seen the trailer last week.",
  "We camped by the brook.",
];

const appReactions = [
  "Dislike",
  "Like",
  "Hate",
  "Love",
  "Disagree",
  "Agree",
  "But y tho",
  "TMI",
  "I\'m going to pretend I didn\'t read this",
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () => {
  const randomName = getRandomArrItem(names);
  return { username: randomName.username, email: randomName.email };
};



// Function to generate random thoughts that we can add to user object
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(appThoughts),
    });
  }
  return results;
};


// Function to generate random friends that we can add to user object
const getRandomFriends = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    const randomName = getRandomArrItem(names);
    results.push({
      friendName: {
        username: randomName.username,
        email: randomName.email,
      },
    });
  }
  return results;
};


// Function to generate random reactions that we can add to student object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionText: getRandomArrItem(appReactions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomFriends, getRandomReactions };
