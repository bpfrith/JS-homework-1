var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// prints out My name is Keith

score = 3;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// prints out 5

var myAnimals = ['Ducks', 'Dogs', 'Lions'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// prints out 
// 0 : ducks
// 1 : dogs
// 2 : lions

var suspectOne = 'Peter';
var suspectTwo = 'Nina';
var suspectThree = 'Rory';
var suspectFour = 'Sam';

var allSuspects = function() {
  var suspectThree = 'Ramsay'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// prints out
// Suspects include: Peter, Nina, Rory, Sam
// Suspect three is: Ben

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Doig'
  return printName(detective);
};

console.log(detectiveInfo());

// prints out Poirot

var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Marc';

  var innerFunction = function() {
    murderer = 'Valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//prints out the murderer is Rick

//////////////////// MY LAST DRINK ////////////////////////////

var drink =  "beer"

var stillAtCodeClan = function() {
  drink = 'borovicka a.k.a Devils Piss';
  var footLights = function() {
    var drink = 'beer';
    drink = 'scotch';
    var drink = 'too much';
    drink = 'water'
  }
  footLights();
}

stillAtCodeClan();

console.log('my last drink was', drink);