// JavaScript Document

//Array Iteration

//using a for loop
var meats = ["chicken", "fish", "pork", "beef"];

for(var i = 0; i < meats.length; i++) {
	console.log(meats[i]);
}

//ForEach

var meats = ["chicken", "fish", "pork", "beef"];

meats.forEach(function(meat) {
	//meat is a placeholder. Call it whatever you want.
	console.log(meat);
});

var meats = ["chicken", "fish", "pork", "beef"];

meats.forEach(function(meat) {
	//meat is a placeholder. Call it whatever you want.
	console.log("Inside the foreach " + meat);
});

function printMeat(meat) {
	console.log("$$$$$$");
	console.log(meat);
	console.log("$$$$$$");	
}

meats.forEach(printMeat);

