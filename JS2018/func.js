/*
function setBg(color) {
	document.body.style.backgroundColor = color;
}
	
function add(a, b) {
	var result = a + b;
	return result;
}
*/

function doSomething() {
	console.log("HELLO!");
}

//Arguments
function area(length, width) {
	console.log(length * width);
}
area(10, 3);

function numbers(x, y, z) {
	console.log((x + y) * z);
}
numbers(8,3, 12);

function greet(friend1, friend2, friend3) {
	console.log(`How are you ${friend1}?`);
	console.log(`How are you doing ${friend2}?`);
	console.log(`Good to see you ${friend3}.`);
}
greet("Darda", "Geeorgina", "Chi Chi");

function setBg(color) {
	document.body.style.backgroundColor = color;
}
setBg("lightyellow");

//Return
function test(x,y) {
	return y * x;
}
test(10, 3);//30

function test2(x) {
	return x * 4;
	console.log(x);
	return x / 2;
}
test2(20);//80. The function stops at the 1st return.






