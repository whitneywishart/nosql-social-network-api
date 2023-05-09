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
  {
    "thoughtCopy": "A cheetah, the fastest land animal, can run 70 miles an hour."
  },
  {
    "thoughtCopy": "Getting a promotion is exciting."
  },
  {
    "thoughtCopy": "Getting a sore back was the result of the golf game.",
  },
  {
    "thoughtCopy": "Going for ice cream is a real treat.",
  },
  {
    "thoughtCopy": "Grinning from ear to ear, she accepted her award.",
  },
  {
    "thoughtCopy": "He knew it was over the rainbow.",
  },
  {
    "thoughtCopy": "He really needs to get his priorities in order.",
  },
  {
    "thoughtCopy": "He was between a rock and a hard place.",
  },
  {
    "thoughtCopy": "He won the challenge against all odds.",
  },
  {
    "thoughtCopy": "Her horse, an Arabian, was her pride and joy.",
  },
  {
    "thoughtCopy": "I am really excited, considering all the people that will be there.",
  },
  {
    "thoughtCopy": "I tried to see the stage, but I was too short.",
  },
  {
    "thoughtCopy": "I waited for a while.",
  },
  {
    "thoughtCopy": "I went to Spain to study the language and culture.",
  },
  {
    "thoughtCopy": "Knowing what I know now, I wish I had never come here.",
  },
  {
    "thoughtCopy": "My favorite pastime, needlepoint, surprises some people.",
  },
  {
    "thoughtCopy": "My idea, a recycling bin for the office, was accepted by the boss.",
  },
  {
    "thoughtCopy": "My wife, the love of my life, is also my best friend.",
  },
  {
    "thoughtCopy": "Painted a brilliant white, the small room appeared bigger.",
  },
  {
    "thoughtCopy": "Pulling an all-nighter did not improve his test scores.",
  },
  {
    "thoughtCopy": "Sailing into the sunset was the perfect end to the book.",
  },
  {
    "thoughtCopy": "She organized a boycott to make a statement.",
  },
  {
    "thoughtCopy": "She smelled of strawberries and cream.",
  },
  {
    "thoughtCopy": "She was lost in the dark of night.",
  },
  {
    "thoughtCopy": "Signing autographs takes time.",
  },
  {
    "thoughtCopy": "Singing for his supper was how he earned his keep.",
  },
  {
    "thoughtCopy": "Strolling along a beach at sunset is romantic.",
  },
  {
    "thoughtCopy": "Taking my dog for a walk is fun.",
  },
  {
    "thoughtCopy": "The book was on the table.",
  },
  {
    "thoughtCopy": "The company decided to reduce hours for everyone.",
  },
  {
    "thoughtCopy": "The Florida panther, the state animal of Florida, is an endangered species.",
  },
  {
    "thoughtCopy": "The happy dog ran the entire length of the park, pausing only to sniff the dandelions.",
  },
  {
    "thoughtCopy": "The lake, frozen over all winter, was finally thawing.",
  },
  {
    "thoughtCopy": "To donate time or money is an honorable thing.",
  },
  {
    "thoughtCopy": "To make lemonade, you have to start with lemons.",
  },
  {
    "thoughtCopy": "To see Niagara Falls is mind-boggling.",
  },
  {
    "thoughtCopy": "Walking in the rain can be difficult.",
  },
  {
    "thoughtCopy": "Washed with my clothes, my cell phone no longer worked.",
  },
  {
    "thoughtCopy": "We are looking forward to the movie, having seen the trailer last week.",
  },
  {
    "thoughtCopy": "We camped by the brook.",
  }]


const appReactions = [
  {
    "reactionCopy": "Dislike"
  },
  {
    "reactionCopy": "Like"
  },
  {
    "reactionCopy": "Hate"
  },
  {
    "reactionCopy": "Love"
  },
  {
    "reactionCopy": "Disagree"
  },
  {
    "reactionCopy": "Agree"
  },
  {
    "reactionCopy": "But y tho"
  },
  {
    "reactionCopy": "TMI"
  },
  {
    "reactionCopy": "I\'m going to pretend I didn\'t read this"
  }
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random name
const getRandomName = () => {
  const randomName = getRandomArrItem(names);
  return { username: randomName.username, email: randomName.email };
};


// Get random thought that we can add to user object
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(appThoughts),
    });
  }
  return results;
};


// Get random friends that we can add to user object
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


// Get random reactions that we can add to student object.
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
