// JavaScript Document
var isMarried = true;
console.log("It is " + isMarried + " that Tim has finally tied the knot!");

function city() {
	return "I live in St. Louis, MO"
}

console.log(city());

function math(d,e,f) {
	var g = d + e * f;
	return g;
}

var favoriteDessert = "cherry cheescake";

favoriteDessert = prompt("What is Mike's favorite holiday desert?");

switch (job) {
	case "devil's food cake":
		console.log("Mike love's devil's food cake.");
		break;
	case "German chocolate":
		console.log("Mike love's eating German chocolate cake during Thanksgiving.");
		break;
	case "lemon meringue pie":
		console.log("Mike all time favorite holiday dessert is cherry cheesecake.");
		break;
	default:
		console.log("Ben does something else.");
		   }

console.log(math(6,13,5));

var wrestler = ["Sting", "Rick Flair", "Hulk Hogan", "Randy Savage"];
console.log(wrestler[1]);

wrestler.unshift("Roddy Piper");

wrestler.push("Andre The Giant");

wrestler.pop();

wrestler.shift();

var black = 37;
var blue = 48;
var purple = 44

if(black <= blue && black >= purple) {
	console.log("We are having wine with our dinner");
} else if(blue >= purple && blue >= black) {
	console.log("We are having hard apple cider with our dinner");
} else {
	console.log("We are having beer with our dinner");
}

var gift = "Playstation 4";
gift = prompt("What do you want for Christmas?");

function job(a) {
	alert("Don't forget to take out the " + a + ".");
}

job("trash");