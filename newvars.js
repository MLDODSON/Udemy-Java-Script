// Lecture: Let and Const


//ES5
var name5 = "Jane Smith";
var age5 = 38;
name5 = "Jane Miller";
console.log(name5);

//ES6
const name6 = "Jane Smith";
let age6 = 23;


//ES5
function driversLicence5(passedTest) {
	
	if (passedTest) {
		var firstName = "Rick";
		var yearOfBirth = 1990;
		console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car.");
	}
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
	
	if (passedTest) {
		const firstName = "Rick";
		const yearOfBirth = 1990;
		console.log(`${firstName}, born in ${yearOfBirth} is now officially allowed to drive a car.`);
	}
}

driversLicence6(true);

//ES6 if we want things to work outside of the block
function driversLicence6(passedTest) {
	
	let firstName;
	const yearOfBirth = 1990;
	
	if (passedTest) {
		firstName = "Chucky";
		
	}
	
		console.log(`${firstName}, born in ${yearOfBirth} is now officially allowed to drive a car.`);
}


//The let variable is block scoped. The code below will thus print to the console 2 different results.


let i = 10;

for (let i = 0; i < 8; i++) {
	console.log(i);
}

console.log(i);


//However if we use the var, only the variable in the for loop will print to the console
var a = 12;

for (var a = 0; a < 10; a++) {
	console.log(a);
}

console.log(a);





