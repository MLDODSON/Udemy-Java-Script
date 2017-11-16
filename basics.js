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


//Boolean Logic and Switch Statements




























