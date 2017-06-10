var dinner = ["I want a steak."];

var input = prompt("What do you want for dinner?");

while(input !== "quit") {
 //handle input
 if(input === "choice") {
   console.log(dinner);
 } else if(input === "new") {
   //ask for new todo
   //add to todos array
   var newDinner = prompt("Enter new Dinner.");
   //add to todos array
   dinner.push(newDinner);
}
   //ask again for new input
   input = prompt("What do you want for dinner?");
}
console.log("OK, YOU QUIT THE APP!");