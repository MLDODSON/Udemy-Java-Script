//MATH OPERATORS

//Addition
var number1 = 36 + 2;
var number2 = 28 + 4;

console.log(number1);
console.log(number2);

if (number1 < number2) {
	console.log("Go for it!");
} else {
	console.log("Don't do it!");
}

//Subtraction
var amount = 42 - 20;
var amount2 = 100 - 95;
console.log(amount);
console.log(amount2);

if (amount2 >= amount) {
	console.log("Let's have beer.");	
} else {
	console.log("Let's have wine.");
}

//Multiplication
const multi = 12 * 6;
const multi2 = 14 * 4;
console.log(multi);
console.log(multi2);

if (multi >= multi2) {
	console.log("Our team won!");
} else {
	console.log("Damn we lost again!");
}

//Division
let divide = 70 / 7;
let divide2 = 100/10;
console.log(divide);
console.log(divide2);

if (divide > divide2) {
	console.log("We have cake for dessert.");
} else if (divide < divide2) {
	console.log("We have ice cream for dessert.");
} else {
	console.log("We have cake and ice cream for dessert.");
}

//Modulus
var a = 100;
var b = 30;
var c = a % b;
console.log(c);

var d = 15;
var e = 6;
var f = d % e;
console.log(f);

//Incremental
var m = 21;
m++;
var n = m;
console.log(n);

var o = 20;
o--;
var p = o;
console.log(p);

//Precedence
var order = (17 + 33) * 5;
console.log(order);

var order2 = (160 - 15) / 5;
console.log(order2);

//Comparison
var number3 = 7;
var number4 = 4 + 3;
console.log(number3 >= number4);
console.log(number3 === number4);
console.log(number4 > number3);
console.log(number4 <= number3);

//Logical
var i = 10;
var k = 15;
console.log(i == 10);
console.log(i === 10);
console.log(i === 8);
console.log(i !== 7); //!== means not equal.
console.log(i > 6 && k > 12); //When using && both sides must be true or it's false.
console.log(i === 10 || k > 30); //When using the or || only one part needs to be true.
console.log(i === 8 || k > 22); //When using the or || only one part needs to be true.









