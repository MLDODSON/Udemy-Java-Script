var todos = ["Practice your Coding."];

var input = prompt("What would you like to do?");

while(input !== "quit") {
 //handle input
 if(input === "list") {
	todos.forEach(function(todo, i) {
	 console.log(i + ": " + todo);
	});
 } else if(input === "new") {
   //ask for new todo
   //add to todos array
   var newTodo = prompt("Enter new Todo.");
   //add to todos array
   todos.push(newTodo);
}
   //ask again for new input
   input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");