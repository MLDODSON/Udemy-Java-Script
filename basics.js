// JavaScript Basics: Variables and data types
//JS has 5 primitive data types: number, string, boolean, null and undefined

/*
var name = "Barbara";
console.log(name + " is a fine person.");

var lastName = "Johnson";
console.log(name + " " + lastName + " makes the best cookies!");

var age = 60;
console.log("My aunt, " + name + " " + lastName + " is " + age + " years old.");

var drinkingAge = true;
console.log(drinkingAge);
*/

//Variable Mutation and Type Coercion

/*
var man = "Doug";
var age = 46;
//console.log(man + " is " + age + ".");

var job, isMarried;

//console.log(job);

job = "web developer";
isMarried = true;

console.log(man + " is a " + age + " year old " + job + ". It is " + isMarried + " he has a wife.");

//mutation

job = "lawyer";
age = "forty two";

console.log(man + " is a " + age + " year old " + job + ". It is " + isMarried + " he has a wife.");

var lastName = prompt("What is your last name?");
console.log(lastName);


var odor = "stinks";
alert("Something " + odor + "!");
*/

//Operators

/*
var now = 2017;

var birthYear = now - 49;

birthYear = now - 26 * 2;
//2017 - 52
//1965

console.log(birthYear);

var ageKevin = 40;
var ageJerry = 40;

ageKevin = ageJerry = (3 + 8) * 5 - 6;

ageKevin++;
ageJerry--;

console.log(ageKevin);
console.log(ageJerry);
*/

//If / else Statements
/*
var person = "Jeff";
var age = 38;
var isMarried = "no";

if (isMarried === "yes") {
	console.log(person + " is a happy married man!");
} else {
	console.log(person + " is not married at all.");
}
//the else was executed because isMarried does not equal yes.

isMarried = false;

if(isMarried) {
	console.log("YES!");
} else {
	console.log("NO!");
}

if (14 == "26") {
	console.log("You are equal!");
} else {
	console.log("You are not the same.");
}
//The double equal can convert a number to a string. But it is best to use the ===.
*/

//Boolean Logic and Switch Statements

/*
var age = 16;

if(age < 21) {
	console.log("Chris is too young to drink.");
} else {
	console.log("Chris is a legal adult now.");
}

var weight = 220;

if(weight >= 220) {
	console.log("Bob is in good shape!");
} else {
	console.log("Bob needs to get his big butt in the gym again!");
}

var miles = 2;

if(miles !== 3) {
	console.log("I will walk there.");
} else {
	console.log("I will drive there.");
}

var pushUp = 150;

if(pushUp < 150) {
	console.log("Charlie is out of shape.");
} else {
	console.log("Charlie is a beast!");
}

var age = 16;
if(age >=15 && age === 16) {
	console.log("John is old enough to attend.");
} else {
	console.log("John has to stay home.");
}

var age = 21;
if(age <= 30 || age === 21) {
	console.log("You may enter this night club.");
} else {
	console.log("Sorry, this is for the grown and sexy!");
}

var age = 25;

if(age < 18) {
	console.log("Mike is still a teenager");
} else if (age > 22 && age < 35) {
	console.log("Mike is a young man.");
} else {
	console.log("Mike is a man.");
}

var weight = 250;

if(weight < 200) {
	console.log("Leon is the right weight for hus height.");
} else if(weight > 215 && weight < 230) {
	console.log("Leon needs to loss a little weight.");
} else {
	console.log("Leon, lay off the twinkees big boy!");
}

var miles = 4;

if(miles > 5) {
	console.log("I might walk there.");
} else if(miles >=3 || miles < 2) {
	console.log("I will walk there.");
} else {
	console.log("That's too far! I'm driving!");
}

var job = "graphic artist";

job = prompt("What does Ben do for a living?");

switch (job) {
	case "web developer":
		console.log("Ben is a web developer.");
		break;
	case "personal trainer":
		console.log("Ben is a personal trainer.");
		break;
	case "graphic artist":
		console.log("Ben is a freelance graphic artist.");
		break;
	default:
		console.log("Ben does something else.");
		   }
*/

//Coding challenge

