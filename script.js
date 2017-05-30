// Lecture: variables
/*
var name = "Mike";
console.log(name);

var lastName = "Greene";
console.log(lastName);

var age = 38;
console.log(38);

var eyeColor = "brown";
console.log(eyeColor);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2
/*
var name = "Mike";
var age = 38;
console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);

job = "web developer";
isMarried = true;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//variable mutation
age = "twenty seven";
job = "graphic srtist";
console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt("What is your last name?");
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var city = "St. Louis";
var myTeam = "Cardinals";
console.log("The " + city + " " + myTeam + " are my favorite baseball team!");

city = "New York";
myTeam = "Mets";
console.log("I used to hate the " + city + " " + myTeam + "!");
*/

//Lecture: operators
/*
var now = 2017;
var birthYear = 2017 - 38;

birthYear = now - 38 * 2;

console.log(birthYear);

var ageMike = 30;
var ageJeff = 30;

ageMike = ageJeff = (3+5) * 4-6;

ageMike++;
ageJeff /= 2;

console.log(ageMike);
console.log(ageJeff);
*/

// Lecture: if/else statements.
/*

var name = "Jeff";
var age = 30;
var isMarried = "yes";

if (isMarried === "yes") {
	console.log(name + " is married!");
} else {
	console.log(name + " might marry someday.");
}

var name = "Slick Rick";
var bassPlayer = "no";

if (bassPlayer === "yes") {
	console.log(name + " is a bass player.");
} else {
	console.log(name + " does not play bass guitar.");
}

bassPlayer = false;

if (bassPlayer) {
	console.log("HELL" + " YES!");
} else {
	console.log("HECK" + " NO!");
}
*/

// Lecture boolean logic and switch.
/*

var age = 16;

if (age < 20) {
	console.log("John is a teenager.");
} else {
	console.log("John is a man.");
}

var weight = 130;

if (weight > 130) {
	console.log("Jane is overweight.");
} else {
	console.log("Jane is not overweight.");
}

var age = 25;

if (age < 20) {
	console.log("John is a teenager.");
} else if (age > 20 && age < 30) {
	console.log("John is a young man.");
} else {
	console.log("John is a man.");
}

var weight = 140;

if (weight < 130) {
	console.log("Jane is underweight.");
} else if (weight > 130 && weight < 142) {
	console.log("Jane is a good weight.");
} else {
	console.log("John is a overweight.");
}

var weight = 150;

if (weight < 130) {
	console.log("Jane is underweight.");
} else if (weight > 130 && weight < 142) {
	console.log("Jane is a good weight.");
} else {
	console.log("John is a overweight.");
}

var job = "lawyer";

job = prompt("What does Glenny do?");

switch (job) {
	case "teacher":
		console.log("Glenny teaches kids.");
		break;
	case "singer":
		console.log("Glenny is a jazz singer.");
		break;
	case "lawyer":
		console.log("Glenny practices the law.");
		break;
	default:
		console.log("Glenny does something else.");
}
*/

// Coding Challange
/*

var heightJeff = 198;
var heightMike = 196;
var ageJeff = 23;
var ageMike = 25;

var scoreJeff = heightJeff + 5 * ageJeff;
var scoreMike = heightMike + 5 * ageMike;

/*
if (scoreJeff > scoreMike) {
	console.log("Jeff wins the game with " + scoreJeff + " points!");
} else if (scoreMike > scoreJeff) {
	console.log("Mike wins the game with " + scoreMike + " points!");
} else {
	console.log("It is a tie.");
}
*/
/*
var heightJane = 158;
var ageJane = 32;
var scoreJane = heightJane + 5 * ageJane;

if (scoreJeff > scoreMike && scoreJeff > scoreJane) {
	console.log("Jeff wins the game with " + scoreJeff + " points!");
} else if (scoreMike > scoreJeff && scoreMike > scoreJane) {
	console.log("Mike wins the game with " + scoreMike + " points!"); 
} else if (scoreJane > scoreJeff && scoreJane > scoreMike) {
	console.log("Jane wins the game with " + scoreJane + " points!"); 	
} else {
	console.log("The game is a tie!");
}

*/

// Lecture: Functions
/*

function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJeff = calculateAge(1986);
var ageMike = calculateAge(1968);
var ageGlenny = calculateAge(1946);


function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if (retirement >= 0) {
		console.log(name + " retires in " + retirement + " years.");
	} else {
		console.log(name + " is already retired.");
	}
	

	
}
	
yearsUntilRetirement("Jeff", 1986);
yearsUntilRetirement("Mike", 1968);
yearsUntilRetirement("Glenny", 1946);
*/

