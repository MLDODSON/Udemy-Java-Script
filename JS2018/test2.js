/*
//If Else, Else If
var myGirl = "My favorite girl is from the Santiago, DR.";
var myLady = "My lady is from Puerto Plata, DR.";

if (myGirl.length > 50) {
	console.log("I am going to Santiago");
} else {
	console.log("I am going to Pueto Plata");
}

if (myLady.length < myGirl.length) {
	console.log("I am going to Santiago.");
} else {
	console.log("I am going to Pueto Plata.");
}

if (myLady.length <= 33) {
	console.log("I am going to the Sunscape Resort.");
} else {
	console.log("I am going to stay home.");
}

var tvShow = "Atlanta is a great show!";
var myShow = "Gotham is one of the tv shows I rarely miss.";

if (tvShow.length < myShow.length) {
	console.log("I will be watching Atlanta tonight on FX.");
} else if (myShow.length >= 50) {
	console.log("I will be watching Gotham at 7PM tonight.");
} else {
	console.log("Nothing is on so I will watch Netflix.");
}

if (myShow.length < 50) {
	console.log("I am watching Gotham on FOX tonight.");
} else if (tvShow.length >= 25) {
	console.log("Going to watch another crazy episode of ATL tonight!");
} else {
	console.log("Nothing is on so I will watch Netflix.");
} 

if (myShow.length < myGirl.length) {
	console.log("I am watching Gotham with my girl.");
} else if (tvShow.length >= myLady.length) {
	console.log("I am Going to watch ATL with my lady");
} else {
	console.log("Nothing is on tv so my wife and I will watch Netflix.");
} 


//Switch Statements
var day = "tuesday";
switch (day) {
	case "monday":
		console.log("Today is Monday.");
		break;
	case "tuesday":
		console.log("Today is Tuesday.");
		break;
	default:
		console.log("Today is Friday.");
		   }

var job = "graphic artist";
switch (job) {
	case "web designer":
		console.log("Joe is a web designer");
		break;
	case "teacher":
		console.log("Joe is a school teacher");
		break;
	case "graphic artist":
		console.log("Joe is a great graphic artist!");
		break;
	default:
		console.log("Joe works at none of these jobs.");
		   }

var travel = "Paris";
switch (travel) {
	case "New York":
		console.log("Manny is going to the Big Apple!");
		break;
	case "Miami":
		console.log("Manny is going to Miami Beach this summer.");
		break;
	case "Puerto Plata":
		console.log("Manny is going back to Puerto Plata next week.");
		break;
	default:
		console.log("Manny is broke so he will be staying at home.");
			  }

//For Loops

for (var x = 0; x < 6; x++) {
	console.log(x);
}

//for (var z = 0; z < 10; z++) {
	//console.log(z);
//}

var food = ["chicken", "beef", "grapes", "spinach", "fish"];

for (var i = 0; i < food.length; i++) {
	console.log(food[i]);
}

var singers = ["Prince", "Rick James", "James Brown", "Natalie Cole"];

for (var s = 0; s < singers.length; s++) {
	console.log(singers[s]);
}

var teams = ["Colts", "Tigers", "Chiefs", "Eagles"];

for (index in teams) {
	console.log(teams[index]);
}

//While Loops

m = 0;

while (m < food.length) {
	console.log(food[m]);
	m++;
}

n = 0;

while (n < singers.length) {
	console.log(singers[n]);
	n++;
}

q = 0;

while (q < teams.length) {
	console.log(teams[q]);
	q++;
}


//Do While Loop

var pie = ["cherry", "pecan", "apple", "peach", "pumpkin"];

var p = 0;
do  {
	console.log(pie[p]);
	p++;
} while (p < pie.length);


var f = 0;
do {
	console.log(food[f]);
	f++;
} while (f < food.length);

//Special Array quiz. Create an array and add items to the start, inside and end.

var city = ["Santiago", "Paris", "Berlin", "Denver", "Houston"];

city.push("St. Louis");
city.unshift("New York");
city.splice(3,0, "Miami");
console.log(city);
*/

//Functions

//Use a function to turn the document light blue.

function bkColor(color) {
	document.body.style.backgroundColor = color;
}
bkColor("lightblue");

function add(a, b) {
	console.log(a + b);
}
add(6, 20);

function trips(c, d) {
	console.log(`I am going to ${c} and ${d} this summer.`)
}
trips("Disneyworld", "Universal Studios");

function math(a,b,c) {
	console.log((a + b) * c);
}
math(4,3,16);

function eats(a,b,c) {
	console.log(`For dinner I had ${a}, ${b} and ${c} for dessert.`);
}
eats("steak", "onion rings", "chocolate cake");

function divide(a,b,c) {
	console.log((a - b) / c);
}
divide(25,5,4);

function date(a,b,c) {
	console.log(`I was born on ${a} ${b}, ${c}.`)
}
date("April", 23, 1968);

function album(a,b,c) {
	console.log("One of my favorite " + a + " is " + b + " " + c + ".");
}
album("albums", "Prince", 1999);


function modulus(a,b) {
	console.log(a % b);
}
modulus(15,4);

function sports(a,b,c,d) {
	console.log(`My favorite sports are ${a}, ${b}, ${c}, and ${d}.`);
}
sports("football", "basketball", "baseball", "hockey");

var g = 10;
var h = 5;

console.log(g === 10);
console.log(h >= 5);
console.log(g <=10 && h === 4);
console.log(g === 8 || h <= 5);
console.log(h !== 5);