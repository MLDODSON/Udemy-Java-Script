/////////////////////////////////////
// Lecture: Hoisting

//functions
/*
function calculateAge(year) {
	console.log(2017 - year);
}

calculateAge(1968);

function greeting(name) {
	console.log("Hello " + name);
}

greeting("Mike!");


greet("Betty!");

function greet(name) {
	console.log("Well hello " + name);
}

//variables
var retirement = function(year) {
	console.log(65 - (2017 - year));
}

retirement(1968);


var age = 16;

function foo() {
	var age = 44;
	console.log(age);
}

foo();
console.log(age);



/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping
/*
var a = "Hello! ";
first();

function first() {
	var b = "Hi! ";
	second();
	
	function second() {
		var c = "Hey!";
		console.log(a+b+c);
	}
}

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
/*
calculateAge(1973);

function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}
*/

var mike = {
    name: 'mike',
    yearOfBirth: 1968,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

mike.calculateAge();


var ted = {
    name: 'Ted',
    yearOfBirth: 1984
};


ted.calculateAge = mike.calculateAge;
ted.calculateAge();

