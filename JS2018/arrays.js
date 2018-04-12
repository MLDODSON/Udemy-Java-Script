//**ARRAYS**
//An array is a set of data contained in 1 unit. An array count starts at 0.

// Array was created using the Array object.
var a =  new Array(4);
a[0] = "Cheese";
a[1] = "Bread";
a[2] = "Banana Pudding";
a[3] = "Yogurt";

console.log(a);


// Empty Array was created using square brackets.
var b =  [];
b[0] = "Football";
b[1] = "Basketball";
b[2] = "Baseball";
b[3] = "Hockey";

console.log(b);


// A populated Array.
var person = ["Jill", "Ron", "Joe", "Betty"];
console.log(person);

// We can also get the length of an array.
console.log(person.length);

//Now we are going to use a for loop the list all the items in our person array
for (var idx = 0; idx < person.length; idx++) {
	console.log(person[idx]);
}

//Adding and removing items from an array.

let aunts = ["May", "Barbara", "Jeanette", "Helen"];

//First I will use push to add an item to end of my array.
aunts.push("Celeste");

//Next I will use unshift to add to the start.
aunts.unshift("Chi Chi");

//Now I will add an aunt after Barbara.
aunts.splice(3, 0, "Alice");

//Now I will remove the first name from my aunts.
aunts.shift();

//Now I will remove the last name.
aunts.pop();

//Now I will use splice to remove Alice's name.
aunts.splice(2,1);
console.log(aunts);

//JSON (Javascript Object Notation) It is the default object format used in JS.
var myObject = { lady: "Glenny", color: "Blue", weight: "220" };
myObject.age = "50";
myObject.city = "St. Louis";
console.log(myObject);





