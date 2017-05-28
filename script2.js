// Lecture: string variables
// Write 5 string variables about Mike

var nickname = "Big Mike";
console.log(nickname);

var favFood = "chicken";
console.log(favFood);

var favSport = "football";
console.log(favSport);

var favMovie = "The Warriors";
console.log(favMovie);

var bestHero = "Spidey";
console.log(bestHero);

console.log(nickname + ' loves ' + favFood + '.');
console.log(nickname + ' can barely wait for ' + favSport + ' season to start!');
console.log(nickname + ' loves to watch over and over ' + favMovie + '!');
console.log(nickname + ' has been a fan of ' + bestHero + ' ever since he saw him in a comicbook.');

// Write 4 number variables

var age = 2017 - 1968;
console.log(age);
console.log(nickname + " is " + age + " and loves his baked " + favFood + ".");

var weight = 220;
console.log(weight);
console.log(nickname + ' weights ' + weight + ' and loves NFL ' + favSport + '.');

var height = 6.3;
console.log(height);
console.log(nickname + ' is ' + height + ' and has seen the ' + favMovie + " too many times.");

var yearOfBirth = 2017 - 49;
console.log(yearOfBirth);
console.log("Even though " + nickname + " was born in " + yearOfBirth + " he still loves " + bestHero + "!");

// Write 4 boolean variables
var isMarried = true;
console.log(isMarried);

var lovesCabbage = false;
console.log(lovesCabbage);

var patriotFan = false;
console.log(patriotFan);

var likesToCode = true;
console.log(likesToCode);


var withBreaks = "Hello World. \nMy name is Jennifer. \nWhat is your name?";
console.log(withBreaks);

// Some variable mutation
var isMarried = false;
console.log("Is " + nickname + " married? " + isMarried + ".");

var favSport = "basketball";
console.log("Is " + favSport + " season almost over?");

//var bestHero = prompt("Who is your favorite super hero?");
//console.log(bestHero);

//var favSport = prompt("What sport do you still play?");
//console.log(favSport);

//alert(bestHero + " has a new movie coming out in July!");

// Work with some operators
console.log(5 * 16 + 12);
console.log(36 / 6 * 5);
console.log(36 >= 36);
console.log(20 < 50);
console.log(36 >= 47);
console.log(yearOfBirth + 11);
console.log(age + 11);
console.log(weight >= 250);

// If else statement practice
/*
var name = "Jeff";
var age = 30;
var isMarried = "yes";

if (isMarried === "yes") {
	console.log(name + " is married!");
} else {
	console.log(name + " might marry someday.");
}
*/

var myName = "Kevin";
var wantsChicken = "yes";
var needsCarRepair = "yes";
var dessert = "chocolate cake";
var autoShop = "Walmart";
var tireShop = "Dobbs";

if (wantsChicken === "no") {
	console.log(myName + " wants chicken for dinner");
} else {
	console.log(myName + " wants steak and onion rings for dinner.");
}

if (wantsChicken === "no") {
	console.log(myName + " really wants chicken for dinner " + dessert + " later."); 
} else {
	console.log(myName + " wants barbeque ribs and " + dessert + " afterwards.");
}

if (needsCarRepair === "no") {
	console.log(myName + " will go to " + autoShop + " to get a new tire."); 
} else {
	console.log(myName + " will go to " + tireShop + " if " + autoShop + " is not cheaper.");
}

if (needsCarRepair === "yes") {
	console.log(myName + " will go to " + autoShop + " to get a new tire. \nLater " + myName + " will eat his " + dessert + "."); 
} else {
	console.log(myName + " will go to " + tireShop + " if " + autoShop + " is not cheaper.");
}


