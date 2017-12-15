// Advanced JS

//Function Constructor

/*

var ted = {
	name: "Ted",
	yearOfBirth: 1972,
	job: "DJ"
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge =
	this.calculateAge = function() {
	console.log(2017-this.yearOfBirth)
};

Person.prototype.lastName = "Smith";
Person.prototype.lastName2 = "Banner";
Person.prototype.lastName3 = "Davis";

var ted = new Person("Ted", 1972, "DJ");

var hulk = new Person("Bruce", 1962, "Gamma Scientist");

var andrea = new Person("Andrea", 1976, "House Wife");

ted.calculateAge();
hulk.calculateAge();
andrea.calculateAge();

console.log(ted.lastName);
console.log(hulk.lastName2);
console.log(andrea.lastName3);



var mike = {
	name: "Michael",
	age: 46,
	career: "Web Developer"
};

var Individual = function(name, age, career) {
	this.name = name;
	this.age = age;
	this.career = career;
};

Individual.prototype.retirement =
	this.retirement = function() {
	console.log(64 - this.age)
};

Individual.prototype.weight1 = 238;
Individual.prototype.weight2 = 175;
Individual.prototype.weight3 = 210;

var mike = new Individual("Mike", 46, "Web Develper");
var rose = new Individual("Rose", 33, "Accountant");
var vincent = new Individual("Vincent", 41, "Chef");

mike.retirement();
rose.retirement();
vincent.retirement();

console.log(mike.weight1);
console.log(rose.weight2);
console.log(vincent.weight3);
*/

//Object.create

/*
var personProto = {
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth);
	}
};

var mike = Object.create(personProto);
mike.name = "Michael";
mike.yearOfBirth = 1968;
mike.job = "Graphic Artist";

var pam = Object.create(personProto,{
	name: {value: "Pam"},
	yearOfBirth: {value: 1982},
	job: {value: "Nurse"}
});
*/

//Primitives vs Objects

//Primitives
var x = 36;
var z = x;
x = 46;
console.log(x);
console.log(z);




//Objects
var obj1 = {
	name: "Joe",
	age: 32
};
var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);



//Functions
var age = 30;
var obj = {
	name: "Phil",
	city: "Chicago"
};

function change(x,y) {
	x = 36;
	y.city = "Puerto Plata";
}

change(age, obj);

console.log(age);
console.log(obj.city);

























