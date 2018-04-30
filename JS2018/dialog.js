/*
function eat(a) {
	alert(`I could use a ${a} right now!`);
}
eat("hamburger");

var food = ["Steak", "Texas Toast", "Pasta", "and Wine"];

alert(`Tonight I had ${food} for dinner.`);
	
var result = confirm("Do you want to enter this site?");
console.log("Confirm result: " + result);

var prompts = prompt("Please enter your password.");
console.log("Prompt result: " + prompts);

//Refreshers

function name(i) {
	console.log(`What is your full name? I am ${i}.`)
}
name("Casper the Friendly Ghost");

function aunts(i) {
	console.log(`I have aunts named ${i}.`);
}
aunts(["May", "Barbara", "Helen", " and Celeste"]);

var singer = "Prince";

function song(a) {
	console.log(`${a} by ${singer} was a great song!`);
}
song("When Doves Cry");

var singer2 = "Michael Jackson";

function music(x) {
	x.unshift("Billie Jean");
	console.log(`My top five ${singer2} songs are ${x}.`);
}

music(["Get On the Floor", "Don't Stop Til You Get Enough", "Off The Wall", " and Shake Your Body Down to the Ground"]);

var hits = 13;
var hits2 = 5;
var hits3 = 20;
var group = "The Beatles"

function billBoard(hits,hits2,hits3) {
	if (hits + hits2 >= hits3) {
		console.log(`${singer} and ${singer2} have more #1 hits than ${group}.`);
	} else {
		console.log(`${group} has more #1 hits than ${singer} and ${singer2} combined.`);
	}	
}
billBoard();
*/

for(var i = 0; i < 6; i++) {
	console.log(i);
}


function number(z,x) {
	console.log(z * x);
}
number(12,10);

var women =["Glenny", "Pam", "Ora", "Arlene", "Pearl"];

for(var a = 0; a < 5; a++) {
	console.log(women[a]);
}
