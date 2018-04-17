//IF STATEMENTS
var place = "St. Louis, MO is my home town.";
var place2 = "Puerto Plata is my home away from home.";

if (place.length > 30) {
	console.log(place); 
} else {
	console.log(place2);
}

const dinner = "We are having baked chicken tonight.";
const dinner2 = "We are ordering Pizza Hut for dinner.";
const dinner3 = "We are having leftovers for dinner tonight.";

if (dinner.length > 50) {
	console.log(dinner);
} else if (dinner2.length >= 50) {
	console.log(dinner2);
} else {
	console.log(dinner3);
}

//SWITCH STATEMENT
var month = "april";
switch (month) {
	case "may":
		console.log("May");
		break;
	case "april":
		console.log("We are in the month of April.");
		break;
	default:
		console.log("Month not found.");	
}

var movies = "avengers";
switch (movies) {
	case "black panther":
		console.log("I am going to see Black Panther.");
		break;
	case "avengers":
		console.log("I am going to see the Avengers: Infinity War.");
		break;
	default:
		console.log("I will not be seeing any of these movies.");
			  }

//FOR LOOP
for (var i = 0; i < 5; i++) {
	console.log(i);
}

var fruits = ["grapes", "oranges", "apples", "strawberries"];

for (var a = 0; a < fruits.length; a++) {
	console.log(fruits[a]);
}

//FOR IN
var colors = ["red", "blue", "purple", "gold", "green"];

for (index in colors) {
	console.log(colors[index]);
}
	
//WHILE LOOP
var teams = ["Cardinals", "Blues", "Rams", "Warriors"];

var z = 0;

while (z < teams.length) {
	console.log(teams[z]);
	z++;
}

//Do WHILE
var pie = ["cherry", "pecan", "apple", "peach", "pumpkin"];

var x = 0;
do  {
	console.log(pie[x]);
	x++;
} while (x < pie.length);





	
	