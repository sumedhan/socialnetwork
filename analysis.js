var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Helper Functions

//printName returns the name of the person given the id
function printName(id, socialData) {
  return socialData[id].name;
}

// Helper function
// Returns an object with the id and the number of people followed
// Sample Output - {f01: 3, f02: 2} etc
function numberFollowed(socialData) {
  var numberFollow = {};
  for ( var id in socialData) {
    var number = socialData[id].follows.length;
    numberFollow[id] = number;
  }
  return numberFollow;
}

// converts the object into an array of objects to help use array functions
function convertToArray(socialData) {
  var arr = [];
  for(var key in socialData) {
    var details = socialData[key];
    details["id"] = key;
    arr.push(details);
  }
  return arr;
}

//Names of people a person follows
function follows (pId, socialData) {

  var follows = socialData[pId].follows;
  var namesFollows = [];
  follows.forEach(function(element) {
    namesFollows.push(printName(element, socialData));
    });
  return namesFollows;
}

// Names of the followers
 function followedBy(pId, socialData) {
  var followedByNames = [];
  for (var id in socialData){
    var follows = socialData[id].follows; // array of follows for each user
    for (var i = 0; i < follows.length; i++) {
      var fId = follows[i]; // ids of ppl the user follows
      if(fId === pId)
      {
      followedByNames.push(socialData[id].name);
      }
    }
  return followedByNames;
  }
}

// Sorts the data in an array by the number of followers highest to lowest
function sortByNumberOfFollowers (socialData) {
  var sortableSocialData = convertToArray(socialData);
  sortableSocialData.sort(function sortfunction (a,b){
    if(a.follows.length > b.follows.length)
      return -1;
    if(a.follows.length < b.follows.length)
      return 1;
    return 0;
  });

  return sortableSocialData;
}

// Who follows the most people?
function followsMostPeople (socialData) {
  var sorted = sortByNumberOfFollowers(socialData);
  console.log(sorted[0].name + " follows the maximum people. (" + sorted[0].follows.length + " people)");
}

//Who follows the least people
function followsLeastPeople(socialData) {
  var sorted = sortByNumberOfFollowers(socialData);
  sorted.reverse();
  console.log(sorted[0].name + " follows the least people. (" + sorted[0].follows.length + " people)");
}



// List everyone and for each of them, list the names of who they follow and who follows them
function summaryList (socialData) {
  var summary = {};
  for(var id in socialData) {
    var name = socialData[id].name;
    summary[name] = {
      follows: follows(id, socialData),
      followedBy: followedBy(id, socialData)
    };
  }
  return summary;
}

console.log("Summary of the network: ",summaryList(data));





// // Identify who follows the most over 30
// function mostFollowsOver30 (socialData) {
//   var obj = {};
//   var maxPerson30 = "";
//   for (var id in socialData){

//     var follows = socialData[id].follows;

//     for (var i = 0; i < follows.length; i++) {
//       var id = follows[i];

//       if(socialData[id].age > 30){
//         if(!obj[id]){
//           obj[id] = 1;
//         }
//         else{
//           obj[id]++;
//         }
//       }
//     }
//   }

//   var max = 0;
//   for (var key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//     }
//   }

//   var persons = [];
//   for (var key in obj) {
//     if(obj[key] === max) {
//       persons.push(key);
//     }
//   }
// return persons;
// }
// // console.log(mostFollowsOver30(data));




// // Identify who has the most followers
// function mostFollowers(socialData) {
//   var obj = numberOfFollowers(socialData);
//   var max = 0;
//   for (var key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//     }
//   }

//   var persons = [];
//   for (var key in obj) {
//     if(obj[key] === max) {
//       persons.push(key);
//     }
//   }
// return persons;
// }


// // console.log(mostFollowers());
// // helper function that returns an object with id and number of followers
// function numberOfFollowers(socialData) {
//   var obj = {};
//   for (var id in socialData){
//     var follows = socialData[id].follows;
//     for (var i = 0; i < follows.length; i++) {
//       var id = follows[i];
//       if(!obj[id]){
//         obj[id] = 1;
//       }
//       else{
//         obj[id]++;
//       }
//     }
//   }
//   return obj;
// }



// // Identify who follows the most people over 30
// // List those who follow someone that doesn't follow them back
// // List everyone and their reach (sum of # of followers and # of followers of followers)