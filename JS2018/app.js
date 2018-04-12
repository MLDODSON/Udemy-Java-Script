//alert ("Hello World");


//**VARIABLES**
//There are 5 types of variables: Number, Boolean, String, Null and Undefined.

//Variables can be written starting with the standard var or the ES6 versions const and let. 
//let is used if you plan to modify your variable

var season = "springtime";
var season2 = "spring";
const food = "pizza";
const food2 = "pasta";
let place = "Spain";

place = "Puerto Plata";

//Here I concatenation to build a sentence. I do both the standard way and the ES6 way.

console.log("I love eating " + food + " in " + place + " in the " + season + ".");
console.log(`I love eating ${food} in ${place} in the ${season}.`);

//We can get the length of or variable string by using .length.

console.log(season.length);
console.log(food.length);
console.log(place.length);

//Or we can use .substr to get a certain number of characters from a string

console.log(season.substr(0,6)); //I get back spring in the console.

//We can also use methods like toLower and toUpperCase

console.log(season.toLowerCase());
console.log(food.toUpperCase());

//Now in a sentence.
console.log(season2.toUpperCase() + " is the best time to eat " + food2.toLowerCase() + " in " + place.toUpperCase() + ".");



