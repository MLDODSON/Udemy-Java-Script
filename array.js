// JavaScript Document

var fruits = ["apple", "orange", "grapes", "strawberry", "blueberry", "banana"];
//console.log(fruits[4]);

fruits[6] = "cherry";
//console.log(fruits[6]);

fruits.push("pear");
//console.log(fruits[7]);

//fruits.pop();

//fruits.unshift("watermelon");

fruits.shift();

for(var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

fruits.forEach(function(food) {
	//food is a placeholder. Call it whatever you want.
	console.log(food);
});

var baseballTeams = ["Cardinals", "Yankees", "Dodgers", "Red Socks", "Giants", "Cubs"];
//console.log(baseballTeams[4]);

baseballTeams.push("Royals");

baseballTeams.unshift("Indians");

baseballTeams.forEach(function(teams) {
	console.log(teams);
});

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
	if(color% 2 === 0) {
		console.log(color);
	}
});