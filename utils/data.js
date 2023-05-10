const names = [
  {
    "username": "Kynlee Reyna",
    "email": "KReyna@email.com",
    "thoughtCopy": "A cheetah, the fastest land animal, can run 70 miles an hour."
  },
  {
    "username": "Reginald Jenkins",
    "email": "RJenkins@email.com",
    "thoughtCopy": "Getting a promotion is exciting."
  },
  {
    "username": "Rylee McMillan",
    "email": "RMcMillan@email.com",
    "thoughtCopy": "Getting a sore back was the result of the golf game."
  },
  {
    "username": "Rocky Underwood",
    "email": "RUnderwood@email.com",
    "thoughtCopy": "Going for ice cream is a real treat."
  },
  {
    "username": "Ensley Santiago",
    "email": "ESantiago@email.com",
    "thoughtCopy": "Grinning from ear to ear, she accepted her award."
  },
  {
    "username": "Beckham Jefferson",
    "email": "BJefferson@email.com",
    "thoughtCopy": "He knew it was over the rainbow."
  },
  {
    "username": "Julieta Washington",
    "email": "JWashington@email.com",
    "thoughtCopy": "He really needs to get his priorities in order."
  },
  {
    "username": "Juan Cunningham",
    "email": "JCunningham@email.com",
    "thoughtCopy": "He was between a rock and a hard place."
  }
];

const appThoughts = [
  {
    "thoughtCopy": "He won the challenge against all odds."
  },
  {
    "thoughtCopy": "Her horse, an Arabian, was her pride and joy."
  },
  {
    "thoughtCopy": "I am really excited, considering all the people that will be there."
  },
  {
    "thoughtCopy": "I tried to see the stage, but I was too short."
  },
  {
    "thoughtCopy": "I waited for a while."
  },
  {
    "thoughtCopy": "I went to Spain to study the language and culture."
  },
  {
    "thoughtCopy": "Knowing what I know now, I wish I had never come here."
  },
  {
    "thoughtCopy": "My favorite pastime, needlepoint, surprises some people."
  },
  {
    "thoughtCopy": "My idea, a recycling bin for the office, was accepted by the boss."
  },
  {
    "thoughtCopy": "My wife, the love of my life, is also my best friend."
  },
  {
    "thoughtCopy": "Painted a brilliant white, the small room appeared bigger."
  },
  {
    "thoughtCopy": "Pulling an all-nighter did not improve his test scores."
  },
  {
    "thoughtCopy": "Sailing into the sunset was the perfect end to the book."
  },
  {
    "thoughtCopy": "She organized a boycott to make a statement."
  },
  {
    "thoughtCopy": "She smelled of strawberries and cream."
  },
  {
    "thoughtCopy": "She was lost in the dark of night."
  },
  {
    "thoughtCopy": "Signing autographs takes time."
  },
  {
    "thoughtCopy": "Singing for his supper was how he earned his keep."
  },
  {
    "thoughtCopy": "Strolling along a beach at sunset is romantic."
  },
  {
    "thoughtCopy": "Taking my dog for a walk is fun."
  },
  {
    "thoughtCopy": "The book was on the table."
  },
  {
    "thoughtCopy": "The company decided to reduce hours for everyone."
  },
  {
    "thoughtCopy": "The Florida panther, the state animal of Florida, is an endangered species."
  },
  {
    "thoughtCopy": "The happy dog ran the entire length of the park, pausing only to sniff the dandelions.",
  },
  {
    "thoughtCopy": "The lake, frozen over all winter, was finally thawing."
  },
  {
    "thoughtCopy": "To donate time or money is an honorable thing."
  },
  {
    "thoughtCopy": "To make lemonade, you have to start with lemons."
  },
  {
    "thoughtCopy": "To see Niagara Falls is mind-boggling."
  },
  {
    "thoughtCopy": "Walking in the rain can be difficult."
  },
  {
    "thoughtCopy": "Washed with my clothes, my cell phone no longer worked."
  },
  {
    "thoughtCopy": "We are looking forward to the movie, having seen the trailer last week."
  },
  {
    "thoughtCopy": "We camped by the brook."
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

// Get random thoughts
const getRandomThoughts = () => {
  const randomThought = getRandomArrItem(appThoughts);
  return { thoughtArray: randomThought.thoughtCopy };
};


// Get random friends
const getRandomFriends = () => {
  const randomFriend = getRandomArrItem(names);
  return { username: randomFriend.username };
};

// Get random reactions
const getRandomReactions = () => {
  const randomReaction = getRandomArrItem(appReactions);
  return { reaction: randomReaction.reactionCopy };
};

// function getRandomThoughts() {
//   const thoughts = [];
//   for (let i = 0; i < 10; i++) { // generate 10 thoughts
//     const thoughtIndex = Math.floor(Math.random() * appThoughts.length);
//     const reactionIndex = Math.floor(Math.random() * appReactions.length);
//     const thought = appThoughts[thoughtIndex].thoughtCopy;
//     const reaction = appReactions[reactionIndex].reactionCopy;
//     thoughts.push({ thought, reaction });
//     console.log(thoughts);
//   }
//   return thoughts;
// }


// Get random thoughts
// const getRandomThoughts = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thought: getRandomArrItem(appThoughts),
//     });
//   }
//   return results;
// };

// // Get random thought that we can add to user object
// const getRandomThoughts = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(appThoughts),
//     });
//   }
//   return results;
// };


// // Get random friends
// const getRandomFriends = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     const randomName = getRandomArrItem(names);
//     results.push({
//       friendName: {
//         username: randomName.username,
//         email: randomName.email,
//       },
//     });
//   }
//   return results;
// };


// // Get random reactions
// const getRandomReactions = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       reactionText: getRandomArrItem(appReactions),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomFriends, getRandomReactions };
