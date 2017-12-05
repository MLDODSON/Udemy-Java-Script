// loops

//For Loops

for(var i = 0; i < 10; i++) {
	console.log(i);
}

for(var x = 1; x < 15; x++) {
	console.log(x);
}

var girls =["Angie", "Hope", "Marie", "Paola", "Dalina"];

for(var i = 0; i < 5; i++) {
	console.log(girls[i]);
}

var guys = ["Kevin", "Arthur", "Vincent", "Jerry", "David", "Darren"];

for(var a = 0; a < guys.length; a++) {
	console.log(guys[a]);
}

//for loop in reverse order

for(var i = girls.length - 1; i >= 0; i--) {
	console.log(girls[i]);
}

var color = ["green", "black", "red", "orange", "pink", "purple", "blue"];

for(var b = color.length - 1; b >=0; b--) {
	console.log(color[b]);
}

//While Loops

var i = 0;
while(i < color.length) {
	console.log(color[i]);
	i++;
}

var x = 0;
while(x < guys.length) {
	console.log(guys[x]);
	x++;
}

var z = 0;
while(z < girls.length) {
	console.log(girls[z]);
	z++;
}

//Loop Break

for (var i = 1; i <= 5; i++) {
	console.log(i);
	
	if (i === 3) {
		break;
	}
}

for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	
	console.log(i);
}

//Coding Challange 2


var year = [1968, 2001, 1978, 1975, 1973, 2006];

function printFullAge(year) {
	
var ages = [];
var fullAges = [];

for(i = 0; i < year.length; i++) {
	ages[i] = 2017 - year[i];
}

for(i = 0; i < ages.length; i++) {
	if(ages[i] >= 18) {
		console.log("This person is " + ages[i] + " years old, and is of full age.");
		fullAges.push(true);
	} else {
		console.log("This person is " + ages[i] + " years old, and is not of full age.");
		fullAges.push(false);
	}
}
	
	return fullAges;
}

var year = [1968, 2001, 1978, 1975, 1973, 2006];
var full_1 = printFullAge(year);
var full_2 = printFullAge([2011, 1937, 1986]);






