//First create height and age variables for the 2 players
/* 
var heightJohn = 180;
var heightMike = 196;
var heightEd = 188;

var ageJohn = 42;
var ageMike = 40;
var ageEd = 43;

//Next create a score variable
var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
var scoreEd = heightEd + 5 * ageEd;

//Next do an if else statement to calculate the winner
if(scoreJohn > scoreMike) {
	console.log("John is the winner with a score of " + scoreJohn + " points!");
} else if(scoreMike > scoreJohn) {
	console.log("Mike is the winner with a score of " + scoreMike + " points!");
} else {
	console.log("It's a draw!");
}

//Add a 3rd player
if(scoreEd >= scoreJohn && scoreEd >= scoreMike) {
	console.log("We have a new winner! Ed wins with a score of " + scoreEd + " points!");
} else if (scoreMike > scoreJohn && scoreMike > scoreEd) {
	console.log("Still the champ with a score of " + scoreMike + " points, Big Mike!");
} else if (scoreEd > scoreEd && scoreJohn > scoreMike) {
	console.log("The winner with " + scoreJohn + ", Crazy John!");
} else {
	console.log("Folks we have a draw!!");
}	
 */
 
//Functions
/*
function ageCalculate(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJoe = ageCalculate(1990);
var ageMike = ageCalculate(1968);
var ageOra = ageCalculate(1948);
console.log(ageOra);


function yearsToRetire(name, year) {
	var age = ageCalculate(year);
	var retirement = 65 - age;
	
	if(retirement >= 0) {
	   console.log(name + " retires in " + retirement + " years.");	
	} else {
		console.log(name + " has already retired.");
	}
	
}

yearsToRetire("Phil", 1986);
yearsToRetire("Mike", 1968);
yearsToRetire("Ora", 1948);



function yearsToDrink(name, year) {
	var age = ageCalculate(year);
	var drinkingAge = 21 - age;
	
	if(drinkingAge <= 0) {
		console.log(name + " let's go have a beer.");
	} else {
		console.log(name + " can have a drink in " + drinkingAge + " years.");
	}
}

yearsToDrink("Phil", 1986);
yearsToDrink("Mike", 2004);
yearsToDrink("Ora", 2010);
*/

//Arrays
/*
var people = ["Bubba", "Casper", "George", "Sylvester"];
var years = new Array(1972, 1965, 1988, 2006);

console.log(people);
console.log(people[1]);

console.log(people[2]);
people[1] = "Bugs Bunny";
console.log(people);

var george = ["George", "Jefferson", 1988, "Coach", true];

george.push("blue");
//push adds an element to the end of an array.
george.unshift("Lord");
//unshift adds an element at the start of an array.
george.pop();
//pop removes an element to the end of an array.
george.shift();
//shift removes the element at the start of an array.
console.log(george);

alert(george.indexOf(1988));
//indexOf will give the position of an item in an array.

if(george.indexOf("Chef") === -1) {
	console.log("George is not a chef.");
}
*/

//Objects
/*
var george = {
	person: "Geoege",
	lastName: "Jefferson",
	yearOfBirth: 1988,
	job: "coach",
	isMarried: true
};

console.log(george);
console.log(george.lastName);
console.log(george["yearOfBirth"]);

var x = "job";
console.log(george[x]);

george.lastName = "Tucker";
george['job'] = "lawyer";

console.log(george);

var betty = new Object();
betty.person = "Betty";
betty.lastName = "Davis";
betty["yearOfBirth"] = 1975;
betty["job"] = "pilot";
betty["isMarried"] = true;

console.log(betty);
*/
//Objects and Methods

var kevin = {
	person: "Kevin",
	lastName: "Doyle",
	yearOfBirth: 1973,
	job: "mechanic",
	isMarried: true,	
	family: ["Mike", "Marie", "Angie", "Arlene"],
	calculateAge: function(yearOfBirth) {
		return 2017 - yearOfBirth;
	}
};

console.log(kevin);


var laurie = {
	person: "Laurie",
	lastName: "Smith",
	yearOfBirth: 1963,
	job: "artist",
	isMarried: false,	
	family: ["Mario", "Lois", "Steve", "Barbara", "Evelyn"],
	calculateAge: function() {
		return 2017 - this.yearOfBirth;
	}
};

console.log(laurie);
console.log(laurie.calculateAge());

var age = laurie.calculateAge();
laurie.age = age;

console.log(laurie);



var person = "Julio";
var career = "Web Developer";
var food = "pasta";

console.log(person + " the " + career + " loves " + food + ".");













