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




