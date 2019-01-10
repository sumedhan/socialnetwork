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

// Identify who follows the most people
function followsTheMostPeople (socialData) {
  var max = 0;
  var maxPerson = "";
  for ( var id in socialData) {
    var numberFollows = socialData[id].follows.length;
    if (numberFollows > max) {
      max = numberFollows;
      maxPerson = socialData[id].name;
    }
  }
  return maxPerson;
}



// Identify who has the most followers over 30
function mostFollowersOver30 () {
  var obj = {};
  for (var id in data){
    var follows = data[id].follows;
    for (var i = 0; i < follows.length; i++) {
      var id = follows[i];
      if(data[id].age > 30){
        console.log("YAYYY");
      }
      if(!obj[id]){
        obj[id] = 1;
      }
      else{
        obj[id]++;
      }
    }
  }
  return obj;


}
mostFollowersOver30();


// List everyone and for each of them, list the names of who they follow and who follows them
function summaryList (socialData) {
  var summary = {};
  for(var id in socialData) {
    var name = socialData[id].name;
    summary[name] = {
      follows: followersNames(id, socialData),
      followedBy: followedBy(id, socialData)
    };
  }
  return summary;
}

console.log(summaryList(data));

function followersNames (pId, socialData) {

  var follows = socialData[pId].follows;
  var namesFollows = [];
  for (var i = 0; i < follows.length; i++) {
    for(var id in socialData) {
      var name = socialData[id].name;
      if(id === follows[i]) {
        namesFollows.push(name);
      }
    };
  }
  return namesFollows;
}

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
  }
  return followedByNames;




}












// Identify who has the most followers
function mostFollowers() {
  var obj = numberOfFollowers();
  var max = 0;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }

  var persons = [];
  for (var key in obj) {
    if(obj[key] === max) {
      persons.push(key);
    }
  }
return persons;
}


// console.log(mostFollowers());
// helper function that returns an object with id and number of followers
function numberOfFollowers() {
  var obj = {};
  for (var id in data){
    var follows = data[id].follows;
    for (var i = 0; i < follows.length; i++) {
      var id = follows[i];
      if(!obj[id]){
        obj[id] = 1;
      }
      else{
        obj[id]++;
      }
    }
  }
  return obj;
}





// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)