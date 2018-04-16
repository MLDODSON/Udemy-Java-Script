//3 ways to write a variable.
var favTeam = "Cardinals";
const city = "St. Louis";
let color = "red";
var sport = "Baseball";
let day = "Mondays";

color = "blue";
day = "SUNDAYS";

//Concatenation.
console.log("The " + city + " " + favTeam + " team colors are " + color + " and blue.");
console.log(`The ${city} ${favTeam} team colors are blue and ${color}.`);
console.log(`The ${city} ${sport} ${favTeam} wear ${color} ${sport} caps on Sundays.`);

//Using toLower and toUpperCase.
console.log("The " + city.toUpperCase() + " " + favTeam.toLocaleUpperCase() + " wear " + color.toUpperCase() + " " + sport.toLowerCase() + " caps on " + day.toLowerCase() + ".");

//Using .length.
console.log(favTeam.length);
console.log(city.length);

//Arrays
var z = new Array(3);
z[0] = "Spanky";
z[1] = "Alfhafa";
z[2] = "Buckwheat";

console.log(z);

var x = [];
x[0] = "Winter";
x[1] = "Spring";
x[2] = "Summer";
x[3] = "Fall";

console.log(x);

var uncles = ["Anthony", "Eddie", "Byron", "Mitchell"];
uncles.push("Arthur");
uncles.unshift("Houston");
uncles.splice(3, 0, "Joe");
console.log(uncles);

let meat = ["Bacon", "Chicken", "Fish", "Steak", "Hamburger"];
meat.pop();
meat.shift();
meat.splice(1,1);
console.log(meat);

//JSON (Javascript Object Notation).
var myStuff = { car: "Chevy", favFood: "Chicken", hobby: "Reading Books" };
myStuff.home = "St. Louis";
myStuff.team = "Golden State";
myStuff.movie = "The Warriors";
console.log(myStuff);

