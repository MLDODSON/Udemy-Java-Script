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


