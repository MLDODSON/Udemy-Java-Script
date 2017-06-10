// Lecture: string variables
// Write 5 string variables about Mike
/*
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

/*
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

var price = 15.00; // price of a hammer I want
var money = 20.00; // amount of cash I have to spend

if(money >= price) {
	console.log("Buy the hammer.");
} else {
	console.log("Don't buy the hammer.");
}

var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b.");
} else {
  console.log("a is less than or equal to b.");
}

// Else if statements
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}

var runner = "Speedy";
var position = 1;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

var route = "travel";

if (route === "construction") {
	console.log("Take highway seventy.");
} else if (route === "accident") {
	console.log("Take South Grand.");
} else {
	console.log("Take your normal way.");
}
	
// Lecture boolean logic and switch.

var benchPress = 300;

if (benchPress < 300) {
	console.log("Kevin needs to workout more.");
} else {
	console.log("Kevin is really strong!");
}

var benchPress = 260;

if (benchPress < 300) {
	console.log("Kevin needs to workout more.");
} else {
	console.log("Kevin is really strong!");
}



var flight = 600;

if (flight < 580) {
	console.log("We will drive.");
} else if (flight > 520 && flight < 590) {
	console.log("We will catch a train.");
} else {
	console.log("We will fly.");
}

var flight = 480;

if (flight < 580) {
	console.log("We will drive.");
} else if (flight > 520 && flight < 590) {
	console.log("We will catch a train.");
} else {
	console.log("We will fly.");
}

var job = "web developer";

//job = prompt("What does Rod do?");

switch (job) {
	case "teacher":
		console.log("Rod teaches kids.");
		break;
	case "fitness instructer":
		console.log("Rod works people out.");
		break;
	case "web developer":
		console.log("Rod is a dynamic web developer.");
		break;
	default:
		console.log("Rod does something else.");
}

var vacation = "Dominican Republic";

//vacation = prompt("Where do you want to go on your next vacation?");

switch (vacation) {
	case "Dominican Republic":
		console.log("I want to lay on the sandy beaches and swim in the ocean.");
		break;
	case "France":
		console.log("I would love to visit Paris.");
		break;
	case "Orlando":
		console.log("I would love to visit Disney World with the kids.");
		break;
	default:
		console.log("I have not made up my mind yet.");
}

// Functions practice
function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJeff = calculateAge(1975);
var ageMike = calculateAge(1965);
var ageGlenny = calculateAge(1976);

console.log(ageJeff, ageMike, ageGlenny);


function poundsToLoss(currentWeight) {
	var weight = currentWeight - 200;
	return weight;
}
	
var weightJeff = poundsToLoss(325);
var weightMike = poundsToLoss(275);
var weightGlenny = poundsToLoss(204);

console.log(weightJeff, weightMike, weightGlenny);
*/

function myFunction() {
	console.log("HELLO WORLD");
}

function songLoop() {
	console.log("Keep on");
    console.log("with the force don't stop");
    console.log("Don't stop till you get enough");
}

// Function Arguments
function sayHello(person) {
	console.log("Hello there " + person + "!");
}

function math(a, b) {
	console.log(a * b);
}
math(12,10);

function favBand(group1, group2, group3) {
	console.log("I love " + group1 + "!");
	console.log("I love " + group2 + "!");
	console.log("I love " + group3 + "!");
}
favBand("Parliament", "Rick James and the Stone City Band", "Slave");

// Functions: The Return Keyword
function square(x) {
	return x * x;
}

function capitalize(str) {
	return str.charAt(0) .toUpperCase() + str.slice(1);
}

var city = "toronto";
var capital = capitalize(city);

function test(x,y) {
	return y - x;
}

test(10, 40); //answer is 30

function test(x) {
	return x * 2; // after the 1st return the function stops running
	console.log(x);
	return x/2;
}

test(40); //answer is 80

//isEven


//function isEven(num) {
	//if(num % 2 === 0) {
		//return true;
	//} else {
		//return false;
// }
	//return true if even
	//return false if not
//}

//or

function isEven(num) {
	return num % 2 === 0; 
}

function factorial(num) {
	//define a result var
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	//return the result variable
	return result;
}

function kebabToSnake(str) {
	//replace all '-' with "_" 's
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;	
}

function letterChange(str) {
	var carStr = str.replace(/heck/g , "funk");
	return carStr;
}

// JS Scope
//If a variable is defined outside a function it can be used inside of it
function doMath() {
	var x = 40;
	console.log(x);
}

var y = 100;

function doNumber() {
	y = 850;
	console.log(y);
}
//y will become 850 in or outside the function now

var phrase = "What's Up!"

function doSomething() {
	var phrase = "See you later."
	console.log(phrase);
}
//Inside the function phrase is "See you later." Oustside it's "What's Up!"

//Higher Order Functions
function sing(){
	console.log("Keep on");
    console.log("with the force don't stop");
    console.log("Don't stop till you get enough");
}

//setInterval(sing, 1000);
//setInterval(function() {
	//console.log("I am an anonymous function.");
	//console.log("AWESOME BABY!");
//}, 2000);

//Arrays Practice
//arrays are indexed starting at 0
//arrays can hold any type of property
//arrays have a length property

var myAunts = ["May", "Barbara", "Helen", "Celeste", "Jeanette"];
console.log(myAunts[3]);

myAunts[5] = "Chi Chi";

console.log(myAunts[5]);
console.log(myAunts[0]);

var superHeroes = ["Spidey", "Batman", "Cap", "Hulk", "Thor", "Wonder Woman"];
console.log(superHeroes[4]);

superHeroes[5] = "Luke Cage";
console.log(superHeroes[5]);

//array methods

superHeroes.push("Iron Fist"); //push adds to the end of an array
console.log(superHeroes[6]);

myAunts.push("Sarah");
console.log(myAunts[6]);

//pop removes the last item in an array and takes no arguement
myAunts.pop();
superHeroes.pop();

myAunts.unshift("Regina"); //unshift adds an item to the start of an array
console.log(myAunts[0]);

superHeroes.unshift("Beta Ray Bill");
console.log(superHeroes[0]);

myAunts.shift(); //shift removes the 1st item in an array
console.log(myAunts[0]);

superHeroes.shift();
console.log(superHeroes[0]);

myAunts.indexOf("Helen"); //answer 2
//indexOf will tell you where an item is located at within an array

myAunts.indexOf("Betty"); //answer -1
//If an item is not in an array it will get a -1

var myFavoriteAunts = myAunts.slice(0,4); //slice is used to copy all or part of an array
console.log(myFavoriteAunts);

var myAunts = ["May", "Barbara", "Helen", "Celeste", "Jeanette", "Regina", "Chi Chi", "Sarah"];
var allMyAunts = myAunts.slice();
console.log(allMyAunts);

var numbers = [22, 48, 55, 68, 72];
//console.log(numbers[numbers.length]);//This will return an answer of undefined

var nfcTeams = [
	["Rams", "49ers", "Seahawks", "Cardinals"],
	["Cowboys", "Eagles", "Giants", "Redskins"],
	["Bears", "Packers", "Lions", "Vikings"],
	["Saints", "Falcons", "Panthers", "Bucs"]
];
console.log(nfcTeams[0][2]); // This is an example of a nested array