// Lecture: Statements and Expressions
/*
// This is a function statement
function someFun(par) {
	//code
}

// This is a function expression
var someFun = function(par) {
	//code
}

//Expressions produce an outcome i.e.
3 + 4;
var x = 3;

//Statements perform an action but do not produce an immediate value i.e.
if (x === 5) {
	//do something
}
*/

// Lecture: Arrays
/*

var names = ["Jeff", "Glenny", "Mike"];
var year = new Array(1954, 1971, 1968);

console.log(names[1]);
//to mutate names
names[0] = "Paola";
console.log(names);

var nfcWest = ["Rams", "Seahawks", "Niners", "Cardinals"];
var city = new Array(2016, 1976, 1946, 1988);

console.log(nfcWest[3]);

//several data types can be combined in an array i.e.
var glenny = ["Glenny", "Gomez", 1971, "singer", true];

glenny.push("red");
glenny.unshift("Mrs.");
// pop removes an element from the end
glenny.pop();
//shift removes an element from the beginning
glenny.shift();
console.log(glenny);

alert(glenny.indexOf(1971));
if (glenny.indexOf("teacher") === -1); {
	console.log("Glenny is NOT a teacher.");
}
*/

// Lecture: Objects
/*

var glenny = {
	name: "Glenny",
	lastName: "Gomez",
	yearOfBirth: 1971,
	job: "teacher",
	isMarried: true	
};

console.log(glenny);

// How to retrive a specific object
console.log(glenny.lastName);
console.log(glenny["job"]);

var xyz = "yearOfBirth";
console.log(glenny[xyz]);

glenny.lastName = "Dodson";
glenny["job"] = "lawyer";

console.log(glenny);

// Another way of creating an object
var glenny = new Object();
glenny.name = "Glenny";
glenny.lastName = "Gomez";
glenny["yearOfBirth"] = 1971;
glenny["job"] = "teacher";
glenny["isMarried"] = true;

console.log(glenny);
*/


// Lecture: Objects and Methods
//v1.0
/*
var glenny = {
	name: "Glenny",
	lastName: "Gomez",
	yearOfBirth: 1971,
	job: "teacher",
	isMarried: true,
	family: ["Mike", "Paola", "Darda"], 
	calculateAge: function() {
		return 2017 - this.yearOfBirth;
	}
};


//console.log(glenny.calculateAge(1971));
console.log(glenny.calculateAge());

var age = glenny.calculateAge();
glenny.age = age;

console.log(glenny);
*/

//v2.0
/*
var glenny = {
	name: "Glenny",
	lastName: "Gomez",
	yearOfBirth: 1971,
	job: "teacher",
	isMarried: true,
	family: ["Mike", "Paola", "Darda"], 
	calculateAge: function() {
		//return 2017 - this.yearOfBirth;
		this.age = 2017 - this.yearOfBirth;
	}
};

glenny.calculateAge();
console.log(glenny);
*/

// Lecture Loops

//for loops
/*

for (var i = 0; i < 21; i++) {
	console.log(i);
}

var names = ["Jeff", "Kevin", "Laurie", "Darren", "Hope"];

for (var i = 0; i < 5; i++) {
	console.log(names[i]);
}

var teams = ["Rams", "Cardinals", "Blues", "76ers", "Warriors"];

for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
//.length can be used when the amount of elements in the array is unknown.

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

//While loop
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}

var i = 0;
while(i < teams.length) {
	console.log(teams[i]);
	i++;
}

//to break a loop
for (var i = 1; i <= 10; i++) {
	console.log(i);
	
	if (i === 6) {
		break;
	}
}

for (var i = 1; i <= 10; i++) {
	if (i === 6) {
		continue;
    } 
	
	console.log(i);
}
*/

// Coding Challange 2
//Calculating the age of each person based o

var years = [1949, 2002, 1968, 1971, 1997];
var ages = [];

for (var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
}

for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
	} else {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
	}
}

function printFullAge(years) {
	var ages = [];
	var fullAges = [];
	
	for (var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
 }

for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
		fullAges.push(true);
	} else {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
		fullAges.push(false);
	}
 }
	
	return fullAges;
}

var years = [1949, 2002, 1968, 1971, 1997];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2014, 1958, 1999]);
